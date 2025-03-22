import { Fragment, useCallback, useContext, useEffect, useRef, useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
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
import { getUserDetail, updateUser } from "../../../api/UserApi";
import LoaderComponent from "../../../components/LoaderComponent";
import { UserFormikFormValues } from "../../../type/pages/user";
import AppConfig from "../../../config/config";
import UserForm from "../../../components/pages/users/add/UserForm";
import { IAgentWithLocationObj } from "../../../api/types/agent";
import { getAgentsWithLocationsList } from "../../../api/AgentApi";
import AuthContext from "../../../context/authContext";

const validationSchema = Yup.object().shape({
	email: Yup.string().email("Please enter your email address").required("This field is required"),
	firstName: Yup.string().required("This field is required"),
	lastName: Yup.string().required("This field is required"),
	username: Yup.string().required("This field is required"),
	role: Yup.string().required("This field is required"),
	isActive: Yup.number().min(0).max(1).required("This field is required"),
});

export const getServerSideProps: GetServerSideProps<{}> = async () => {
	return {
		props: {},
	};
};

const EditUserPage: NextPage = () => {
	const router = useRouter();
	const { isLoggedIn } = useContext(AuthContext);

	const [lastSave, setLastSave] = useState<Dayjs | null>(null);
	const [initialValues, setInitialValues] = useState<UserFormikFormValues>({
		email: "",
		firstName: "",
		username: "",
		lastName: "",
		password: "",
		role: "",
		isActive: 0,
		agentId: undefined,
		agentLocationId: undefined,
	});
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [fetchUserDetailLoader, setFetchUserDetailLoader] = useState<boolean>(true);
	const [fetchListLoader, setFetchListLoader] = useState<boolean>(true);
	const [agentsList, setAgentsList] = useState<Array<IAgentWithLocationObj>>([]);

	const formRef = useRef<FormikProps<UserFormikFormValues>>(null);

	const submitHandler = async (
		values: UserFormikFormValues,
		formObj: { resetForm: () => void },
	) => {
		try {
			setIsLoading(true);

			const postData = { ...values };

			if (!postData.password) {
				delete postData.password;
			}

			const response = await updateUser(parseInt(router.query.id as string, 10), {
				...postData,
			});

			if (response.data.errors) {
				toast.error(response.data.errors);
				return;
			}

			formObj.resetForm();
			setLastSave(dayjs());
			showNotification("Success", "User updated successfully", "success");
			setInitialValues({
				...values,
				password: "",
			});
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

	const fetchUserProfile = useCallback(async () => {
		try {
			if (!parseInt(router.query.id as string, 10)) {
				toast.error("Id is invalid");
				return;
			}

			setFetchUserDetailLoader(true);

			const userProfileResponse = await getUserDetail(
				parseInt(router.query.id as string, 10),
			);

			if (userProfileResponse.data.user) {
				setInitialValues({
					...userProfileResponse.data.user,
					password: "",
				});
			}
		} catch (err: any) {
			toast.error(getCatchError(err)[0]);
		} finally {
			setFetchUserDetailLoader(false);
		}
	}, [router.query.id]);

	useEffect(() => {
		if (router.query.id) {
			fetchUserProfile();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fetchUserProfile, router]);

	return (
		<UserPermissionWrapper
			title={generalPagesMenu.editUser.text}
			breadCrumbList={[
				{
					title: dashboardPagesMenu.userManager.text,
					to: `${AppConfig.APP_BASE_URL}/${dashboardPagesMenu.userManager.subMenu.userSummary.path}`,
				},
				{
					title: generalPagesMenu.editUser.text,
					to: `${AppConfig.APP_BASE_URL}/${generalPagesMenu.editUser.path}`,
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
						{isLoading ? "Updating" : "Update"}
					</Button>
				</Fragment>
			}
			subheaderLeftUserSectionContent={
				<span className='text-muted'>
					{initialValues.firstName} {initialValues.lastName}
				</span>
			}>
			<Page container='fluid'>
				{fetchUserDetailLoader || fetchListLoader ? (
					<LoaderComponent message='Please wait...' />
				) : null}

				{!fetchUserDetailLoader && !fetchListLoader && initialValues.email && (
					<UserForm
						submitHandler={submitHandler}
						initialValues={initialValues}
						formRef={formRef}
						validationSchema={validationSchema}
						addUserPage={false}
						lastSave={lastSave}
						isLoading={isLoading}
						agentsList={agentsList}
					/>
				)}
			</Page>
		</UserPermissionWrapper>
	);
};

export default EditUserPage;
