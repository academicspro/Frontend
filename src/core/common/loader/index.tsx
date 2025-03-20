import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Assuming you're using React Router
import { all_routes } from "../../../router/all_routes";

const Loader = ({ children }: { children: React.ReactNode }) => {
  const routes = all_routes;
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (
      location.pathname === routes.adminDashboard ||
      location.pathname === routes.teacherDashboard ||
      location.pathname === routes.studentDashboard ||
      location.pathname === routes.parentDashboard ||
      location.pathname === routes.superAdminDashboard
    ) {
      setShowLoader(true);
    } else {
      setShowLoader(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleLoad = () => {
      setShowLoader(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {showLoader && <Preloader />}
      {!showLoader && <>{children}</>}
    </>
  );
};

const Preloader = () => {
  return (
    <div id="global-loader">
      <div className="page-loader"></div>
    </div>
  );
};

export default Loader;
