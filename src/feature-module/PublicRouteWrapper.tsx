import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PublicRouteWrapper = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

  if (isLoggedIn) {
    // TODO: Redirect to the dashboard
    return <Navigate to="/" />;
  }

  return (
    <div className="account-page">
      <div className="main-wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default PublicRouteWrapper;
