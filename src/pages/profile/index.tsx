import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/common/imageWithBasePath";
import { all_routes } from "../../router/all_routes";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import BaseApi from "../../services/BaseApi";
import { getUserProfile } from "../../services/authService";
type PasswordField =
  | "oldPassword"
  | "newPassword"
  | "confirmPassword"
  | "currentPassword";

const Profile = () => {
  const route = all_routes;
  const [profileImage, setProfileImage] = useState("assets/img/profiles/avatar-27.jpg");
  //to store image and preview it 
  const [setData, updateData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    phoneNumber: "",
    address: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
    bio: "",

  });//to store data and chnage it 

console.log("getuseerprofile",getUserProfile());
  const [originalData, setOriginalData] = useState({ ...setData });  //to store previous data so if cancel is click we can showw the initial data 

  const [passwordVisibility, setPasswordVisibility] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
    currentPassword: false,
  });

  useEffect(() => {

    //user data  api call waititng 
    const initialData = {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      userName: "johndoe",
      phoneNumber: "1234567890",
      address: "123 Main St",
      country: "USA",
      state: "California",
      city: "Los Angeles",
      postalCode: "90001",
      bio: "This is a bio.",
    };
    updateData(initialData); //update the data on edit mode
    setOriginalData(initialData); //store initial data to show if cancel is click
  }, []);

  //display the change if done in edit mode
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateData((prev) => ({ ...prev, [name]: value }));
  };

//preview the image 
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a temporary URL
      console.log("imageurl", imageUrl);
      setProfileImage(imageUrl); // Update the profile image state
    }
  };
  //on click update upload to the db 
  const handleUpdate = () => {
    try {
      const fileInput = document.getElementById("image_sign") as HTMLInputElement;
      const files = fileInput.files?.[0];
      console.log("file", files);
      if(!files) return;
      if (files) {
        const formData = new FormData();
        formData.append("image", files ); // Append the file to FormData
        // console.log("formdata", formData);
        // const formDataEntries = Array.from(formData.entries());
        // for (const [key, value] of formDataEntries) {
        //   console.log("123", key, value); 
        // }

        // api call to update 
       
        // const resonse=BaseApi.putRequest("url",formData)  //error in base api there is no FormDtaa
       // console.log(response);
      //  setProfileImage(response.data.image);
        
      }
    }
    catch (err) { console.log(err); }
  }

