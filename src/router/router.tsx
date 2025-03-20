import { Fragment, FC } from "react";
import { Route, Routes } from "react-router";

import { authRoutes, publicRoutes } from "./router.link";
import PrivateRouteSectionWrapper from "../wrapper/PrivateRouteSectionWrapper";
import PublicRouteWrapper from "../wrapper/PublicRouteWrapper";
import Login from "../auth/login/login";
import CommonRouteWrapper from "../wrapper/CommonRouteWrapper";

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
