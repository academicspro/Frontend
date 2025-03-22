import { useState, useEffect, Fragment } from "react";
import { toast } from "react-toastify";

import Table from "../../../../core/common/dataTable/index"; // Adjust path as needed
import { IFeatureRequestObj } from "../../../../services/types/features";
import { featureRequestApprove, featureRequestReject, getAllFeaturesRequestList } from "../../../../services/superadmin/featuresServices";

const SuperAdminFeaturesRequestListPage = () => {
    const [featuresList, setFeaturesList] = useState<Array<IFeatureRequestObj>>([]);
    const [fetchRequestLoader, setFetchRequestLoader] = useState<boolean>(true);

    // Define table columns
    const columns = [
        {
            title: "Module Name",
            dataIndex: "moduleName",
            key: "moduleName",
            sorter: (a: IFeatureRequestObj, b: IFeatureRequestObj) => a.moduleName.localeCompare(b.moduleName),
        },
        {
            title: "Request",
            dataIndex: "status",
            key: "status",
            render: (_: string, record: IFeatureRequestObj) => (
                <div className="status-toggle modal-status">
                    {record.status === 0 ?
                        (<Fragment>
                            <button className={`btn btn-primary`}
                                onClick={() => featureRequestApproveHandler(record.id)}
                            >Approve</button>
                            <button className={`btn btn-primary`}
                                onClick={() => featureRequestCancleHandler(record.id)}
                            >Reject</button>
                        </Fragment>)
                        : null}
                </div>
            ),
        },
    ];

    const featureRequestApproveHandler = async (id: string) => {
        try {
            const res = await featureRequestApprove(id);

            if (res.data.errors) {
                toast.error(res.data.errors);
                return;
            }

            setFeaturesList((prevstate) => {
                return prevstate.filter((obj) => {
                    return obj.id !== id;
                })
            });

        } catch (err: any) {
            toast.error(err.message);
        }
    }

    const featureRequestCancleHandler = async (id: string) => {
        try {
            const res = await featureRequestReject(id);

            if (res.data.errors) {
                toast.error(res.data.errors);
                return;
            }

            setFeaturesList((prevstate) => {
                return prevstate.filter((obj) => {
                    return obj.id !== id;
                })
            });

        } catch (err: any) {
            toast.error(err.message);
        }
    }

    const fetchFeaturesRequestList = async () => {
        try {
            setFetchRequestLoader(true);

            const res = await getAllFeaturesRequestList();

            if (res.data.errors) {
                toast.error(res.data.errors);
                return;
            }

            // set features list to loop data
            setFeaturesList(res.data.featuresList)
        } catch (err: any) {
            toast.error(err.message);
        } finally {
            setFetchRequestLoader(false);
        }
    }

    useEffect(() => {
        fetchFeaturesRequestList();
    }, []);

    return (
        <div className="page-wrapper">
            <div className="content">
                <div className="card">
                    {fetchRequestLoader ? (<p>Loading</p>) : null}

                    {!fetchRequestLoader ? (
                        <Fragment>
                            <div className="card-header d-flex align-items-center justify-content-between flex-wrap pb-0">
                                <h4 className="mb-3">Features Request List</h4>
                            </div>
                            <div className="card-body p-0 py-3">
                                <Table dataSource={featuresList} columns={columns} />
                            </div>
                        </Fragment>
                    ) : null}

                </div>
            </div>
        </div>
    );
};

export default SuperAdminFeaturesRequestListPage;