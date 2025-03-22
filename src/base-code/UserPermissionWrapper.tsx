import { ReactElement, ReactNode, useContext, useEffect } from "react";
import { useRouter } from "next/router";

import PrivatePageWrapper from "../../layout/PageWrapper/PrivatePageWrapper";
import { IBreadCrumbObj } from "../../layout/PageWrapper/types";
import AuthContext from "../../context/authContext";
import { getBaseUrl } from "../../utils/general";

interface Props {
	title: string;
	children: ReactElement | ReactElement[];
	breadCrumbList: Array<IBreadCrumbObj>;
	subheaderRightSectionContent: ReactNode;
	subheaderLeftUserSectionContent?: ReactNode;
}

const UserPermissionWrapper = ({
	title,
	children,
	breadCrumbList,
	subheaderRightSectionContent,
	subheaderLeftUserSectionContent,
}: Props) => {
	const { userProfileObj, userPermissionsObj, isLoggedIn } = useContext(AuthContext);
	const router = useRouter();

	useEffect(() => {
		if (userProfileObj && userPermissionsObj) {
			// here we need to add page access logic
			if (!userPermissionsObj.userModule) {
				router.push(`${getBaseUrl(isLoggedIn, userProfileObj!.role ?? "")}`);
			}
		}

		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (isLoggedIn && !userProfileObj) {
		return <div />;
	}

	return (
		<PrivatePageWrapper
			title={title}
			breadCrumbList={breadCrumbList}
			subheaderRightSectionContent={subheaderRightSectionContent}
			subheaderLeftUserSectionContent={subheaderLeftUserSectionContent}>
			{children}
		</PrivatePageWrapper>
	);
};

export default UserPermissionWrapper;
