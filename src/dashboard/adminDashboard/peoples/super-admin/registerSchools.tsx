import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import dayjs from "dayjs";
import { all_routes } from "../../../../router/all_routes";
import {

  bloodGroup,

  sex,

} from "../../../../core/common/selectoption/selectoption";

import CommonSelect from "../../../../core/common/commonSelect";
import { useLocation } from "react-router-dom";

const RegisterSchool = () => {
  const routes = all_routes;

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [owner, setOwner] = useState<string[]>(['English', 'Spanish']);
  const [owner1, setOwner1] = useState<string[]>([]);
  const [owner2, setOwner2] = useState<string[]>([]);
  const [defaultDate, setDefaultDate] = useState<dayjs.Dayjs | null>(null);
  const [newContents, setNewContents] = useState<number[]>([0]);
  const location = useLocation();
  const addNewContent = () => {
    setNewContents([...newContents, newContents.length]);
  };
  const removeContent = (index: any) => {
    setNewContents(newContents.filter((_, i) => i !== index));
  };
  useEffect(() => {
    if (location.pathname === routes.editStudent) {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0"); // Month is zero-based, so we add 1
      const day = String(today.getDate()).padStart(2, "0");
      const formattedDate = `${month}-${day}-${year}`;
      const defaultValue = dayjs(formattedDate);
      setIsEdit(true)
      setOwner(["English"])
      setOwner1(["Medecine Name"])
      setOwner2(["Allergy", "Skin Allergy"])
      setDefaultDate(defaultValue)
      console.log(formattedDate, 11);

    } else {
      setIsEdit(false)
      setDefaultDate(null)
    }
  }, [location.pathname])

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content content-two">
          {/* Page Header */}
          <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
            <div className="my-auto mb-2">
              <h3 className="mb-1">{isEdit ? 'Edit' : 'Add'} Schools</h3>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={routes.adminDashboard}>Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to={routes.studentList}>register</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {isEdit ? 'Edit' : 'Add'} Schools
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-12">
              <form>
                {/* Personal Information */}
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
                    <div className="row">
                      <div className="col-md-12">
                        <div className="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                          <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border border-dashed me-2 flex-shrink-0 text-dark frames">
                            <i className="ti ti-photo-plus fs-16" />
                          </div>
                          <div className="profile-upload">
                            <div className="profile-uploader d-flex align-items-center">
                              <div className="drag-upload-btn mb-3">
                                Upload
                                <input
                                  type="file"
                                  className="form-control image-sign"
                                  multiple
                                />
                              </div>
                              <Link to="#" className="btn btn-primary mb-3">
                                Remove
                              </Link>
                            </div>
                            <p className="fs-12">
                              Upload image size 4MB, Format JPG, PNG, SVG
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row row-cols-xxl-5 row-cols-md-6">

                      <div className="col-xxl col-xl-3 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            School Name
                          </label>
                          <input type="text" className="form-control" defaultValue={isEdit ? '+1 46548 84498' : undefined} />
                        </div>
                      </div>

                      <div className="col-xxl col-xl-3 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Admin Name
                          </label>
                          <input type="text" className="form-control" defaultValue={isEdit ? '+1 46548 84498' : undefined} />
                        </div>
                      </div>
                      <div className="col-xxl col-xl-3 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Admin Email
                          </label>
                          <input type="text" className="form-control" defaultValue={isEdit ? '+1 46548 84498' : undefined} />
                        </div>
                      </div>

                      <div className="col-xxl col-xl-3 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Phone
                          </label>
                          <input type="text" className="form-control" defaultValue={isEdit ? '+1 46548 84498' : undefined} />
                        </div>
                      </div>

                      <div className="col-xxl col-xl-3 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Address
                          </label>
                          <input type="text" className="form-control" defaultValue={isEdit ? '+1 46548 84498' : undefined} />
                        </div>
                      </div>
                      <div className="col-xxl col-xl-3 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            City
                          </label>
                          <input type="text" className="form-control" defaultValue={isEdit ? '+1 46548 84498' : undefined} />
                        </div>
                      </div>
                      <div className="col-xxl col-xl-3 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            State
                          </label>
                          <input type="text" className="form-control" defaultValue={isEdit ? '+1 46548 84498' : undefined} />
                        </div>
                      </div>

                      <div className="col-xxl col-xl-3 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Country
                          </label>
                          <input type="text" className="form-control" defaultValue={isEdit ? '+1 46548 84498' : undefined} />
                        </div>
                      </div>

                      <div className="col-xxl col-xl-3 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Pincode Code
                          </label>
                          <input type="text" className="form-control" defaultValue={isEdit ? '+1 46548 84498' : undefined} />
                        </div>
                      </div>

                      <div className="col-xxl col-xl-3 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Blood Group</label>
                          <CommonSelect
                            className="select"
                            options={bloodGroup}
                            defaultValue={isEdit ? bloodGroup[0] : undefined}
                          />
                        </div>
                      </div>
                      <div className="col-xxl col-xl-3 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Gender </label>
                          <CommonSelect
                            className="select"
                            options={sex}
                            defaultValue={isEdit ? sex[0] : undefined}
                          />
                        </div>
                      </div>


                    </div>
                  </div>
                </div>

                {/* /Other Details */}
                <div className="text-end">
                  <button type="button" className="btn btn-light me-3">
                    Cancel
                  </button>
                  <Link to={routes.studentList} className="btn btn-primary">
                    Register School
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
    </>
  );
};

export default RegisterSchool;
