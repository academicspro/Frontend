import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from "../../../core/common/dataTable/index"; // Adjust path as needed
import CommonSelect from "../../../core/common/commonSelect"; // Adjust path as needed
import PredefinedDateRanges from "../../../core/common/datePicker"; // Adjust path as needed
import TooltipOption from "../../../core/common/tooltipOption"; // Adjust path as needed
import { all_routes } from "../../../router/all_routes"; // Adjust path as needed
import { page } from "../../../core/common/selectoption/selectoption"; // Adjust path as needed
import UpdateFeaturePermissionsModal from "./UpdateFeaturePermissionsModal";

// Define the type for school data
type School = {
  key: string;
  schoolName: string;
  adminName: string;
  email: string;
  status: "Active" | "Inactive";
  permissions: string[];
};

// Define all possible permissions with labels and icons
const allPermissions = [
  { id: "manage_students", label: "Manage Students", icon: "ti ti-users" },
  { id: "manage_teachers", label: "Manage Teachers", icon: "ti ti-chalkboard" },
  { id: "view_reports", label: "View Reports", icon: "ti ti-file-text" },
];

// Initial mock school data
const initialSchoolData: School[] = [
  {
    key: "1",
    schoolName: "Piet Sanskiriti",
    adminName: "Mihir Jain",
    email: "ranarajnesh075@gmail.com",
    status: "Active",
    permissions: ["manage_students", "view_reports"],
  },
  {
    key: "2",
    schoolName: "Springfield High",
    adminName: "John Doe",
    email: "johndoe@example.com",
    status: "Inactive",
    permissions: ["manage_teachers"],
  },
  {
    key: "3",
    schoolName: "Springfield High",
    adminName: "John Doe",
    email: "johndoe@example.com",
    status: "Inactive",
    permissions: ["manage_teachers"],
  },
  {
    key: "4",
    schoolName: "Springfield High",
    adminName: "John Doe",
    email: "johndoe@example.com",
    status: "Inactive",
    permissions: ["manage_teachers"],
  },
];

