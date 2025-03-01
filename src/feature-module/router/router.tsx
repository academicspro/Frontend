import { Fragment, FC } from "react";
import { Route, Routes } from "react-router";

import { authRoutes, publicRoutes } from "./router.link";
import PrivateRouteSectionWrapper from "../PrivateRouteSectionWrapper";
import PublicRouteWrapper from "../PublicRouteWrapper";
import Login from "../auth/login/login";
import CommonRouteWrapper from "../CommonRouteWrapper";

const ALLRoutes: FC = () => {
  return (
    <Fragment>
      <Routes>
        <Route element={<CommonRouteWrapper />}>
          <Route element={<PublicRouteWrapper />}>
            <Route path="/" element={<Login />} />
            {authRoutes.map((route, idx) => (
              <Route path={route.path} element={route.element} key={idx} />
            ))}
          </Route>

          <Route element={<PrivateRouteSectionWrapper />}>
            {publicRoutes.map((route, idx) => (
              <Route path={route.path} element={route.element} key={idx} />
            ))}
          </Route>
        </Route>
      </Routes>
    </Fragment>
  );
};

export default ALLRoutes;
