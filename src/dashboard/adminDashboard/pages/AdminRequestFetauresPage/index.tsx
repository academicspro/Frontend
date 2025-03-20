import { useState, useEffect, Fragment } from "react";
import { toast } from "react-toastify";

import Table from "../../../../core/common/dataTable/index"; // Adjust path as needed
import { IFeatureObj } from "../../../../services/types/features";
import { getAllFeatures, requestFeature } from "../../../../services/admin/featuresServices";

const AdminRequestFeaturesPage = () => {
    const [featuresList, setFeaturesList] = useState<Array<IFeatureObj>>([]);
    const [fetchRequestLoader, setFetchRequestLoader] = useState<boolean>(true);

    // Function to toggle status
    // const toggleStatus = (moduleName: string) => {
    //     setFeaturesList((prev) =>
    //         prev.map((obj) =>
    //             obj.moduleName === moduleName
    //                 ? {
    //                     ...obj,
    //                     permission: obj.permission === 1 ? 0 : 1,
    //                 }
    //                 : obj
    //         )
    //     );
    // };

    // Define table columns
    const columns = [
        {
            title: "Module Name",
            dataIndex: "moduleName",
            key: "moduleName",
            sorter: (a: IFeatureObj, b: IFeatureObj) => a.moduleName.localeCompare(b.moduleName),
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (_: string, record: IFeatureObj) => (
                <div className="status-toggle modal-status">
                    <input
                        type="checkbox"
                        id={`user-${record.moduleName}`}
                        className="check"
                        checked={record.permission === 1}
                        disabled
                    // onChange={() => toggleStatus(record.moduleName)}
                    />
                    <label htmlFor={`user-${record.moduleName}`} className="checktoggle"></label>
                </div>
            ),
        },
        {
            title: "Request",
            dataIndex: "status",
            key: "status",
            render: (_: string, record: IFeatureObj) => (
                <div className="status-toggle modal-status">
                    {record.status === 0 ?
                        (<button className={`btn btn-primary`}
                            disabled={record.permission ? true : false}
                            onClick={() => requestFeatureHandler(record.moduleName)}
                        >Request</button>)
                        : null}

                    {record.status === 1 ?
                        (<button className={`btn btn-primary`}>Pending</button>)
                        : null}
                </div>
            ),
        },
    ];

    const requestFeatureHandler = async (moduleName: string) => {
        try {
            const res = await requestFeature({ moduleName });

            if (res.data.errors) {
                toast.error(res.data.errors);
                return;
            }

            setFeaturesList((prevstate) => {
                return prevstate.map((obj) => {
                    if (obj.moduleName === moduleName) {
                        return {
                            ...obj,
                            status: 1
                        }
                    }
                    return obj;
                })
            });

        } catch (err: any) {
            toast.error(err.message);
        } finally {
            fetchFeaturesList();
        }
    }

    const fetchFeaturesList = async () => {
        try {
            setFetchRequestLoader(true);

            const res = await getAllFeatures();

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
        fetchFeaturesList();
    }, []);

    return (
        <div className="page-wrapper">
            <div className="content">
                <div className="card">
                    {fetchRequestLoader ? (<p>Loading</p>) : null}

                    {!fetchRequestLoader ? (
                        <Fragment>
                            <div className="card-header d-flex align-items-center justify-content-between flex-wrap pb-0">
                                <h4 className="mb-3">Features List</h4>
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

export default AdminRequestFeaturesPage;