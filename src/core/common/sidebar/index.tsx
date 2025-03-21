import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars-2";
import { getSidebarData, SidebarItem } from "../../data/json/sidebarData";
import ImageWithBasePath from "../imageWithBasePath";
import "../../../style/icon/tabler-icons/webfont/tabler-icons.css";
import { setExpandMenu } from "../../../Store/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";
import { resetAllMode, setDataLayout } from "../../../Store/themeSettingSlice";
import usePreviousRoute from "./usePreviousRoute";

const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const previousLocation = usePreviousRoute();
  const userObj = useSelector((state: any) => state.auth.userObj);
  const userPermissions = useSelector(
    (state: any) => state.auth.userPermissions
  );

  const [subOpen, setSubopen] = useState<any>("");
  const [subsidebar, setSubsidebar] = useState("");
  const [sidebarData, setSidebarData] = useState<Array<SidebarItem>>([]);

  const toggleSidebar = (title: any) => {
    localStorage.setItem("menuOpened", title);
    if (title === subOpen) {
      setSubopen("");
    } else {
      setSubopen(title);
    }
  };

  const toggleSubsidebar = (subitem: any) => {
    if (subitem === subsidebar) {
      setSubsidebar("");
    } else {
      setSubsidebar(subitem);
    }
  };

  const handleLayoutChange = (layout: string) => {
    dispatch(setDataLayout(layout));
  };

  const handleClick = (label: any, themeSetting: any, layout: any) => {
    toggleSidebar(label);
    if (themeSetting) {
      handleLayoutChange(layout);
    }
  };

  const getLayoutClass = (label: any) => {
    switch (label) {
      case "Default":
        return "default_layout";
      case "Mini":
        return "mini_layout";
      case "Box":
        return "boxed_layout";
      case "Dark":
        return "dark_data_theme";
      case "RTL":
        return "rtl";
      default:
        return "";
    }
  };

  useEffect(() => {
    if (userObj && userObj.role) {
      // Get filtered sidebar data based on the role
      setSidebarData(getSidebarData(userObj.role));
    }
  }, [userObj]);

  useEffect(() => {
    const layoutPages = [
      "/layout-dark",
      "/layout-rtl",
      "/layout-mini",
      "/layout-box",
      "/layout-default",
    ];

    const isCurrentLayoutPage = layoutPages.some((path) =>
      location.pathname.includes(path)
    );
    const isPreviousLayoutPage =
      previousLocation &&
      layoutPages.some((path) => previousLocation.pathname.includes(path));

    if (isPreviousLayoutPage && !isCurrentLayoutPage) {
      dispatch(resetAllMode());
    }
  }, [location, previousLocation, dispatch]);

  useEffect(() => {
    setSubopen(localStorage.getItem("menuOpened"));
    // Select all 'submenu' elements
    const submenus = document.querySelectorAll(".submenu");
    // Loop through each 'submenu'
    submenus.forEach((submenu) => {
      // Find all 'li' elements within the 'submenu'
      const listItems = submenu.querySelectorAll("li");
      submenu.classList.remove("active");
      // Check if any 'li' has the 'active' class
      listItems.forEach((item) => {
        if (item.classList.contains("active")) {
          // Add 'active' class to the 'submenu'
          submenu.classList.add("active");
          return;
        }
      });
    });
  }, [location.pathname]);

  const onMouseEnter = () => {
    dispatch(setExpandMenu(true));
  };
  const onMouseLeave = () => {
    dispatch(setExpandMenu(false));
  };
  return (
    <>
      <div
        className="sidebar"
        id="sidebar"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Scrollbars>
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              <ul>
                <li>
                  <Link
                    to="#"
                    className="d-flex align-items-center border bg-white rounded p-2 mb-4"
                  >
                    <ImageWithBasePath
                      src="assets/img/icons/global-img.svg"
                      className="avatar avatar-md img-fluid rounded"
                      alt="Profile"
                    />
                    <span className="text-dark ms-2 fw-normal">
                      Global International
                    </span>
                  </Link>
                </li>
              </ul>

              <ul>
                {/* TODO: request feature and dashboard need no vvalidation */}
                {sidebarData.map((mainLabel, index) =>
                  userObj &&
                  userObj.role &&
                  ((userPermissions &&
                    userPermissions["HRMModule"] &&
                    userPermissions["HRMModule"].access) ||
                    userObj.role === "superadmin") ? (
                    <li key={index}>
                      <h6 className="submenu-hdr">
                        <span>{mainLabel?.label}</span>
                      </h6>
                      <ul>
                        {mainLabel?.submenuItems?.map((title: any, i) => {
                          let link_array: any = [];
                          if ("submenuItems" in title) {
                            title.submenuItems?.forEach((link: any) => {
                              link_array.push(link?.link);
                              if (link?.submenu && "submenuItems" in link) {
                                link.submenuItems?.forEach((item: any) => {
                                  link_array.push(item?.link);
                                });
                              }
                            });
                          }
                          title.links = link_array;

                          return (
                            <li className="submenu" key={title.label}>
                              <Link
                                to={title?.submenu ? "#" : title?.link}
                                onClick={() =>
                                  handleClick(
                                    title?.label,
                                    title?.themeSetting,
                                    getLayoutClass(title?.label)
                                  )
                                }
                                className={`${
                                  subOpen === title?.label ? "subdrop" : ""
                                } ${
                                  title?.links?.includes(location.pathname)
                                    ? "active"
                                    : ""
                                } ${
                                  title?.submenuItems
                                    ?.map((link: any) => link?.link)
                                    .includes(location.pathname) ||
                                  title?.link === location.pathname
                                    ? "active"
                                    : title?.subLink1 === location.pathname
                                    ? "active"
                                    : title?.subLink2 === location.pathname
                                    ? "active"
                                    : title?.subLink3 === location.pathname
                                    ? "active"
                                    : title?.subLink4 === location.pathname
                                    ? "active"
                                    : title?.subLink5 === location.pathname
                                    ? "active"
                                    : title?.subLink6 === location.pathname
                                    ? "active"
                                    : title?.subLink7 === location.pathname
                                    ? "active"
                                    : ""
                                }`}
                              >
                                <i className={title.icon}></i>
                                <span>{title?.label}</span>
                                <span className="badge badge-primary badge-xs text-white fs-10 ms-auto">
                                  {title?.version}
                                </span>
                                <span
                                  className={title?.submenu ? "menu-arrow" : ""}
                                />
                              </Link>
                              {title?.submenu !== false &&
                                subOpen === title?.label && (
                                  <ul
                                    style={{
                                      display:
                                        subOpen === title?.label
                                          ? "block"
                                          : "none",
                                    }}
                                  >
                                    {title?.submenuItems?.map((item: any) => (
                                      <li
                                        className={
                                          item?.submenuItems
                                            ? "submenu submenu-two "
                                            : ""
                                        }
                                        key={item.label}
                                      >
                                        <Link
                                          to={item?.link}
                                          className={`${
                                            item?.submenuItems
                                              ?.map((link: any) => link?.link)
                                              .includes(location.pathname) ||
                                            item?.link === location.pathname
                                              ? "active"
                                              : item?.subLink1 ===
                                                location.pathname
                                              ? "active"
                                              : item?.subLink2 ===
                                                location.pathname
                                              ? "active"
                                              : item?.subLink3 ===
                                                location.pathname
                                              ? "active"
                                              : item?.subLink4 ===
                                                location.pathname
                                              ? "active"
                                              : item?.subLink5 ===
                                                location.pathname
                                              ? "active"
                                              : item?.subLink6 ===
                                                location.pathname
                                              ? "active"
                                              : ""
                                          } ${
                                            subsidebar === item?.label
                                              ? "subdrop"
                                              : ""
                                          }  `}
                                          onClick={() => {
                                            toggleSubsidebar(item?.label);
                                          }}
                                        >
                                          {item?.label}
                                          <span
                                            className={
                                              item?.submenu ? "menu-arrow" : ""
                                            }
                                          />
                                        </Link>
                                        {item?.submenuItems ? (
                                          <ul
                                            style={{
                                              display:
                                                subsidebar === item?.label
                                                  ? "block"
                                                  : "none",
                                            }}
                                          >
                                            {item?.submenuItems?.map(
                                              (items: any) => (
                                                <li key={items.label}>
                                                  <Link
                                                    to={items?.link}
                                                    className={`${
                                                      subsidebar ===
                                                      items?.label
                                                        ? "submenu-two subdrop"
                                                        : "submenu-two"
                                                    } ${
                                                      items?.submenuItems
                                                        ?.map(
                                                          (link: any) =>
                                                            link.link
                                                        )
                                                        .includes(
                                                          location.pathname
                                                        ) ||
                                                      items?.link ===
                                                        location.pathname
                                                        ? "active"
                                                        : ""
                                                    }`}
                                                  >
                                                    {items?.label}
                                                  </Link>
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        ) : (
                                          <></>
                                        )}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          </div>
        </Scrollbars>
      </div>
    </>
  );
};

export default Sidebar;
