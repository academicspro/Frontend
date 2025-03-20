import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";

import { setIsLoggedIn, setUserObj, setUserPermissions } from "../Store/authSlice";
import { getUserProfile } from "../services/authService";
import { all_routes } from "../router/all_routes";
import AppConfig from "../config/config";

const CommonRouteWrapper = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
  const triggerPostLogin = useSelector((state: any) => state.auth.triggerPostLogin);

  const [showLoader, setShowLoader] = useState<boolean>(true);
  const [accessToken, setAccessToken] = useState<string>("");

  useEffect(() => {
    const token = localStorage.getItem(AppConfig.LOCAL_STORAGE_ACCESS_TOKEN_KEY);

    if (token) {
      setAccessToken(token);
    } else {
      setTimeout(() => {
        setShowLoader(false);
      }, 1000);
    }
  }, [triggerPostLogin]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await getUserProfile();
        const role = res.data.user.role;

        // call redux action to set user details
        dispatch(setIsLoggedIn(true));
        dispatch(setUserObj(res.data.user));
        dispatch(setUserPermissions(res.data.permissions));

        switch (role) {
          case "admin":
            navigate(all_routes.adminDashboard);
            break;
          case "superadmin":
            navigate(all_routes.superAdminDashboard);
            break;
          case "teacher":
            navigate(all_routes.teacherDashboard);
            break;
          case "student":
            navigate(all_routes.studentDashboard);
            break;
        }
      } catch (err: any) {
        // setError(err.message || "Login failed");
      } finally {
        setTimeout(() => {
          setShowLoader(false);
        }, 1000);
      }
    };

    if (accessToken && !isLoggedIn) {
      fetchUserProfile();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  const Preloader = () => {
    return (
      <div id="global-loader">
        <div className="page-loader"></div>
      </div>
    );
  };

  return (
    <div className="account-page">
      <div className="main-wrapper">
        {showLoader ? <Preloader /> : <Outlet />}
      </div>
    </div>
  );
};

export default CommonRouteWrapper;