const GetSchools = () => {
  const routes = all_routes;
  const [schools, setSchools] = useState<School[]>(initialSchoolData);
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
  const [modalPermissions, setModalPermissions] = useState<string[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string>("cm8hpij6j00001l6t0z6qqv6s");

  // Sync modal permissions with selected school when it changes
  useEffect(() => {
    if (selectedSchool) {
      setModalPermissions(selectedSchool.permissions);
    }
  }, [selectedSchool]);

  // Set up event listeners for the update permission modal
  useEffect(() => {
    const modal = document.getElementById("update-permission-modal");
    if (modal) {
      modal.addEventListener("show.bs.modal", (event: Event) => {
        const button = (event as any).relatedTarget;
        const schoolKey = button.getAttribute("data-school-key");
        const school = schools.find((item) => item.key === schoolKey);
        if (school) {
          setSelectedSchool(school);
        }
      });
      modal.addEventListener("hidden.bs.modal", () => {
        setSelectedSchool(null);
        setModalPermissions([]);
      });
    }
  }, [schools]);

  // Function to toggle school status
  const toggleStatus = (schoolKey: string) => {
    setSchools((prevSchools) =>
      prevSchools.map((school) =>
        school.key === schoolKey
          ? {
            ...school,
            status: school.status === "Active" ? "Inactive" : "Active",
          }
          : school
      )
    );
  };

  // Define table columns
  const columns = [
    {
      title: "School Name",
      dataIndex: "schoolName",
      key: "schoolName",
      sorter: (a: School, b: School) => a.schoolName.localeCompare(b.schoolName),
    },
    {
      title: "Admin Name",
      dataIndex: "adminName",
      key: "adminName",
      sorter: (a: School, b: School) => a.adminName.localeCompare(b.adminName),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a: School, b: School) => a.email.localeCompare(b.email),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_: string, record: School) => (
        <div className="status-toggle modal-status">
          <input
            type="checkbox"
            id={`user-${record.key}`}
            className="check"
            checked={record.status === "Active"}
            onChange={() => toggleStatus(record.key)}
          />
          <label htmlFor={`user-${record.key}`} className="checktoggle"></label>
        </div>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: School) => (
        <div className="d-flex align-items-center">
          <div className="dropdown">
            <Link
              to="#"
              className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="ti ti-dots-vertical fs-14" />
            </Link>
            <ul className="dropdown-menu dropdown-menu-right p-3">
              {/* onClick={() => setSelectedUserId(record.key)} */}
              <li>
                <Link
                  to="#"
                  className="dropdown-item rounded-1"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-lg"
                  data-school-key={record.key}
                >
                  <i className="ti ti-edit-circle me-2" />
                  Update Permission
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="dropdown-item rounded-1"
                  data-bs-toggle="modal"
                  data-bs-target="#delete-modal"
                >
                  <i className="ti ti-trash-x me-2" />
                  Delete
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
            <div className="my-auto mb-2">
              <h3 className="page-title mb-1">Get Schools</h3>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={routes.adminDashboard}>Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#">Content</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    All Schools
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
              <TooltipOption />
              <div className="mb-2">
                <Link
                  to="#"
                  className="btn btn-primary d-flex align-items-center"
                >
                  <i className="ti ti-square-rounded-plus me-2" />
                  Add School
                </Link>
              </div>
            </div>
          </div>
          {/* /Page Header */}

          {/* Schools List Card */}
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap pb-0">
              <h4 className="mb-3">Schools List</h4>
              <div className="d-flex align-items-center flex-wrap">
                <div className="input-icon-start mb-3 me-2 position-relative">
                  <PredefinedDateRanges />
                </div>
                <div className="dropdown mb-3 me-2">
                  <Link
                    to="#"
                    className="btn btn-outline-light bg-white dropdown-toggle"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                  >
                    <i className="ti ti-filter me-2" />
                    Filter
                  </Link>
                  <div className="dropdown-menu drop-width">
                    <form>
                      <div className="d-flex align-items-center border-bottom p-3">
                        <h4>Filter</h4>
                      </div>
                      <div className="p-3 border-bottom">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="mb-3">
                              <label className="form-label">School Name</label>
                              <CommonSelect
                                className="select"
                                options={page}
                                defaultValue={page[0]}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mb-0">
                              <label className="form-label">Admin Name</label>
                              <CommonSelect
                                className="select"
                                options={page}
                                defaultValue={page[0]}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 d-flex align-items-center justify-content-end">
                        <Link to="#" className="btn btn-light me-3">
                          Reset
                        </Link>
                        <button type="submit" className="btn btn-primary">
                          Apply
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="dropdown mb-3">
                  <Link
                    to="#"
                    className="btn btn-outline-light bg-white dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <i className="ti ti-sort-ascending-2 me-2" />
                    Sort by A-Z
                  </Link>
                  <ul className="dropdown-menu p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1 active">
                        Ascending
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Descending
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Recently Viewed
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Recently Added
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body p-0 py-3">
              {/* Schools List */}
              <Table dataSource={schools} columns={columns} Selection={true} />
              {/* /Schools List */}
            </div>
          </div>
          {/* /Schools List Card */}
        </div>
      </div>
      {/* /Page Wrapper */}

      {/* Update Permission Modal */}
      <UpdateFeaturePermissionsModal userId={selectedUserId} />

      {/* <div className="modal fade" id="modal-lg">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">School Permissions</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body text-left">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Module Name</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allPermissions.map((permission) => (
                      <tr key={permission.id}>
                        <td>{permission.label}</td>
                        <td>
                          {modalPermissions.includes(permission.id)
                            ? "Granted"
                            : "Revoked"}
                        </td>
                        <td>
                          {modalPermissions.includes(permission.id) ? (
                            <button
                              type="button"
                              className="btn btn-danger btn-sm"
                              onClick={() =>
                                setModalPermissions((prev) =>
                                  prev.filter((perm) => perm !== permission.id)
                                )
                              }
                            >
                              Revoke
                            </button>
                          ) : (
                            <button
                              type="button"
                              className="btn btn-success btn-sm"
                              onClick={() =>
                                setModalPermissions((prev) => [...prev, permission.id])
                              }
                            >
                              Grant
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div> */}


      {/* /Update Permission Modal */}

      {/* Delete Modal */}
      <div className="modal fade" id="delete-modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form>
              <div className="modal-body text-center">
                <span className="delete-icon">
                  <i className="ti ti-trash-x" />
                </span>
                <h4>Confirm Deletion</h4>
                <p>
                  You want to delete all the marked items? This can't be undone
                  once you delete.
                </p>
                <div className="d-flex justify-content-center">
                  <Link
                    to="#"
                    className="btn btn-light me-3"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </Link>
                  <button type="submit" className="btn btn-danger">
                    Yes, Delete
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Delete Modal */}
    </>
  );
};

export default GetSchools;