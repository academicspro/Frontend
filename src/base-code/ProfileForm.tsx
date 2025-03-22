import React, { ChangeEvent, RefObject, useRef } from "react";
import dayjs, { Dayjs } from "dayjs";
import { ErrorMessage, Formik, FormikProps } from "formik";

import Icon from "../../icon/Icon";
import Button from "../../bootstrap/Button";
import Spinner from "../../bootstrap/Spinner";
import Card, {
	CardActions,
	CardBody,
	CardFooter,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from "../../bootstrap/Card";
import Avatar from "../../Avatar";
import Input from "../../bootstrap/forms/Input";
import FormGroup from "../../bootstrap/forms/FormGroup";
import UserImage from "../../../assets/img/wanna1.png";
import Select from "../../bootstrap/forms/Select";
import Option from "../../bootstrap/Option";
import CommonDesc from "../../CommonDesc";
import { ProfileFormikFormValues } from "../../../type/pages/profile";
import { UserRole } from "../../../config/constant";
import { convertString } from "../../../utils/general";

interface Props {
	formRef: RefObject<FormikProps<ProfileFormikFormValues>>;
	initialValues: ProfileFormikFormValues;
	validationSchema: any;
	submitHandler: (
		values: ProfileFormikFormValues,
		formObj: {
			resetForm: () => void;
		},
	) => void;
	lastSave: Dayjs | null;
	isLoading: boolean;
}

const ProfileForm = ({
	formRef,
	submitHandler,
	initialValues,
	validationSchema,
	lastSave,
	isLoading,
}: Props) => {
	const fileInputRef = useRef<HTMLInputElement>(null);

	return (
		<Formik<ProfileFormikFormValues>
			enableReinitialize
			initialValues={initialValues}
			onSubmit={(values, formObj: { resetForm: () => void }) => {
				submitHandler(values, formObj);
			}}
			validationSchema={validationSchema}
			innerRef={formRef}>
			{({
				values,
				handleSubmit,
				isValid,
				errors,
				touched,
				handleChange,
				handleBlur,
				setFieldValue,
			}) => (
				<form className='g-4' autoComplete='off' onSubmit={handleSubmit}>
					<div className='row align-content-center justify-content-center'>
						<div className='col-md-8'>
							<Card>
								<CardBody>
									<div className='col-12'>
										<div className='row g-4 align-items-center'>
											<div className='col-lg-auto'>
												<Avatar
													src={
														// eslint-disable-next-line no-nested-ternary
														values.file
															? URL.createObjectURL(values.file)
															: values.thumbProfileImg
															? values.thumbProfileImg
															: UserImage
													}
													color='primary'
													rounded={3}
												/>
											</div>
											<div className='col-lg'>
												<div className='row g-4'>
													<div className='col-auto'>
														<Input
															type='file'
															autoComplete='photo'
															id='file'
															name='file'
															accept='image/png, image/jpeg, image/jpg'
															ref={fileInputRef}
															onChange={(
																e: ChangeEvent<{
																	files: Array<File>;
																}>,
															) => {
																setFieldValue(
																	"file",
																	e.target.files
																		? e.target.files[0]
																		: null,
																);
															}}
														/>
													</div>
													{values.file && (
														<div className='col-auto'>
															<Button
																color='danger'
																isLight
																icon='Delete'
																onClick={() => {
																	setFieldValue("file", null);
																	fileInputRef.current!.value =
																		"";
																}}>
																Delete Avatar
															</Button>
														</div>
													)}
													<div className='col-12'>
														<p className='lead text-muted'>
															Avatar helps your teammates get to know
															you.
														</p>
														<ErrorMessage
															component='span'
															name='file'
															className='py-2 text-danger'
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</CardBody>
							</Card>
							<Card>
								<CardHeader>
									<CardLabel icon='Person' iconColor='success'>
										<CardTitle>Personal Information</CardTitle>

										<CardSubTitle>User's credentials</CardSubTitle>
									</CardLabel>
								</CardHeader>
								<CardBody>
									<div className='row g-4'>
										<div className='col-md-6'>
											<FormGroup id='firstName' label='First Name' isFloating>
												<Input
													id='firstName'
													name='firstName'
													placeholder='First Name'
													autoComplete='additional-name'
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.firstName}
													isValid={isValid}
													isTouched={touched.firstName}
													invalidFeedback={errors.firstName}
													validFeedback='Looks good!'
												/>
											</FormGroup>
										</div>
										<div className='col-md-6'>
											<FormGroup id='lastName' label='Last Name' isFloating>
												<Input
													id='lastName'
													name='lastName'
													placeholder='Last Name'
													autoComplete='last-name'
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.lastName}
													isValid={isValid}
													isTouched={touched.lastName}
													invalidFeedback={errors.lastName}
													validFeedback='Looks good!'
												/>
											</FormGroup>
										</div>
									</div>
								</CardBody>
							</Card>
							<Card>
								<CardHeader>
									<CardLabel icon='Phonelink' iconColor='success'>
										<CardTitle>Contact Information</CardTitle>

										<CardSubTitle>User's contact information</CardSubTitle>
									</CardLabel>
								</CardHeader>
								<CardBody>
									<div className='row g-4'>
										<div className='col-md-6'>
											<FormGroup id='email' label='Email address' isFloating>
												<Input
													id='email'
													name='email'
													type='email'
													placeholder='Email address'
													autoComplete='email'
													disabled
													value={values.email}
												/>
											</FormGroup>
										</div>

										<div className='col-md-6'>
											<FormGroup
												id='role'
												isFloating
												label='Select role...'
												className='mb-3'>
												<Select
													id='role'
													name='role'
													ariaLabel='Select one...'
													placeholder='Select one...'
													value={values.role}
													isValid={isValid}
													isTouched={touched.role}
													invalidFeedback={errors.role}
													disabled>
													<Option value=''>Select one</Option>
													<Option value={UserRole.PORTAL_ADMIN}>
														{convertString(UserRole.PORTAL_ADMIN)}
													</Option>
													<Option value={UserRole.PORTAL_STAFF}>
														{convertString(UserRole.PORTAL_STAFF)}
													</Option>
													<Option value={UserRole.AGENT_ADMIN}>
														{convertString(UserRole.AGENT_ADMIN)}
													</Option>
													<Option value={UserRole.AGENT_STAFF}>
														{convertString(UserRole.AGENT_STAFF)}
													</Option>
												</Select>
											</FormGroup>
										</div>
									</div>
								</CardBody>
							</Card>
							<Card>
								<CardHeader>
									<CardLabel icon='LocalPolice' iconColor='primary'>
										<CardTitle>Password</CardTitle>
										<CardSubTitle>Password change operations</CardSubTitle>
									</CardLabel>
									<CardActions>
										{values.passwordChangeCTA ? (
											<Button
												color='danger'
												isLight
												icon='Cancel'
												onClick={() =>
													setFieldValue("passwordChangeCTA", false)
												}>
												Cancel
											</Button>
										) : (
											<>
												<span>Do you want to change?</span>
												<Button
													color='primary'
													isLight
													icon='PublishedWithChanges'
													onClick={() =>
														setFieldValue("passwordChangeCTA", true)
													}>
													Yes
												</Button>
											</>
										)}
									</CardActions>
								</CardHeader>
								{values.passwordChangeCTA && (
									<CardBody>
										<div className='row g-4'>
											<div className='col-12'>
												<FormGroup
													id='password'
													label='Current password'
													isFloating>
													<Input
														id='password'
														name='password'
														type='password'
														placeholder='Current password'
														autoComplete='current-password'
														onChange={handleChange}
														onBlur={handleBlur}
														value={values.password}
														isValid={isValid}
														isTouched={touched.password}
														invalidFeedback={errors.password}
														validFeedback='Looks good!'
													/>
												</FormGroup>
											</div>
											<div className='col-12'>
												<FormGroup
													id='newPassword'
													label='New password'
													isFloating>
													<Input
														id='newPassword'
														name='newPassword'
														type='password'
														placeholder='New password'
														autoComplete='new-password'
														onChange={handleChange}
														onBlur={handleBlur}
														value={values.newPassword}
														isValid={isValid}
														isTouched={touched.newPassword}
														invalidFeedback={errors.newPassword}
														validFeedback='Looks good!'
													/>
												</FormGroup>
											</div>
											<div className='col-12'>
												<FormGroup
													id='confirmNewPassword'
													label='Confirm new password'
													isFloating>
													<Input
														id='confirmNewPassword'
														name='confirmNewPassword'
														type='password'
														placeholder='Confirm new password'
														autoComplete='confirm-new-password'
														onChange={handleChange}
														onBlur={handleBlur}
														value={values.confirmNewPassword}
														isValid={isValid}
														isTouched={touched.confirmNewPassword}
														invalidFeedback={errors.confirmNewPassword}
														validFeedback='Looks good!'
													/>
												</FormGroup>
											</div>
										</div>{" "}
									</CardBody>
								)}
								<CardFooter>
									<CommonDesc>
										For your security, we recommend that you change your
										password every 3 months at most.
									</CommonDesc>
								</CardFooter>
							</Card>
						</div>
					</div>
					<div className='row'>
						<div className='col-12'>
							<Card>
								<CardBody>
									<div className='row align-items-center'>
										<div className='col'>
											{lastSave ? (
												<>
													<Icon
														icon='DoneAll'
														size='lg'
														className='me-2 text-muted'
													/>
													<span className='me-2 text-muted'>
														Last Saved
													</span>
													<strong>
														{dayjs(lastSave).format(
															"MMMM D, YYYY - HH:mm",
														)}
													</strong>
												</>
											) : (
												<>
													<Icon
														icon='Warning'
														size='lg'
														className='me-2 text-warning'
													/>
													<span className='text-warning'>
														Not saved yet
													</span>
												</>
											)}
										</div>
										<div className='col-auto'>
											<div className='row g-1'>
												<div className='col-auto'>
													<Button
														type='submit'
														className='me-3'
														icon={isLoading ? undefined : "Save"}
														isLight
														color={lastSave ? "info" : "success"}
														isDisable={isLoading}
														onClick={handleSubmit}>
														{isLoading && <Spinner isSmall inButton />}
														{isLoading ? "Updating" : "Update"}
													</Button>
												</div>
											</div>
										</div>
									</div>
								</CardBody>
							</Card>
						</div>
					</div>
				</form>
			)}
		</Formik>
	);
};

export default ProfileForm;
