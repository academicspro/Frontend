import { Fragment, useCallback, useContext, useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import dayjs, { Dayjs } from "dayjs";
import { FormikProps } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import showNotification from "../../../components/extras/showNotification";
import { dashboardPagesMenu, generalPagesMenu } from "../../../menu";
import Button from "../../../components/bootstrap/Button";
import Spinner from "../../../components/bootstrap/Spinner";
import Page from "../../../layout/Page/Page";
import UserPermissionWrapper from "../UserPermissionWrapper";
import { getCatchError } from "../../../utils/errorHandler";
import { addUser } from "../../../api/UserApi";
import { UserFormikFormValues } from "../../../type/pages/user";
import AppConfig from "../../../config/config";
import UserForm from "../../../components/pages/users/add/UserForm";
import AuthContext from "../../../context/authContext";
import { getAgentsWithLocationsList } from "../../../api/AgentApi";
import { IAgentWithLocationObj } from "../../../api/types/agent";
import LoaderComponent from "../../../components/LoaderComponent";

const validationSchema = Yup.object().shape({
	email: Yup.string().email("Please enter your email address").required("This field is required"),
	firstName: Yup.string().required("This field is required"),
	lastName: Yup.string().required("This field is required"),
	username: Yup.string().required("This field is required"),
	role: Yup.string().required("This field is required"),
	password: Yup.string().required("This field is required"),
	isActive: Yup.number()
		.min(0)
		.max(1)
		.required("This field is required")
		.typeError("This field is required"),
});

const AddUserPage: NextPage = () => {
	const router = useRouter();
	const { isLoggedIn } = useContext(AuthContext);

	const [lastSave, setLastSave] = useState<Dayjs | null>(null);
	const [initialValues] = useState<UserFormikFormValues>({
		username: "",
		email: "",
		firstName: "",
		lastName: "",
		password: "",
		role: "",
		isActive: 0,
	});
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [fetchListLoader, setFetchListLoader] = useState<boolean>(true);
	const [agentsList, setAgentsList] = useState<Array<IAgentWithLocationObj>>([]);

	const formRef = useRef<FormikProps<UserFormikFormValues>>(null);

	const submitHandler = async (
		values: UserFormikFormValues,
		formObj: { resetForm: () => void },
	) => {
		try {
			setIsLoading(true);

			const response = await addUser({
				...values,
			});

			if (response.data.errors) {
				toast.error(response.data.errors);
				return;
			}

			formObj.resetForm();
			setLastSave(dayjs());
			showNotification("Success", "User added successfully", "success");
		} catch (err: any) {
			toast.error(getCatchError(err)[0]);
		} finally {
			setIsLoading(false);
		}
	};

	const fetchAgentsList = useCallback(async () => {
		try {
			setFetchListLoader(true);

			const response = await getAgentsWithLocationsList();

			if (response.data.errors) {
				toast.error(response.data.errors);
				return;
			}

			setAgentsList(response.data.agentsList);
		} catch (err: any) {
			toast.error(getCatchError(err)[0]);
		} finally {
			setFetchListLoader(false);
		}
	}, []);

	useEffect(() => {
		if (isLoggedIn) {
			fetchAgentsList();
		}
	}, [isLoggedIn, fetchAgentsList]);

	return (
		<UserPermissionWrapper
			title={generalPagesMenu.addUser.text}
			breadCrumbList={[
				{
					title: dashboardPagesMenu.userManager.text,
					to: `${AppConfig.APP_BASE_URL}/${dashboardPagesMenu.userManager.subMenu.userSummary.path}`,
				},
				{
					title: generalPagesMenu.addUser.text,
					to: `${AppConfig.APP_BASE_URL}/${generalPagesMenu.addUser.path}`,
				},
			]}
			subheaderRightSectionContent={
				<Fragment>
					<Button
						icon='ArrowBack'
						isLight
						color='secondary'
						onClick={() =>
							router.push(
								`${AppConfig.APP_BASE_URL}/${dashboardPagesMenu.userManager.subMenu.userSummary.path}`,
							)
						}>
						Back
					</Button>
					<Button
						icon={isLoading ? undefined : "Save"}
						isLight
						color={lastSave ? "info" : "success"}
						isDisable={isLoading}
						onClick={() => formRef.current?.handleSubmit()}>
						{isLoading && <Spinner isSmall inButton />}
						{isLoading ? "Submitting" : "Submit"}
					</Button>
				</Fragment>
			}>
			<Page container='fluid'>
				{fetchListLoader && <LoaderComponent message='Please wait...' />}

				{!fetchListLoader && (
					<UserForm
						addUserPage
						submitHandler={submitHandler}
						initialValues={initialValues}
						formRef={formRef}
						validationSchema={validationSchema}
						lastSave={lastSave}
						isLoading={isLoading}
						agentsList={agentsList}
					/>
				)}
			</Page>
		</UserPermissionWrapper>
	);
};

export default AddUserPage;
