import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { Calendar } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";
import "bootstrap-daterangepicker/daterangepicker.css";
import ImageWithBasePath from "../../core/common/imageWithBasePath";
import { all_routes } from "../../router/all_routes";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AdminDashboardModal from "../adminDashboard/adminDashboardModal";

const SuperAdminDashboard = () => {
  const routes = all_routes;

  const [date, setDate] = useState<Nullable<Date>>(null);
  const [userName, setUserName] = useState("User");

  
  
  function SampleNextArrow(props: any) {
    const { style, onClick } = props;
    return (
      <div
        className="slick-nav slick-nav-next"
        style={{ ...style, display: "flex", top: "30%", right: "30%" }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-right" style={{ color: "#677788" }}></i>
      </div>
    );
  }

  function SamplePrevArrow(props: any) {
    const { style, onClick } = props;
    return (
      <div
        className="slick-nav slick-nav-prev"
        style={{ ...style, display: "flex", top: "30%", left: "30%" }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-left" style={{ color: "#677788" }}></i>
      </div>
    );
  }
  const settings = {
    dots: false,
    autoplay: false,
    arrows: false,
    slidesToShow: 2,
    margin: 24,
    speed: 500,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [totalEarningArea] = useState<any>({
    chart: {
      height: 90,
      type: 'area',
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true
      }
    },
    colors: ['#3D5EE1'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    series: [{
      name: 'Earnings',
      data: [50, 55, 40, 50, 45, 55, 50]
    }]
  })
  const [totalExpenseArea] = useState<any>({
    chart: {
      height: 90,
      type: 'area',
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true
      }
    },
    colors: ['#E82646'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    series: [{
      name: 'Expense',
      data: [40, 30, 60, 55, 50, 55, 40]
    }]
  })



  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          <>
            {/* Page Header */}
            <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
              <div className="my-auto mb-2">
                <h3 className="page-title mb-1">Administrator Dashboard</h3>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to={routes.adminDashboard}>Dashboard</Link>
                    </li>
                    <li
                      className="breadcrumb-item active"
                      aria-current="page"
                    >
                      Administrator Dashboard
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
                <div className="mb-2">
                  <Link
                    to={routes.addSchools}
                    className="btn btn-primary d-flex align-items-center me-3"
                  >
                    <i className="ti ti-square-rounded-plus me-2" />
                    Add New School
                  </Link>
                </div>
                <div className="mb-2">
                  <Link
                    to={routes.collectFees}
                    className="btn btn-light d-flex align-items-center"
                  >
                    Plans Details
                  </Link>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-md-12">
                <div className="alert-message">
                  <div
                    className="alert alert-success rounded-pill d-flex align-items-center justify-content-between border-success mb-4"
                    role="alert"
                  >
                    <div className="d-flex align-items-center">
                      <span className="me-1 avatar avatar-sm flex-shrink-0">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-27.jpg"
                          alt="Img"
                          className="img-fluid rounded-circle"
                        />
                      </span>
                      <p>
                        Fahed III,C has paid Fees for the{" "}
                        <strong className="mx-1">“Term1”</strong>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="btn-close p-0"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    >
                      <span>
                        <i className="ti ti-x" />
                      </span>
                    </button>
                  </div>
                </div>
                {/* Dashboard Content */}
                <div className="card bg-dark">
                  <div className="overlay-img">
                    <ImageWithBasePath
                      src="assets/img/bg/shape-04.png"
                      alt="img"
                      className="img-fluid shape-01"
                    />
                    <ImageWithBasePath
                      src="assets/img/bg/shape-01.png"
                      alt="img"
                      className="img-fluid shape-02"
                    />
                    <ImageWithBasePath
                      src="assets/img/bg/shape-02.png"
                      alt="img"
                      className="img-fluid shape-03"
                    />
                    <ImageWithBasePath
                      src="assets/img/bg/shape-03.png"
                      alt="img"
                      className="img-fluid shape-04"
                    />
                  </div>
                  <div className="card-body">
                    <div className="d-flex align-items-xl-center justify-content-xl-between flex-xl-row flex-column">
                      <div className="mb-3 mb-xl-0">
                        <div className="d-flex align-items-center flex-wrap mb-2">
                          <h1 className="text-white me-2">Welcome Back, {userName}</h1>
                          <Link to="/profile" className="avatar avatar-sm img-rounded bg-gray-800 dark-hover">
                            <i className="ti ti-edit text-white" />
                          </Link>
                        </div>
                        <p className="text-white">Have a good day at work</p>
                      </div>
                      <p className="text-white custom-text-white">
                        <i className="ti ti-refresh me-1" /> Updated Recently on 15 Jun 2024
                      </p>
                    </div>
                  </div>
                </div>
                {/* /Dashboard Content */}
              </div>
            </div>
            <div className="row">
              {/* Total Students */}
              <div className="col-xxl-3 col-sm-6 d-flex">
                <div className="card flex-fill animate-card border-0">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-xl bg-danger-transparent me-2 p-1">
                        <ImageWithBasePath
                          src="assets/img/icons/student.svg"
                          alt="img"
                        />
                      </div>
                      <div className="overflow-hidden flex-fill">
                        <div className="d-flex align-items-center justify-content-between">
                          <h2 className="counter">
                            <CountUp end={3654} />
                          </h2>
                          <span className="badge bg-danger">1.2%</span>
                        </div>
                        <p>Total Schools</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between border-top mt-3 pt-3">
                      <p className="mb-0">
                        Active :{" "}
                        <span className="text-dark fw-semibold">3643</span>
                      </p>
                      <span className="text-light">|</span>
                      <p>
                        Inactive :{" "}
                        <span className="text-dark fw-semibold">11</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Total Students */}
              {/* Total Teachers */}
              <div className="col-xxl-3 col-sm-6 d-flex">
                <div className="card flex-fill animate-card border-0">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-xl me-2 bg-secondary-transparent p-1">
                        <ImageWithBasePath
                          src="assets/img/icons/teacher.svg"
                          alt="img"
                        />
                      </div>
                      <div className="overflow-hidden flex-fill">
                        <div className="d-flex align-items-center justify-content-between">
                          <h2 className="counter">
                            <CountUp end={284} />
                          </h2>
                          <span className="badge bg-pending">1.2%</span>
                        </div>
                        <p>Total Users</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between border-top mt-3 pt-3">
                      <p className="mb-0">
                        Active :{" "}
                        <span className="text-dark fw-semibold">254</span>
                      </p>
                      <span className="text-light">|</span>
                      <p>
                        Inactive :{" "}
                        <span className="text-dark fw-semibold">30</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Total Teachers */}
              {/* Total Staff */}
              <div className="col-xxl-3 col-sm-6 d-flex">
                <div className="card flex-fill animate-card border-0">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-xl me-2 bg-warning-transparent p-1">
                        <ImageWithBasePath
                          src="assets/img/icons/staff.svg"
                          alt="img"
                        />
                      </div>
                      <div className="overflow-hidden flex-fill">
                        <div className="d-flex align-items-center justify-content-between">
                          <h2 className="counter">
                            <CountUp end={162} />
                          </h2>
                          <span className="badge bg-warning">1.2%</span>
                        </div>
                        <p>Total Plans</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between border-top mt-3 pt-3">
                      <p className="mb-0">
                        Active :{" "}
                        <span className="text-dark fw-semibold">161</span>
                      </p>
                      <span className="text-light">|</span>
                      <p>
                        Inactive :{" "}
                        <span className="text-dark fw-semibold">02</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Total Staff */}
              {/* Total Subjects */}
              <div className="col-xxl-3 col-sm-6 d-flex">
                <div className="card flex-fill animate-card border-0">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-xl me-2 bg-success-transparent p-1">
                        <ImageWithBasePath
                          src="assets/img/icons/subject.svg"
                          alt="img"
                        />
                      </div>
                      <div className="overflow-hidden flex-fill">
                        <div className="d-flex align-items-center justify-content-between">
                          <h2 className="counter">
                            <CountUp end={82} />
                          </h2>
                          <span className="badge bg-success">1.2%</span>
                        </div>
                        <p>Total Employes</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between border-top mt-3 pt-3">
                      <p className="mb-0">
                        Active :{" "}
                        <span className="text-dark fw-semibold">81</span>
                      </p>
                      <span className="text-light">|</span>
                      <p>
                        Inactive :{" "}
                        <span className="text-dark fw-semibold">01</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Total Subjects */}
            </div>

            <div className="row">
              {/* Links */}
              <div className="col-xl-3 col-md-6 d-flex">
                <Link
                  to={routes.studentAttendance}
                  className="card bg-warning-transparent border border-5 border-white animate-card flex-fill"
                >
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-lg bg-warning rounded flex-shrink-0 me-2">
                          <i className="ti ti-calendar-share fs-24" />
                        </span>
                        <div className="overflow-hidden">
                          <h6 className="fw-semibold text-default">
                            View Schools
                          </h6>
                        </div>
                      </div>
                      <span className="btn btn-white warning-btn-hover avatar avatar-sm p-0 flex-shrink-0 rounded-circle">
                        <i className="ti ti-chevron-right fs-14" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
              {/* /Links */}
              {/* Links */}
              <div className="col-xl-3 col-md-6 d-flex">
                <Link
                  to={routes.events}
                  className="card bg-success-transparent border border-5 border-white animate-card flex-fill "
                >
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-lg bg-success rounded flex-shrink-0 me-2">
                          <i className="ti ti-speakerphone fs-24" />
                        </span>
                        <div className="overflow-hidden">
                          <h6 className="fw-semibold text-default">
                            New Events
                          </h6>
                        </div>
                      </div>
                      <span className="btn btn-white success-btn-hover avatar avatar-sm p-0 flex-shrink-0 rounded-circle">
                        <i className="ti ti-chevron-right fs-14" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
              {/* /Links */}
              {/* Links */}
              <div className="col-xl-3 col-md-6 d-flex">
                <Link
                  to={routes.membershipplan}
                  className="card bg-danger-transparent border border-5 border-white animate-card flex-fill"
                >
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-lg bg-danger rounded flex-shrink-0 me-2">
                          <i className="ti ti-sphere fs-24" />
                        </span>
                        <div className="overflow-hidden">
                          <h6 className="fw-semibold text-default">
                            Membership Plans
                          </h6>
                        </div>
                      </div>
                      <span className="btn btn-white avatar avatar-sm p-0 flex-shrink-0 rounded-circle danger-btn-hover">
                        <i className="ti ti-chevron-right fs-14" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
              {/* /Links */}
              {/* Links */}
              <div className="col-xl-3 col-md-6 d-flex">
                <Link
                  to={routes.studentAttendance}
                  className="card bg-secondary-transparent border border-5 border-white animate-card flex-fill"
                >
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-lg bg-secondary rounded flex-shrink-0 me-2">
                          <i className="ti ti-moneybag fs-24" />
                        </span>
                        <div className="overflow-hidden">
                          <h6 className="fw-semibold text-default">
                            Finance &amp; Accounts
                          </h6>
                        </div>
                      </div>
                      <span className="btn btn-white secondary-btn-hover avatar avatar-sm p-0 flex-shrink-0 rounded-circle">
                        <i className="ti ti-chevron-right fs-14" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
              {/* /Links */}
            </div>
            <div className="row">
              {/* Schedules */}
              <div className="col-xxl-4 col-xl-6 col-md-12 d-flex">
                <div className="card flex-fill">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <div>
                      <h4 className="card-title">Schedules</h4>
                    </div>
                    <Link
                      to="#"
                      className="link-primary fw-medium me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#add_event"
                    >
                      <i className="ti ti-square-plus me-1" />
                      Add New
                    </Link>
                  </div>
                  <div className="card-body ">
                    {/* <div className="datepic mb-4" /> */}
                    <Calendar
                      className="datepickers mb-4"
                      value={date}
                      onChange={(e) => setDate(e.value)}
                      inline
                    />
                    <h5 className="mb-3">Upcoming Events</h5>
                    <div className="event-wrapper event-scroll">
                      {/* Event Item */}
                      <div className="border-start border-skyblue border-3 shadow-sm p-3 mb-3">
                        <div className="d-flex align-items-center mb-3 pb-3 border-bottom">
                          <span className="avatar p-1 me-2 bg-teal-transparent flex-shrink-0">
                            <i className="ti ti-user-edit text-info fs-20" />
                          </span>
                          <div className="flex-fill">
                            <h6 className="mb-1">Parents, Teacher Meet</h6>
                            <p className="d-flex align-items-center">
                              <i className="ti ti-calendar me-1" />
                              15 July 2024
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="mb-0">
                            <i className="ti ti-clock me-1" />
                            09:10AM - 10:50PM
                          </p>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar border-0">
                              <ImageWithBasePath
                                src="assets/img/parents/parent-01.jpg"
                                className="rounded-circle"
                                alt="img"
                              />
                            </span>
                            <span className="avatar border-0">
                              <ImageWithBasePath
                                src="assets/img/parents/parent-07.jpg"
                                className="rounded-circle"
                                alt="img"
                              />
                            </span>
                            <span className="avatar border-0">
                              <ImageWithBasePath
                                src="assets/img/parents/parent-02.jpg"
                                className="rounded-circle"
                                alt="img"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* /Event Item */}
                      {/* Event Item */}
                      <div className="border-start border-info border-3 shadow-sm p-3 mb-3">
                        <div className="d-flex align-items-center mb-3 pb-3 border-bottom">
                          <span className="avatar p-1 me-2 bg-info-transparent flex-shrink-0">
                            <i className="ti ti-user-edit fs-20" />
                          </span>
                          <div className="flex-fill">
                            <h6 className="mb-1">Parents, Teacher Meet</h6>
                            <p className="d-flex align-items-center">
                              <i className="ti ti-calendar me-1" />
                              15 July 2024
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="mb-0">
                            <i className="ti ti-clock me-1" />
                            09:10AM - 10:50PM
                          </p>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar border-0">
                              <ImageWithBasePath
                                src="assets/img/parents/parent-05.jpg"
                                className="rounded-circle"
                                alt="img"
                              />
                            </span>
                            <span className="avatar border-0">
                              <ImageWithBasePath
                                src="assets/img/parents/parent-06.jpg"
                                className="rounded-circle"
                                alt="img"
                              />
                            </span>
                            <span className="avatar border-0">
                              <ImageWithBasePath
                                src="assets/img/parents/parent-07.jpg"
                                className="rounded-circle"
                                alt="img"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* /Event Item */}
                      {/* Event Item */}
                      <div className="border-start border-danger border-3 shadow-sm p-3 mb-3">
                        <div className="d-flex align-items-center mb-3 pb-3 border-bottom">
                          <span className="avatar p-1 me-2 bg-danger-transparent flex-shrink-0">
                            <i className="ti ti-vacuum-cleaner fs-24" />
                          </span>
                          <div className="flex-fill">
                            <h6 className="mb-1">Vacation Meeting</h6>
                            <p className="d-flex align-items-center">
                              <i className="ti ti-calendar me-1" />
                              07 July 2024 - 07 July 2024
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="mb-0">
                            <i className="ti ti-clock me-1" />
                            09:10 AM - 10:50 PM
                          </p>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar border-0">
                              <ImageWithBasePath
                                src="assets/img/parents/parent-11.jpg"
                                className="rounded-circle"
                                alt="img"
                              />
                            </span>
                            <span className="avatar border-0">
                              <ImageWithBasePath
                                src="assets/img/parents/parent-13.jpg"
                                className="rounded-circle"
                                alt="img"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* /Event Item */}
                    </div>
                  </div>
                </div>
              </div>
              {/* /Schedules */}
              {/* Attendance */}

              <div className="col-xxl-4 col-md-12 d-flex flex-column">
                {/* Quick Links */}
                <div className="card flex-fill">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <h4 className="card-title">Quick Links</h4>
                  </div>
                  <div className="card-body pb-1">
                    <Slider
                      {...settings}
                      className="owl-carousel link-slider"
                    >
                      <div className="item">
                        <Link
                          to={routes.classTimetable}
                          className="d-block bg-success-transparent ronded p-2 text-center mb-3 class-hover"
                        >
                          <div className="avatar avatar-lg border p-1 border-success rounded-circle mb-2">
                            <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-success rounded-circle">
                              <i className="ti ti-calendar" />
                            </span>
                          </div>
                          <p className="text-dark">Calendar</p>
                        </Link>
                        <Link
                          to={routes.feesGroup}
                          className="d-block bg-secondary-transparent ronded p-2 text-center mb-3 class-hover"
                        >
                          <div className="avatar avatar-lg border p-1 border-secondary rounded-circle mb-2">
                            <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-secondary rounded-circle">
                              <i className="ti ti-license" />
                            </span>
                          </div>
                          <p className="text-dark">Fees</p>
                        </Link>
                      </div>
                      <div className="item">
                        <Link
                          to={routes.examResult}
                          className="d-block bg-primary-transparent ronded p-2 text-center mb-3 class-hover"
                        >
                          <div className="avatar avatar-lg border p-1 border-primary rounded-circle mb-2">
                            <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-primary rounded-circle">
                              <i className="ti ti-hexagonal-prism" />
                            </span>
                          </div>
                          <p className="text-dark">Exam Result</p>
                        </Link>
                        <Link
                          to={routes.classHomeWork}
                          className="d-block bg-danger-transparent ronded p-2 text-center mb-3 class-hover"
                        >
                          <div className="avatar avatar-lg border p-1 border-danger rounded-circle mb-2">
                            <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-danger rounded-circle">
                              <i className="ti ti-report-money" />
                            </span>
                          </div>
                          <p className="text-dark">Home Works</p>
                        </Link>
                      </div>
                      <div className="item">
                        <Link
                          to={routes.studentAttendance}
                          className="d-block bg-warning-transparent ronded p-2 text-center mb-3 class-hover"
                        >
                          <div className="avatar avatar-lg border p-1 border-warning rounded-circle mb-2">
                            <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-warning rounded-circle">
                              <i className="ti ti-calendar-share" />
                            </span>
                          </div>
                          <p className="text-dark">Attendance</p>
                        </Link>
                        <Link
                          to={routes.attendanceReport}
                          className="d-block bg-skyblue-transparent ronded p-2 text-center mb-3 class-hover"
                        >
                          <div className="avatar avatar-lg border p-1 border-skyblue rounded-circle mb-2">
                            <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-pending rounded-circle">
                              <i className="ti ti-file-pencil" />
                            </span>
                          </div>
                          <p className="text-dark">Reports</p>
                        </Link>
                      </div>
                    </Slider>
                  </div>
                </div>

              </div>
              {/* Leave Requests */}
              <div className="col-xxl-4 col-xl-6 d-flex">
                <div className="card flex-fill">
                  <div className="card-header  d-flex align-items-center justify-content-between">
                    <h4 className="card-title">Leave Requests</h4>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="bg-white dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-calendar-due me-1" />
                        Today
                      </Link>
                      <ul className="dropdown-menu mt-2 p-3">
                        <li>
                          <Link to="#" className="dropdown-item rounded-1">
                            This Week
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item rounded-1">
                            Last Week
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item rounded-1">
                            Last Week
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card mb-2">
                      <div className="card-body p-3">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <div className="d-flex align-items-center overflow-hidden me-2">
                            <Link
                              to="#"
                              className="avatar avatar-lg flex-shrink-0 me-2"
                            >
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-14.jpg"
                                alt="student"
                              />
                            </Link>
                            <div className="overflow-hidden">
                              <h6 className="mb-1 text-truncate">
                                <Link to="#">James</Link>
                                <span className="badge badge-soft-danger ms-1">
                                  Emergency
                                </span>
                              </h6>
                              <p className="text-truncate">Physics Teacher</p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="avatar avatar-xs p-0 btn btn-success me-1"
                            >
                              <i className="ti ti-checks" />
                            </Link>
                            <Link
                              to="#"
                              className="avatar avatar-xs p-0 btn btn-danger"
                            >
                              <i className="ti ti-x" />
                            </Link>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between border-top pt-3">
                          <p className="mb-0">
                            Leave :{" "}
                            <span className="fw-semibold">12 -13 May</span>
                          </p>
                          <p>
                            Apply on :{" "}
                            <span className="fw-semibold">12 May</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-0">
                      <div className="card-body p-3">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <div className="d-flex align-items-center overflow-hidden me-2">
                            <Link
                              to="#"
                              className="avatar avatar-lg flex-shrink-0 me-2"
                            >
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-19.jpg"
                                alt="student"
                              />
                            </Link>
                            <div className="overflow-hidden">
                              <h6 className="mb-1 text-truncate ">
                                <Link to="#">Ramien</Link>
                                <span className="badge badge-soft-warning ms-1">
                                  Casual
                                </span>
                              </h6>
                              <p className="text-truncate">Accountant</p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="avatar avatar-xs p-0 btn btn-success me-1"
                            >
                              <i className="ti ti-checks" />
                            </Link>
                            <Link
                              to="#"
                              className="avatar avatar-xs p-0 btn btn-danger"
                            >
                              <i className="ti ti-x" />
                            </Link>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between border-top pt-3">
                          <p className="mb-0">
                            Leave :{" "}
                            <span className="fw-semibold">12 -13 May</span>
                          </p>
                          <p>
                            Apply on :{" "}
                            <span className="fw-semibold">11 May</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Leave Requests */}
            </div>

            <div className="row">
              {/* Total Earnings */}
              <div className="col-xxl-4 col-xl-6 d-flex flex-column">
                <div className="card flex-fill">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="mb-1">Total Earnings</h6>
                        <h2>$64,522,24</h2>
                      </div>
                      <span className="avatar avatar-lg bg-primary">
                        <i className="ti ti-user-dollar" />
                      </span>
                    </div>
                  </div>
                  {/* <div id="total-earning" /> */}
                  <ReactApexChart
                    id="total-earning"
                    options={totalEarningArea}
                    series={totalEarningArea.series}
                    type="area"
                    height={90}
                  />
                </div>
                <div className="card flex-fill">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="mb-1">Total Expenses</h6>
                        <h2>$60,522,24</h2>
                      </div>
                      <span className="avatar avatar-lg bg-danger">
                        <i className="ti ti-user-dollar" />
                      </span>
                    </div>
                  </div>
                  <div id="total-expenses" />
                  <ReactApexChart
                    id="total-expenses"
                    options={totalExpenseArea}
                    series={totalExpenseArea.series}
                    type="area"
                    height={90}
                  />
                </div>
              </div>
              {/* Todo */}
              <div className="col-xxl-4 col-xl-12 d-flex">
                <div className="card flex-fill">
                  <div className="card-header  d-flex align-items-center justify-content-between">
                    <h4 className="card-title">Todo</h4>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="bg-white dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-calendar me-2" />
                        Today
                      </Link>
                      <ul className="dropdown-menu mt-2 p-3">
                        <li>
                          <Link to="#" className="dropdown-item rounded-1">
                            This Month
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item rounded-1">
                            This Year
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item rounded-1">
                            Last Week
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush todo-list">
                      <li className="list-group-item py-3 px-0 pt-0">
                        <div className="d-sm-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center overflow-hidden me-2 todo-strike-content">
                            <div className="form-check form-check-md me-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                            <div className="overflow-hidden">
                              <h6 className="mb-1 text-truncate">
                                Send Reminder to Students
                              </h6>
                              <p>01:00 PM</p>
                            </div>
                          </div>
                          <span className="badge badge-soft-success mt-2 mt-sm-0">
                            Compeleted
                          </span>
                        </div>
                      </li>
                      <li className="list-group-item py-3 px-0">
                        <div className="d-sm-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center overflow-hidden me-2">
                            <div className="form-check form-check-md me-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                            <div className="overflow-hidden">
                              <h6 className="mb-1 text-truncate">
                                Create Routine to new staff
                              </h6>
                              <p>04:50 PM</p>
                            </div>
                          </div>
                          <span className="badge badge-soft-skyblue mt-2 mt-sm-0">
                            Inprogress
                          </span>
                        </div>
                      </li>
                      <li className="list-group-item py-3 px-0">
                        <div className="d-sm-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center overflow-hidden me-2">
                            <div className="form-check form-check-md me-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                            <div className="overflow-hidden">
                              <h6 className="mb-1 text-truncate">
                                Extra Class Info to Students
                              </h6>
                              <p>04:55 PM</p>
                            </div>
                          </div>
                          <span className="badge badge-soft-warning mt-2 mt-sm-0">
                            Yet to Start
                          </span>
                        </div>
                      </li>
                      <li className="list-group-item py-3 px-0">
                        <div className="d-sm-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center overflow-hidden me-2">
                            <div className="form-check form-check-md me-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                            <div className="overflow-hidden">
                              <h6 className="mb-1 text-truncate">
                                Fees for Upcoming Academics
                              </h6>
                              <p>04:55 PM</p>
                            </div>
                          </div>
                          <span className="badge badge-soft-warning mt-2 mt-sm-0">
                            Yet to Start
                          </span>
                        </div>
                      </li>
                      <li className="list-group-item py-3 px-0 pb-0">
                        <div className="d-sm-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center overflow-hidden me-2">
                            <div className="form-check form-check-md me-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                            <div className="overflow-hidden">
                              <h6 className="mb-1 text-truncate">
                                English - Essay on Visit
                              </h6>
                              <p>05:55 PM</p>
                            </div>
                          </div>
                          <span className="badge badge-soft-warning mt-2 mt-sm-0">
                            Yet to Start
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>


            </div>

          </>
        </div>
      </div>
      {/* /Page Wrapper */}
      <AdminDashboardModal />
    </>
  );
};

export default SuperAdminDashboard;