//on cancel show the initial data
  const handlecancel = () => {
    updateData(originalData);

  };

  //on every save if the data is changed the it call api, if not then skip the api call
  const handleSave = () => {
    const hasChanges = Object.keys(setData).some(
      (key) => setData[key as keyof typeof setData] !== originalData[key as keyof typeof originalData]
    );

    if (!hasChanges) {
      console.log("No changes . Skip API call.");
      return;
    }

    console.log("Saved Data:", setData);
    // // API call 
    // try {
    //   //api call put 
      //  const response  =BaseApi.putRequest("url",setData);
      //  if(response.status ===200 || response.status ===201){
      //   console.log("sucessfully update");
        
      //  }
      //  else{
      //    console.log("something is wrong");
      //  }
    // } catch (error) {
    //   console.log("err",error);
    // }
  };




  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };
  return (
    <div>
      <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content">
            <div className="d-md-flex d-block align-items-center justify-content-between border-bottom pb-3">
              <div className="my-auto mb-2">
                <h3 className="page-title mb-1">Profile</h3>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to={route.adminDashboard}>Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="#">Settings</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Profile
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
                <div className="pe-1 mb-2">
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="tooltip-top">Refresh</Tooltip>}
                  >
                    <Link
                      to="#"
                      className="btn btn-outline-light bg-white btn-icon me-1"
                    >
                      <i className="ti ti-refresh" />
                    </Link>
                  </OverlayTrigger>
                </div>
              </div>
            </div>
            <div className="d-md-flex d-block mt-3">
              <div className="settings-right-sidebar me-md-3 border-0">
                <div className="card">
                  <div className="card-header">
                    <h5>Personal Information</h5>
                  </div>
                  <div className="card-body ">
                    <div className="settings-profile-upload">
                      <span className="profile-pic">
                        {/* <ImageWithBasePath
                          src="assets/img/profiles/avatar-27.jpg"
                          alt="Profile"
                        /> */}
                         
                        <ImageWithBasePath
                          src={profileImage}
                          alt="Profile"
                         
                        />

                      </span>
                      <div className="title-upload">
                        <h5>Edit Your Photo</h5>
                        <Link to="#" className="me-2">
                          Delete{" "}
                        </Link>
                        <Link to="#" className="text-primary" onClick={handleUpdate} >
                          Update
                        </Link>
                      </div>
                    </div>
                    <div className="profile-uploader profile-uploader-two mb-0">
                      <span className="upload-icon">
                        <i className="ti ti-upload" />
                      </span>
                      <div className="drag-upload-btn bg-transparent me-0 border-0">
                        <p className="upload-btn">
                          <span>Click to Upload</span> or drag and drop
                        </p>
                        <h6>JPG or PNG</h6>
                        <h6>(Max 450 x 450 px)</h6>
                      </div>
                      <input
                        type="file"
                        className="form-control"
                        multiple
                        id="image_sign"
                        onChange={handleImageUpload}
                      />
                      <div id="frames" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-fill ps-0 border-0">
                <form>
                  <div className="d-md-flex">
                    <div className="flex-fill">
                      <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                          <h5>Personal Information</h5>
                          <Link
                            to="#"

                            className="btn btn-primary btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_personal_information"
                          >
                            <i className="ti ti-edit me-2" />
                            Edit
                          </Link>
                        </div>
                        <div className="card-body pb-0">
                          <div className="d-block d-xl-flex">
                            <div className="mb-3 flex-fill me-xl-3 me-0">
                              <label className="form-label">First Name</label>
                              <input
                                type="text"
                                name="firstName"
                                className="form-control"
                                placeholder="Enter First Name"
                                value={setData.firstName ?? "firstdata"}
                                disabled

                              />
                            </div>
                            <div className="mb-3 flex-fill">
                              <label className="form-label">Last Name</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Last Name"
                                name="lastName"
                                value={setData.lastName ?? "lastdata"}
                                disabled
                              />
                            </div>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Email Address</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter Email"
                              name="email"
                              value={setData.email ?? "emaildata"}
                              disabled

                            />
                          </div>
                          <div className="d-block d-xl-flex">
                            <div className="mb-3 flex-fill me-xl-3 me-0">
                              <label className="form-label">User Name</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter User Name"
                                name="userName"
                                value={setData.userName ?? "userdata"}
                                disabled
                              />
                            </div>
                            <div className="mb-3 flex-fill">
                              <label className="form-label">Phone Number</label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Phone Number"
                                name="phoneNumber"
                                value={setData.phoneNumber ?? "phonedata"}
                                disabled
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                          <h5>Address Information</h5>
                          <Link
                            to="#"

                            className="btn btn-primary btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_address_information"
                          >
                            <i className="ti ti-edit me-2" />
                            Edit
                          </Link>
                        </div>
                        <div className="card-body pb-0">
                          <div className="mb-3">
                            <label className="form-label">Address</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Address"
                              name="address"
                              value={setData.address ?? "addressdata"}
                              disabled
                            />
                          </div>
                          <div className="d-block d-xl-flex">
                            <div className="mb-3 flex-fill me-xl-3 me-0">
                              <label className="form-label">Country</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Country"
                                name="country"
                                value={setData.country ?? "countrydata"}
                                disabled
                              />
                            </div>
                            <div className="mb-3 flex-fill">
                              <label className="form-label">
                                State / Province
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter State"
                                name="state"
                                value={setData.state ?? "statedata"}
                                disabled
                              />
                            </div>
                          </div>
                          <div className="d-block d-xl-flex">
                            <div className="mb-3 flex-fill me-xl-3 me-0">
                              <label className="form-label">City</label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="City"
                                name="city"
                                value={setData.city ?? "citydata"}
                                disabled
                              />
                            </div>
                            <div className="mb-3 flex-fill">
                              <label className="form-label">Postal Code</label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Postal Code"
                                name="postalCode"
                                value={setData.postalCode ?? "postcodedata"}
                                disabled

                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                          <h5>Password</h5>
                          <Link
                            to="#"
                            className="btn btn-primary btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#change_password"
                          >
                            Change
                          </Link>
                        </div>
                        <div className="card-body pb-0">
                          <div className="mb-3 mb-3">
                            <label className="form-label">
                              Current Password
                            </label>
                            <div className="pass-group d-flex">
                              <input
                                type={
                                  passwordVisibility.currentPassword
                                    ? "text"
                                    : "password"
                                }
                                className="pass-input form-control"
                              />
                              <span
                                className={`ti toggle-passwords ${passwordVisibility.currentPassword
                                  ? "ti-eye"
                                  : "ti-eye-off"
                                  }`}
                                onClick={() =>
                                  togglePasswordVisibility("currentPassword")
                                }
                              ></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Wrapper */}
        {/* Edit Profile */}
        <div className="modal fade" id="edit_personal_information">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Edit Personal Information</h4>
                <button
                  type="button"
                  className="btn-close custom-btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handlecancel}
                >
                  <i className="ti ti-x" />
                </button>
              </div>
              <form>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter First Name"
                          name="firstName"
                          value={setData.firstName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Last Name"
                          name="lastName"
                          value={setData.lastName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">User Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter User Name"
                          name="userName"
                          value={setData.userName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Email"
                          name="email"
                          value={setData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Phone Number"
                          name="phoneNumber"
                          value={setData.phoneNumber}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-0">
                        <label className="form-label">Bio</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Bio"
                          name="bio"
                          value={setData.bio}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <Link
                    to="#"
                    className="btn btn-light me-2"
                    data-bs-dismiss="modal"
                    onClick={handlecancel}
                  >
                    Cancel
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={handleSave}
                  >
                    Save Changes
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Edit Profile */}
        {/* Edit Profile */}
        <div className="modal fade" id="edit_address_information">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Edit Address Information</h4>
                <button
                  type="button"
                  className="btn-close custom-btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handlecancel}
                >
                  <i className="ti ti-x" />
                </button>
              </div>
              <form>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Address"
                          name="address"
                          value={setData.address}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Country</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Country"
                          name="country"
                          value={setData.country}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">State/Province</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter State/Province"
                          name="state"
                          value={setData.state}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">City</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter City"
                          name="city"
                          value={setData.city}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-0">
                        <label className="form-label">Postal Code</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Postal Code"
                          name="postalCode"
                          value={setData.postalCode}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <Link
                    to="#"
                    className="btn btn-light me-2"
                    data-bs-dismiss="modal"
                    onClick={handlecancel}
                  >
                    Cancel
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={handleSave}
                  >
                    Save Changes
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Edit Profile */}
        {/* Change Password */}
        <div className="modal fade" id="change_password">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Change Password</h4>
                <button
                  type="button"
                  className="btn-close custom-btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ti ti-x" />
                </button>
              </div>
              <form>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Current Password</label>
                        <div className="pass-group d-flex">
                          <input
                            type={
                              passwordVisibility.oldPassword
                                ? "text"
                                : "password"
                            }
                            className="pass-input form-control"
                          />
                          <span
                            className={`ti toggle-passwords ${passwordVisibility.oldPassword
                              ? "ti-eye"
                              : "ti-eye-off"
                              }`}
                            onClick={() =>
                              togglePasswordVisibility("oldPassword")
                            }
                          ></span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">New Password</label>
                        <div className="pass-group d-flex">
                          <input
                            type={
                              passwordVisibility.newPassword
                                ? "text"
                                : "password"
                            }
                            className="pass-input form-control"
                          />
                          <span
                            className={`ti toggle-passwords ${passwordVisibility.newPassword
                              ? "ti-eye"
                              : "ti-eye-off"
                              }`}
                            onClick={() =>
                              togglePasswordVisibility("newPassword")
                            }
                          ></span>
                        </div>
                      </div>
                      <div className="mb-0">
                        <label className="form-label">Confirm Password</label>
                        <div className="pass-group d-flex">
                          <input
                            type={
                              passwordVisibility.confirmPassword
                                ? "text"
                                : "password"
                            }
                            className="pass-input form-control"
                          />
                          <span
                            className={`ti toggle-passwords ${passwordVisibility.confirmPassword
                              ? "ti-eye"
                              : "ti-eye-off"
                              }`}
                            onClick={() =>
                              togglePasswordVisibility("confirmPassword")
                            }
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <Link
                    to="#"
                    className="btn btn-light me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Save Changes
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Change Password */}
      </>
    </div>
  );
};

export default Profile;
