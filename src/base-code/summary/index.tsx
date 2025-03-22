import type { NextPage } from "next";
import { useCallback, useContext, useEffect, useState } from "react";
import qs from "query-string";
import { confirmAlert } from "react-confirm-alert";
import { toast } from "react-toastify";

import Page from "../../../layout/Page/Page";
import { dashboardPagesMenu } from "../../../menu";
import { getCatchError } from "../../../utils/errorHandler";
import AuthContext from "../../../context/authContext";
import { PER_COUNT } from "../../../components/PaginationButtons";
import AppConfig from "../../../config/config";
import UserPermissionWrapper from "../UserPermissionWrapper";
import { IUsersObj } from "../../../api/types/user";
import { getUsersList, deleteUser } from "../../../api/UserApi";
import { IUserListFilterObj } from "../../../type/pages/user";
import { getUserListFilterInitialState } from "../../../components/pages/getInitialStates";
import UserCardComponent from "../../../components/pages/users/summary/UserCardComponent";

const UserManagerPage: NextPage = () => {
	const { isLoggedIn } = useContext(AuthContext);

	const [fetchListLoader, setFetchListLoader] = useState<boolean>(true);
	const [usersList, setUsersList] = useState<Array<IUsersObj>>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [perPage, setPerPage] = useState<number>(PER_COUNT["10"]);
	const [totalCount, setTotalCount] = useState<number>(0);
	const [filterObj, setFilterObj] = useState<IUserListFilterObj>(getUserListFilterInitialState());
	const [deleteUserId, setDeleteUserId] = useState<number>(0);

	const { username, agentId, agentLocationId } =
		typeof window === "undefined"
			? { username: "", agentId: "", agentLocationId: "" }
			: qs.parse(window.location.search);

	const fetchUsersList = useCallback(async () => {
		try {
			setFetchListLoader(true);
			let searchBy = "";

			if (currentPage) {
				searchBy += `page=${currentPage}&`;
			}

			if (perPage) {
				searchBy += `limit=${perPage}&`;
			}

			if (filterObj.username) {
				searchBy += `searchByUsername=${filterObj.username}&`;
			}

			if (filterObj.email) {
				searchBy += `email=${filterObj.email}&`;
			}

			if (username) {
				searchBy += `username=${username}&`;
			}

			if (agentId) {
				searchBy += `agentId=${agentId}&`;
			}

			if (agentLocationId) {
				searchBy += `agentLocationId=${agentLocationId}&`;
			}

			const response = await getUsersList(searchBy);

			if (response.data.errors) {
				toast.error(response.data.errors);
				return;
			}

			setUsersList(response.data.usersList);
			setTotalCount(response.data.totalCount);
		} catch (err: any) {
			toast.error(getCatchError(err)[0]);
		} finally {
			setFetchListLoader(false);
		}
	}, [
		perPage,
		currentPage,
		filterObj.email,
		filterObj.username,
		username,
		agentId,
		agentLocationId,
	]);

	const deleteUserHandler = async (id: number) => {
		try {
			setDeleteUserId(id);

			const response = await deleteUser(id);

			if (response.data.errors) {
				toast.error(response.data.errors);
				return;
			}

			fetchUsersList();
		} catch (err: any) {
			toast.error(getCatchError(err)[0]);
		} finally {
			setDeleteUserId(0);
		}
	};

	const deleteUserConfirmationHandler = (id: number) => {
		confirmAlert({
			title: "Confirm to delete?",
			message: "Are you sure to delete this user?",
			buttons: [
				{
					label: "Yes",
					onClick: () => deleteUserHandler(id),
				},
				{
					label: "No",
					onClick: () => {},
				},
			],
		});
	};

	const filterApplyHandler = (newObj: IUserListFilterObj) => {
		setFilterObj(newObj);
		setCurrentPage(1);
	};

	useEffect(() => {
		if (isLoggedIn) {
			fetchUsersList();
		}
	}, [isLoggedIn, perPage, currentPage, filterObj.email, filterObj.username, fetchUsersList]);

	return (
		<UserPermissionWrapper
			title={dashboardPagesMenu.userManager.text}
			breadCrumbList={[
				{
					title: dashboardPagesMenu.userManager.text,
					to: `${AppConfig.APP_BASE_URL}/${dashboardPagesMenu.userManager.path}`,
				},
			]}
			subheaderRightSectionContent={undefined}>
			<Page container='fluid'>
				<div className='row'>
					<div className='col-xxl-12'>
						<UserCardComponent
							usersList={usersList}
							setPerPage={setPerPage}
							setCurrentPage={setCurrentPage}
							currentPage={currentPage}
							perPage={perPage}
							totalCount={totalCount}
							filterApplyHandler={filterApplyHandler}
							filterObj={filterObj}
							fetchListLoader={fetchListLoader}
							deleteId={deleteUserId}
							deleteConfirmationHandler={deleteUserConfirmationHandler}
						/>
					</div>
				</div>
			</Page>
		</UserPermissionWrapper>
	);
};

export default UserManagerPage;
