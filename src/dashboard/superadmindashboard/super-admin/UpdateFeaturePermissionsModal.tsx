import { useState, useEffect } from "react";
import { IPermissionsObj } from "../../../services/types/features";
import { featurePermissionToggle, getAllFeaturePermissionsList } from "../../../services/superadmin/featuresServices";
import { toast } from "react-toastify";

interface Props {
    userId: string
}

const UpdateFeaturePermissionsModal = ({ userId }: Props) => {
    const [featurePermissionsList, setFeaturePermissionsList] = useState<Array<IPermissionsObj>>([]);

    const toggleFeaturePermission = async (id: string) => {
        try {
            await featurePermissionToggle(id);

            const updatedFeaturePermissionsList = featurePermissionsList.map((permission) => {
                if (permission.id === id) {
                    return {
                        ...permission,
                        status: permission.status === 1 ? 0 : 1,
                    };
                }

                return permission;
            });

            setFeaturePermissionsList(updatedFeaturePermissionsList);
        } catch (error) {
            toast.error("Failed to toggle feature permission");
        }
    }

    const fetchFeaturePermissionsList = async () => {
        try {
            const response = await getAllFeaturePermissionsList(userId);

            setFeaturePermissionsList(response.data.permissionsList);
        } catch (error) {
            toast.error("Failed to fetch feature permissions list");
        }
    }

    useEffect(() => {
        fetchFeaturePermissionsList();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId]);

    return (
        <div className="modal fade" id="modal-lg">
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
                                    {featurePermissionsList.map((permission) => (
                                        <tr key={permission.id}>
                                            <td>{permission.moduleName}</td>
                                            <td>
                                                {permission.status === 1 ? (
                                                    <span className="badge bg-warning">Granted</span>
                                                ) : (
                                                    <span className="badge bg-danger">Revoked</span>
                                                )}
                                            </td>
                                            <td> {permission.status === 1 ? (
                                                <button
                                                    type="button"
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => toggleFeaturePermission(permission.id)}
                                                >
                                                    Revoke
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className="btn btn-success btn-sm"
                                                    onClick={() => toggleFeaturePermission(permission.id)}
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
        </div>
    );
};

export default UpdateFeaturePermissionsModal;