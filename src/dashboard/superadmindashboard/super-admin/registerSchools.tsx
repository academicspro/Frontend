import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { registerSchool } from "../../../services/superadmin/schoolService"; // Adjust the import path
import CommonSelect from "../../../core/common/commonSelect";
import { bloodGroup, sex } from "../../../core/common/selectoption/selectoption";

interface SelectOption {
  value: string;
  label: string;
}

interface FormData {
  profilePic: string;
  schoolName: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  bloodType: SelectOption | undefined;
  sex: SelectOption | undefined;
}

const RegisterSchool = () => {
  const [profilePic, setProfilePic] = useState<File | null>(null);

  const [formData, setFormData] = useState<FormData>({
    schoolName: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    bloodType: undefined,
    sex: undefined,
    profilePic: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for loader

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(`Input changed - ${name}: ${value}`);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (field: keyof FormData, selected: SelectOption | null) => {
    console.log(`Select changed - ${field}:`, selected);
    setFormData((prev) => ({ ...prev, [field]: selected }));
  };

 

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submission triggered");

    // Validation
    if (!formData.schoolName) {
      toast.error("School name is required");
      console.log("Validation failed: School name missing");
      return;
    }
    if (!formData.name) {
      toast.error("Admin name is required");
      console.log("Validation failed: Admin name missing");
      return;
    }
    if (!formData.email) {
      toast.error("Email is required");
      console.log("Validation failed: Email missing");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Invalid email format");
      console.log("Validation failed: Invalid email format");
      return;
    }
    if (!formData.phone) {
      toast.error("Phone is required");
      console.log("Validation failed: Phone missing");
      return;
    }
    if (!formData.address) {
      toast.error("Address is required");
      console.log("Validation failed: Address missing");
      return;
    }
    if (!formData.city) {
      toast.error("City is required");
      console.log("Validation failed: City missing");
      return;
    }
    if (!formData.state) {
      toast.error("State is required");
      console.log("Validation failed: State missing");
      return;
    }
    if (!formData.country) {
      toast.error("Country is required");
      console.log("Validation failed: Country missing");
      return;
    }
    if (!formData.pincode) {
      toast.error("Pincode is required");
      console.log("Validation failed: Pincode missing");
      return;
    }
    if (!formData.bloodType) {
      toast.error("Blood type is required");
      console.log("Validation failed: Blood type missing");
      return;
    }
    if (!profilePic) {
      toast.error("Profile picture is required");
      console.log("Validation failed: Profile picture missing");
      return;
    }
    if (!formData.sex) {
      toast.error("Gender is required");
      console.log("Validation failed: Gender missing");
      return;
    }



    try {
      console.log("Converting profile picture to base64");


      console.log("Converting profile picture to base64");
      let profilePicBase64 = "";
      if (profilePic) {
        const reader = new FileReader();
        profilePicBase64 = await new Promise<string>((resolve, reject) => {
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = (error) => reject(error);
          reader.readAsDataURL(profilePic);
        });
      }

      console.log("Calling registerSchool with data:", { ...formData, profilePic: profilePicBase64 });
      await registerSchool(
        formData.schoolName,
        formData.name,
        formData.email,
        formData.phone,
        formData.address,
        formData.city,
        formData.state,
        formData.country,
        formData.pincode,
        profilePicBase64,
        formData.bloodType.value,
        formData.sex.value
      );

      console.log("School registered successfully");
      toast.success("School registered successfully");
    } catch (error: any) {
      console.error("Error during form submission:", error);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else if (error.message) {
        toast.error(error.message);
      } else {
        toast.error("Failed to register school");
      }
    } finally {
      console.log("Submission complete, resetting isSubmitting");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="content content-two">
        <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
          <div className="my-auto mb-2">
            <h3 className="mb-1">Add Schools</h3>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to="#">Dashboard</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Schools</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Add Schools
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <form onSubmit={handleSubmit}>
              <div className="card">
                <div className="card-header bg-light">
                  <div className="d-flex align-items-center">
                    <span className="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0">
                      <i className="ti ti-info-square-rounded fs-16" />
                    </span>
                    <h4 className="text-dark">School & Admin Information</h4>
                  </div>
                </div>
                <div className="card-body pb-1">
                  {/* Profile Picture Upload */}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                        <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border border-dashed me-2 flex-shrink-0 text-dark frames">
                          {profilePic ? (
                            <img
                              src={profilePic ? URL.createObjectURL(profilePic) : ""}
                              alt="Profile Preview"
                              style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                          ) : (
                            <i className="ti ti-photo-plus fs-16" />
                          )}
                        </div>
                        <div className="profile-upload">
                          <div className="profile-uploader d-flex align-items-center">
                            <div className="drag-upload-btn mb-3">
                              Upload
                              <input
                                type="file"
                                className="form-control image-sign"
                                accept=".jpg,.png,.svg"
                                onChange={(e) => setProfilePic(e.target.files ? e.target.files[0] : null)}
                              />
                            </div>
                            <Link
                              to="#"
                              className="btn btn-primary mb-3"
                              onClick={() => setProfilePic(null)}
                            >
                              Remove
                            </Link>
                          </div>
                          <p className="fs-12">Upload image size 4MB, Format JPG, PNG, SVG</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="row row-cols-xxl-5 row-cols-md-6">
                    <div className="col-xxl col-xl-3 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">School Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="schoolName"
                          value={formData.schoolName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-xxl col-xl-3 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Admin Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-xxl col-xl-3 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Admin Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-xxl col-xl-3 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-xxl col-xl-3 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input
                          type="text"
                          className="form-control"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-xxl col-xl-3 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">City</label>
                        <input
                          type="text"
                          className="form-control"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-xxl col-xl-3 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">State</label>
                        <input
                          type="text"
                          className="form-control"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-xxl col-xl-3 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Country</label>
                        <input
                          type="text"
                          className="form-control"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-xxl col-xl-3 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Pincode</label>
                        <input
                          type="text"
                          className="form-control"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-xxl col-xl-3 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Blood Group</label>
                        <CommonSelect
                          className="select"
                          options={bloodGroup}
                          defaultValue={formData.bloodType}
                          onChange={(selected) => handleSelectChange("bloodType", selected)}
                        />
                      </div>
                    </div>
                    <div className="col-xxl col-xl-3 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Gender</label>
                        <CommonSelect
                          className="select"
                          options={sex}
                          defaultValue={formData.sex}
                          onChange={(selected: SelectOption | null) =>
                            handleSelectChange("sex", selected)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div className="text-end">
                <button type="button" className="btn btn-light me-3">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Registering...
                    </>
                  ) : (
                    "Register School"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterSchool;