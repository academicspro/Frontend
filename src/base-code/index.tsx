import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import dayjs, { Dayjs } from "dayjs";
import { FormikProps } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import showNotification from "../../components/extras/showNotification";
import { authPagesMenu, generalPagesMenu } from "../../menu";
import Button from "../../components/bootstrap/Button";
import Spinner from "../../components/bootstrap/Spinner";
import Page from "../../layout/Page/Page";
import PrivatePageWrapper from "../../layout/PageWrapper/PrivatePageWrapper";
import AuthContext from "../../context/authContext";
import { getCatchError } from "../../utils/errorHandler";
import { getUserProfile, updateUserProfile } from "../../api/AccountApi";
import LoaderComponent from "../../components/LoaderComponent";
import { ProfileFormikFormValues } from "../../type/pages/profile";
import ProfileForm from "../../components/pages/profile/ProfileForm";

const validationSchema = Yup.object().shape({
	email: Yup.string().email("Please enter your email address").required("This field is required"),
	firstName: Yup.string().required("This field is required"),
	lastName: Yup.string().required("This field is required"),
	username: Yup.string().required("This field is required"),
	role: Yup.string().required("This field is required"),
	passwordChangeCTA: Yup.boolean().required("This field is required"),
	file: Yup.mixed()
		.nullable()
		.test({
			message: "Please provide a supported file type",
			test: (file: any) => {
				if (!file) {
					return true;
				}
				const fileExtension = file ? file.type.split("/")[1] : "";
				const isValid = ["jpeg", "jpg", "png"].includes(fileExtension.toLowerCase());
				return isValid;
			},
		})
		.test({
			message: `File too big, can't exceed 10MB limit`,
			test: (file: any) => {
				if (!file) {
					return true;
				}
				const isValid = file ? file.size <= 10 * 1024 * 1024 : false;
				return isValid;
			},
		}),
	password: Yup.string().when("passwordChangeCTA", (passwordChangeCTA: any, schema) => {
		if (passwordChangeCTA[0] === true) {
			return schema.required("Password is required");
		}
		return schema;
	}),
	newPassword: Yup.string().when("passwordChangeCTA", (passwordChangeCTA: any, schema) => {
		if (passwordChangeCTA[0] === true) {
			return schema
				.min(8, "New Password must have at least 8 characters")
				.matches(
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
					"Must contain one upper and lower case character and a digit",
				)
				.required("This is a required field");
		}
		return schema;
	}),
	confirmNewPassword: Yup.string().when("passwordChangeCTA", (passwordChangeCTA: any, schema) => {
		if (passwordChangeCTA[0] === true) {
			return schema
				.required("This is a required field")
				.oneOf([Yup.ref("newPassword")], "Password and Confirm password don't match");
		}
		return schema;
	}),
});

const ProfilePage: NextPage = () => {
	const router = useRouter();
	const { userProfileObj, logoutHandler } = useContext(AuthContext);

	const [lastSave, setLastSave] = useState<Dayjs | null>(null);
	const [initialValues, setInitialValues] = useState<ProfileFormikFormValues>({
		guid: "",
		email: "",
		firstName: "",
		lastName: "",
		username: "",
		role: "",
		file: null,
		thumbProfileImg: null,
		passwordChangeCTA: false,
		password: "",
		newPassword: "",
		confirmNewPassword: "",
	});
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [fetchUserDetailLoader, setFetchUserDetailLoader] = useState<boolean>(true);

	const formRef = useRef<FormikProps<ProfileFormikFormValues>>(null);

	const fetchUserProfile = useCallback(async () => {
		try {
			setFetchUserDetailLoader(true);
			const userProfileResponse = await getUserProfile();

			if (userProfileResponse.data.user) {
				setInitialValues({
					...userProfileResponse.data.user,
					file: null,
					passwordChangeCTA: false,
					password: "",
					newPassword: "",
					confirmNewPassword: "",
				});
			}
		} catch (err: any) {
			toast.error(getCatchError(err)[0]);
		} finally {
			setFetchUserDetailLoader(false);
		}
	}, []);

	const submitHandler = async (
		values: ProfileFormikFormValues,
		formObj: { resetForm: () => void },
	) => {
		try {
			setIsLoading(true);

			const formData = new FormData();

			// eslint-disable-next-line prefer-destructuring
			const passwordChangeCTA = values.passwordChangeCTA;

			const keys = Object.keys(values) as unknown as Array<keyof ProfileFormikFormValues>;

			for (let i = 0; i < keys.length; i++) {
				if (keys[i] === "passwordChangeCTA" || keys[i] === "confirmNewPassword") {
					delete values[keys[i]];
				} else {
					// eslint-disable-next-line no-lonely-if
					if (keys[i] === "file" && values.file) {
						formData.append(keys[i], values[keys[i]] as Blob, values.file.name);
					} else if (values[keys[i]]) {
						formData.append(keys[i], values[keys[i]] as string);
					}
				}
			}

			const response = await updateUserProfile(formData);

			if (response.data.errors) {
				toast.error(response.data.errors);
				return;
			}

			let successMessage = `Profile updated successfully`;

			if (passwordChangeCTA) {
				successMessage = `${successMessage}. Please login to continue`;
			}

			formObj.resetForm();
			setLastSave(dayjs());
			showNotification("Success", successMessage, "success");
			setInitialValues({
				...values,
				passwordChangeCTA: false,
				password: "",
				newPassword: "",
				confirmNewPassword: "",
			});

			if (passwordChangeCTA) {
				setTimeout(() => {
					logoutHandler();
					router.push(`../${authPagesMenu.login.path}`);
				}, 1000);
			} else {
				fetchUserProfile();
			}
		} catch (err: any) {
			toast.error(getCatchError(err)[0]);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchUserProfile();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fetchUserProfile]);

	return (
		<PrivatePageWrapper
			title={generalPagesMenu.profile.text}
			breadCrumbList={[
				{
					title: generalPagesMenu.profile.text,
					to: `../${generalPagesMenu.profile.path}`,
				},
			]}
			subheaderRightSectionContent={
				<Button
					icon={isLoading ? undefined : "Save"}
					isLight
					color={lastSave ? "info" : "success"}
					isDisable={isLoading}
					onClick={() => formRef.current?.handleSubmit()}>
					{isLoading && <Spinner isSmall inButton />}
					{isLoading ? "Updating" : "Update"}
				</Button>
			}
			subheaderLeftUserSectionContent={
				<span className='text-muted'>
					{userProfileObj?.firstName} {userProfileObj?.lastName}
				</span>
			}>
			<Page container='fluid'>
				{fetchUserDetailLoader ? <LoaderComponent message='Please wait...' /> : null}

				{!fetchUserDetailLoader && initialValues.guid ? (
					<ProfileForm
						formRef={formRef}
						initialValues={initialValues}
						validationSchema={validationSchema}
						submitHandler={submitHandler}
						lastSave={lastSave}
						isLoading={isLoading}
					/>
				) : null}
			</Page>
		</PrivatePageWrapper>
	);
};

export default ProfilePage;
