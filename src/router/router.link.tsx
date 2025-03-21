import { Route } from "react-router";
import { all_routes } from "./all_routes";
// import { Calendar, Avatar, Grid, Progress, Typography, Timeline } from "antd";
import Ribbon from "antd/es/badge/Ribbon";
// import { Accordion, Breadcrumb, Carousel, Offcanvas, Pagination, Spinner, InputGroup, FormSelect, FloatingLabel, Placeholder, Alert } from "react-bootstrap";
import { Video } from "react-feather";
import AudioCall from "../apps/application/call/audioCall";
import CallHistory from "../apps/application/call/callHistory";
import Videocall from "../apps/application/call/videoCall";
import Chat from "../apps/application/chat";
import Email from "../apps/application/email";
import FileManager from "../apps/application/fileManager";
import Notes from "../apps/application/notes";
import Todo from "../apps/application/todo";
import EmailVerification from "../auth/emailVerification/emailVerification";
import ForgotPassword from "../auth/forgotPassword/forgotPassword";
import Login from "../auth/login/login";
import ResetPassword from "../auth/resetPassword/resetPassword";
import ResetPasswordSuccess from "../auth/resetPasswordSuccess/resetPasswordSuccess";
import BasicTable from "../components/tables/basicTable";
import ClipBoard from "../components/uiInterface/advanced-ui/clipboard";
import Counter from "../components/uiInterface/advanced-ui/counter";
import DragAndDrop from "../components/uiInterface/advanced-ui/dragdrop";
import RangeSlides from "../components/uiInterface/advanced-ui/rangeslider";
import Rating from "../components/uiInterface/advanced-ui/rating";
import Stickynote from "../components/uiInterface/advanced-ui/stickynote";
import TextEditor from "../components/uiInterface/advanced-ui/texteditor";
import Scrollbar from "../components/uiInterface/advanced-ui/uiscrollbar";
import AlertUi from "../components/uiInterface/base-ui/alert-ui";
import Badges from "../components/uiInterface/base-ui/badges";
import Borders from "../components/uiInterface/base-ui/borders";
import Buttons from "../components/uiInterface/base-ui/buttons";
import ButtonsGroup from "../components/uiInterface/base-ui/buttonsgroup";
import Cards from "../components/uiInterface/base-ui/cards";
import Colors from "../components/uiInterface/base-ui/colors";
import Dropdowns from "../components/uiInterface/base-ui/dropdowns";
import Images from "../components/uiInterface/base-ui/images";
import Lightboxes from "../components/uiInterface/base-ui/lightbox";
import Media from "../components/uiInterface/base-ui/media";
import Modals from "../components/uiInterface/base-ui/modals";
import NavTabs from "../components/uiInterface/base-ui/navtabs";
import Popovers from "../components/uiInterface/base-ui/popover";
import Toasts from "../components/uiInterface/base-ui/toasts";
import Tooltips from "../components/uiInterface/base-ui/tooltips";
import Apexchart from "../components/uiInterface/charts/apexcharts";
import BasicInputs from "../components/uiInterface/forms/formelements/basic-inputs";
import CheckboxRadios from "../components/uiInterface/forms/formelements/checkbox-radios";
import FileUpload from "../components/uiInterface/forms/formelements/fileupload";
import FormMask from "../components/uiInterface/forms/formelements/form-mask";
import FormWizard from "../components/uiInterface/forms/formelements/form-wizard";
import GridGutters from "../components/uiInterface/forms/formelements/grid-gutters";
import FormHorizontal from "../components/uiInterface/forms/formelements/layouts/form-horizontal";
import FormSelect2 from "../components/uiInterface/forms/formelements/layouts/form-select2";
import FormValidation from "../components/uiInterface/forms/formelements/layouts/form-validation";
import FormVertical from "../components/uiInterface/forms/formelements/layouts/form-vertical";
import FeatherIcons from "../components/uiInterface/icons/feathericon";
import FontawesomeIcons from "../components/uiInterface/icons/fontawesome";
import IonicIcons from "../components/uiInterface/icons/ionicicons";
import MaterialIcons from "../components/uiInterface/icons/materialicon";
import PE7Icons from "../components/uiInterface/icons/pe7icons";
import SimplelineIcons from "../components/uiInterface/icons/simplelineicon";
import ThemifyIcons from "../components/uiInterface/icons/themify";
import TypiconIcons from "../components/uiInterface/icons/typicons";
import WeatherIcons from "../components/uiInterface/icons/weathericons";
import DataTables from "../components/uiInterface/table/data-tables";
import TablesBasic from "../components/uiInterface/table/tables-basic";
import AccountsIncome from "../dashboard/accountentDashboard/accounts/accounts-income";
import AccountsInvoices from "../dashboard/accountentDashboard/accounts/accounts-invoices";
import AccountsTransactions from "../dashboard/accountentDashboard/accounts/accounts-transactions";
import AddInvoice from "../dashboard/accountentDashboard/accounts/add-invoice";
import EditInvoice from "../dashboard/accountentDashboard/accounts/edit-invoice";
import Expense from "../dashboard/accountentDashboard/accounts/expense";
import ExpensesCategory from "../dashboard/accountentDashboard/accounts/expenses-category";
import Invoice from "../dashboard/accountentDashboard/accounts/invoice";
import AdminDashboard from "../dashboard/adminDashboard";
import AcademicReason from "../dashboard/adminDashboard/academic/academic-reason";
import ClassHomeWork from "../dashboard/adminDashboard/academic/class-home-work";
import ClassRoom from "../dashboard/adminDashboard/academic/class-room";
import ClassRoutine from "../dashboard/adminDashboard/academic/class-routine";
import ClassSection from "../dashboard/adminDashboard/academic/class-section";
import ClassSubject from "../dashboard/adminDashboard/academic/class-subject";
import ClassSyllabus from "../dashboard/adminDashboard/academic/class-syllabus";
import ClassTimetable from "../dashboard/adminDashboard/academic/class-timetable";
import Classes from "../dashboard/adminDashboard/academic/classes";
import Exam from "../dashboard/adminDashboard/academic/examinations/exam";
import ExamAttendance from "../dashboard/adminDashboard/academic/examinations/exam-attendance";
import ExamResult from "../dashboard/adminDashboard/academic/examinations/exam-results";
import ExamSchedule from "../dashboard/adminDashboard/academic/examinations/exam-schedule";
import Grade from "../dashboard/adminDashboard/academic/examinations/grade";
import ScheduleClasses from "../dashboard/adminDashboard/academic/schedule-classes";
import GuardianGrid from "../dashboard/adminDashboard/peoples/guardian/guardian-grid";
import GuardianList from "../dashboard/adminDashboard/peoples/guardian/guardian-list";
import ParentGrid from "../dashboard/adminDashboard/peoples/parent/parent-grid";
import ParentList from "../dashboard/adminDashboard/peoples/parent/parent-list";
import AddStudent from "../dashboard/adminDashboard/peoples/students/add-student";
import StudentDetails from "../dashboard/adminDashboard/peoples/students/student-details/studentDetails";
import StudentFees from "../dashboard/adminDashboard/peoples/students/student-details/studentFees";
import StudentLeaves from "../dashboard/adminDashboard/peoples/students/student-details/studentLeaves";
import StudentLibrary from "../dashboard/adminDashboard/peoples/students/student-details/studentLibrary";
import StudentResult from "../dashboard/adminDashboard/peoples/students/student-details/studentResult";
import StudentTimeTable from "../dashboard/adminDashboard/peoples/students/student-details/studentTimeTable";
import StudentGrid from "../dashboard/adminDashboard/peoples/students/student-grid";
import StudentList from "../dashboard/adminDashboard/peoples/students/student-list";
import StudentPromotion from "../dashboard/adminDashboard/peoples/students/student-promotion";
import GetSchools from "../dashboard/superadmindashboard/super-admin/getSchools";
import RegisterSchool from "../dashboard/superadmindashboard/super-admin/registerSchools";
import TeacherDetails from "../dashboard/adminDashboard/peoples/teacher/teacher-details/teacherDetails";
import TeacherLeave from "../dashboard/adminDashboard/peoples/teacher/teacher-details/teacherLeave";
import TeacherLibrary from "../dashboard/adminDashboard/peoples/teacher/teacher-details/teacherLibrary";
import TeacherSalary from "../dashboard/adminDashboard/peoples/teacher/teacher-details/teacherSalary";
import TeachersRoutine from "../dashboard/adminDashboard/peoples/teacher/teacher-details/teachersRoutine";
import TeacherGrid from "../dashboard/adminDashboard/peoples/teacher/teacher-grid";
import TeacherList from "../dashboard/adminDashboard/peoples/teacher/teacher-list";
import TeacherForm from "../dashboard/adminDashboard/peoples/teacher/teacherForm";
import ParentDashboard from "../dashboard/parentDashboard";
import AttendanceReport from "../dashboard/report/attendance-report/attendanceReport";
import DailyAttendance from "../dashboard/report/attendance-report/dailyAttendance";
import StaffDayWise from "../dashboard/report/attendance-report/staffDayWise";
import StaffReport from "../dashboard/report/attendance-report/staffReport";
import StudentAttendanceType from "../dashboard/report/attendance-report/studentAttendanceType";
import StudentDayWise from "../dashboard/report/attendance-report/studentDayWise";
import TeacherDayWise from "../dashboard/report/attendance-report/teacherDayWise";
import TeacherReport from "../dashboard/report/attendance-report/teacherReport";
import ClassReport from "../dashboard/report/class-report/classReport";
import FeesReport from "../dashboard/report/fees-report/feesReport";
import GradeReport from "../dashboard/report/grade-report/gradeReport";
import LeaveReport from "../dashboard/report/leave-report/leaveReport";
import StudentReport from "../dashboard/report/student-report/studentReport";
import StudentDasboard from "../dashboard/studentDashboard";
import SuperAdminDashboard from "../dashboard/superadmindashboard";
import Events from "../dashboard/superadmindashboard/announcements/events";
import NoticeBoard from "../dashboard/superadmindashboard/announcements/notice-board";
import AllBlogs from "../dashboard/superadmindashboard/content/blog/allBlogs";
import BlogCategories from "../dashboard/superadmindashboard/content/blog/blogCategories";
import BlogComments from "../dashboard/superadmindashboard/content/blog/blogComments";
import BlogTags from "../dashboard/superadmindashboard/content/blog/blogTags";
import Faq from "../dashboard/superadmindashboard/content/faq";
import Cities from "../dashboard/superadmindashboard/content/location/cities";
import Countries from "../dashboard/superadmindashboard/content/location/countries";
import States from "../dashboard/superadmindashboard/content/location/states";
import Pages from "../dashboard/superadmindashboard/content/pages";
import Testimonials from "../dashboard/superadmindashboard/content/testimonials";
import StaffAttendance from "../dashboard/superadmindashboard/hrm/attendance/staff-attendance";
import StudentAttendance from "../dashboard/superadmindashboard/hrm/attendance/student-attendance";
import TeacherAttendance from "../dashboard/superadmindashboard/hrm/attendance/teacher-attendance";
import Departments from "../dashboard/superadmindashboard/hrm/departments";
import Designation from "../dashboard/superadmindashboard/hrm/designation";
import Holiday from "../dashboard/superadmindashboard/hrm/holidays";
import ApproveRequest from "../dashboard/superadmindashboard/hrm/leaves/approve-request";
import ListLeaves from "../dashboard/superadmindashboard/hrm/leaves/list-leaves";
import Payroll from "../dashboard/superadmindashboard/hrm/payroll";
import AddStaff from "../dashboard/superadmindashboard/hrm/staff-list/add-staff";
import EditStaff from "../dashboard/superadmindashboard/hrm/staff-list/edit-staff";
import Staff from "../dashboard/superadmindashboard/hrm/staff-list/staff";
import StaffDetails from "../dashboard/superadmindashboard/hrm/staff-list/staff-details.tsx";
import StaffLeave from "../dashboard/superadmindashboard/hrm/staff-list/staff-leave";
import StaffPayRoll from "../dashboard/superadmindashboard/hrm/staff-list/staff-payroll.tsx";
import StaffsAttendance from "../dashboard/superadmindashboard/hrm/staff-list/staffs-attendance";
import CollectFees from "../dashboard/superadmindashboard/management/feescollection/collectFees";
import FeesAssign from "../dashboard/superadmindashboard/management/feescollection/feesAssign";
import FeesGroup from "../dashboard/superadmindashboard/management/feescollection/feesGroup";
import FeesMaster from "../dashboard/superadmindashboard/management/feescollection/feesMaster";
import FeesTypes from "../dashboard/superadmindashboard/management/feescollection/feesTypes";
import HostelList from "../dashboard/superadmindashboard/management/hostel/hostelList";
import HostelRooms from "../dashboard/superadmindashboard/management/hostel/hostelRooms";
import HostelType from "../dashboard/superadmindashboard/management/hostel/hostelType";
import Books from "../dashboard/superadmindashboard/management/library/books";
import IssueBook from "../dashboard/superadmindashboard/management/library/issuesBook";
import LibraryMember from "../dashboard/superadmindashboard/management/library/libraryMember";
import ReturnBook from "../dashboard/superadmindashboard/management/library/returnBook";
import PlayersList from "../dashboard/superadmindashboard/management/sports/playersList";
import SportsList from "../dashboard/superadmindashboard/management/sports/sportsList";
import TransportAssignVehicle from "../dashboard/superadmindashboard/management/transport/transportAssignVehicle";
import TransportPickupPoints from "../dashboard/superadmindashboard/management/transport/transportPickupPoints";
import TransportRoutes from "../dashboard/superadmindashboard/management/transport/transportRoutes";
import TransportVehicle from "../dashboard/superadmindashboard/management/transport/transportVehicle";
import TransportVehicleDrivers from "../dashboard/superadmindashboard/management/transport/transportVehicleDrivers";
import MembershipAddon from "../dashboard/superadmindashboard/membership/membershipaddon";
import Membershipplan from "../dashboard/superadmindashboard/membership/membershipplan";
import MembershipTransaction from "../dashboard/superadmindashboard/membership/membershiptrasaction";
import Religion from "../dashboard/superadmindashboard/settings/academicSettings/religion";
import SchoolSettings from "../dashboard/superadmindashboard/settings/academicSettings/schoolSettings";
import CustomFields from "../dashboard/superadmindashboard/settings/appSettings/customFields";
import InvoiceSettings from "../dashboard/superadmindashboard/settings/appSettings/invoiceSettings";
import PaymentGateways from "../dashboard/superadmindashboard/settings/financialSettings/paymentGateways";
import TaxRates from "../dashboard/superadmindashboard/settings/financialSettings/taxRates";
import ConnectedApps from "../dashboard/superadmindashboard/settings/generalSettings/connectedApps";
import Notificationssettings from "../dashboard/superadmindashboard/settings/generalSettings/notifications";
import Profilesettings from "../dashboard/superadmindashboard/settings/generalSettings/profile";
import Securitysettings from "../dashboard/superadmindashboard/settings/generalSettings/security";
import BanIpAddress from "../dashboard/superadmindashboard/settings/otherSettings/banIpaddress";
import Emailtemplates from "../dashboard/superadmindashboard/settings/systemSettings/email-templates";
import EmailSettings from "../dashboard/superadmindashboard/settings/systemSettings/emailSettings";
import GdprCookies from "../dashboard/superadmindashboard/settings/systemSettings/gdprCookies";
import OtpSettings from "../dashboard/superadmindashboard/settings/systemSettings/otp-settings";
import SmsSettings from "../dashboard/superadmindashboard/settings/systemSettings/smsSettings";
import CompanySettings from "../dashboard/superadmindashboard/settings/websiteSettings/companySettings";
import Languagesettings from "../dashboard/superadmindashboard/settings/websiteSettings/language";
import Localization from "../dashboard/superadmindashboard/settings/websiteSettings/localization";
import Preference from "../dashboard/superadmindashboard/settings/websiteSettings/preference";
import Prefixes from "../dashboard/superadmindashboard/settings/websiteSettings/prefixes";
import Socialauthentication from "../dashboard/superadmindashboard/settings/websiteSettings/socialAuthentication";
import ContactMessages from "../dashboard/superadmindashboard/support/contactMessages";
import TicketDetails from "../dashboard/superadmindashboard/support/ticket-details";
import TicketGrid from "../dashboard/superadmindashboard/support/ticket-grid";
import Tickets from "../dashboard/superadmindashboard/support/tickets";
import DeleteRequest from "../dashboard/superadmindashboard/userManagement/deleteRequest";
import Manageusers from "../dashboard/superadmindashboard/userManagement/manageusers";
import Permission from "../dashboard/superadmindashboard/userManagement/permission";
import RolesPermissions from "../dashboard/superadmindashboard/userManagement/rolesPermissions";
import TeacherDashboard from "../dashboard/teacherDashboard";
import BlankPage from "../pages/blankPage";
import ComingSoon from "../pages/comingSoon";
import Error404 from "../pages/error/error-404";
import Error500 from "../pages/error/error-500";
import Profile from "../pages/profile";
import NotificationActivities from "../pages/profile/activities";
import UnderMaintenance from "../pages/underMaintenance";
import FloatingLabel from "../components/uiInterface/forms/formelements/layouts/floating-label";
import Offcanvas from "../components/uiInterface/base-ui/offcanvas";
import Pagination from "../components/uiInterface/base-ui/pagination";
import Carousel from "../components/uiInterface/base-ui/carousel";
import Accordion from "../components/uiInterface/base-ui/accordion";
import Breadcrumb from "../components/uiInterface/base-ui/breadcrumb";
import Spinner from "../components/uiInterface/base-ui/spinner";
import FormSelect from "../components/uiInterface/forms/formelements/form-select";
import InputGroup from "../components/uiInterface/forms/formelements/input-group";
import Placeholder from "../components/uiInterface/base-ui/placeholder";
import Alert from "../components/uiInterface/base-ui/alert";
import Grid from "../components/uiInterface/base-ui/grid";
import Avatar from "../components/uiInterface/base-ui/avatar";
import Progress from "../components/uiInterface/base-ui/progress";
import Typography from "../components/uiInterface/base-ui/typography";
import Timeline from "../components/uiInterface/advanced-ui/timeline";
import Calendar from "../apps/calendar";


import DataTable from "../components/uiInterface/table/data-tables";
import Storage from "../dashboard/superadmindashboard/settings/otherSettings/storage";

// super admin pages
import SuperAdminFetauresRequestListPage from "../dashboard/superadmindashboard/pages/SuperAdminFetauresRequestListPage";

// Admin pages
import AdminRequestFetauresPage from "../dashboard/adminDashboard/pages/AdminRequestFetauresPage";



// import Countries from "../content/location/countries";
// import BlankPage from "../wrapper/pages/blankPage";
// import Calendar from "../mainMenu/apps/calendar";
// import DataTable from "../components/tables/dataTable";
// import BasicTable from "../components/tables/basicTable";
// import DeleteRequest from "../wrapper/userManagement/deleteRequest";
// import Membershipplan from "../membership/membershipplan";
// import MembershipAddon from "../membership/membershipaddon";
// import Notes from "../application/notes";
// import ComingSoon from "../pages/comingSoon";
// import Login from "../auth/login/login";


// import EmailVerification from "../auth/emailVerification/emailVerification";
// import ResetPassword from "../auth/resetPassword/resetPassword";
// import ForgotPassword from "../auth/forgotPassword/forgotPassword";
// import Accordion from "../components/uiInterface/base-ui/accordion";
// import Avatar from "../components/uiInterface/base-ui/avatar";
// import Borders from "../components/uiInterface/base-ui/borders";
// import Breadcrumb from "../components/uiInterface/base-ui/breadcrumb";
// import Buttons from "../components/uiInterface/base-ui/buttons";
// import ButtonsGroup from "../components/uiInterface/base-ui/buttonsgroup";
// import Cards from "../components/uiInterface/base-ui/cards";
// import Carousel from "../components/uiInterface/base-ui/carousel";
// import Colors from "../components/uiInterface/base-ui/colors";
// import Dropdowns from "../components/uiInterface/base-ui/dropdowns";
// import Grid from "../components/uiInterface/base-ui/grid";
// import Images from "../components/uiInterface/base-ui/images";
// import Lightboxes from "../components/uiInterface/base-ui/lightbox";
// import Media from "../components/uiInterface/base-ui/media";
// import Modals from "../components/uiInterface/base-ui/modals";
// import NavTabs from "../components/uiInterface/base-ui/navtabs";
// import Offcanvas from "../components/uiInterface/base-ui/offcanvas";
// import Pagination from "../components/uiInterface/base-ui/pagination";
// import Popovers from "../components/uiInterface/base-ui/popover";
// import RangeSlides from "../components/uiInterface/base-ui/rangeslider";
// import Progress from "../components/uiInterface/base-ui/progress";
// import Spinner from "../components/uiInterface/base-ui/spinner";
// import Toasts from "../components/uiInterface/base-ui/toasts";
// import Typography from "../components/uiInterface/base-ui/typography";
// import Video from "../components/uiInterface/base-ui/video";
// import Error404 from "../pages/error/error-404";
// import Error500 from "../pages/error/error-500";
// import Preference from "../wrapper/settings/websiteSettings/preference";
// import UnderMaintenance from "../pages/underMaintenance";
// import Todo from "../apps/application/todo";
// import Email from "../apps/application/email";
// import Chat from "../apps/application/chat";
// import Pages from "../content/pages";
// import AudioCall from "../apps/application/call/audioCall";
// import CallHistory from "../apps/application/call/callHistory";
// import FileManager from "../apps/application/fileManager";
// import MembershipTransaction from "../membership/membershiptrasaction";
// import ClipBoard from "../components/uiInterface/advanced-ui/clipboard";
// import Counter from "../components/uiInterface/advanced-ui/counter";
// import DragAndDrop from "../components/uiInterface/advanced-ui/dragdrop";
// import Rating from "../components/uiInterface/advanced-ui/rating";
// import Stickynote from "../components/uiInterface/advanced-ui/stickynote";
// import TextEditor from "../components/uiInterface/advanced-ui/texteditor";
// import Timeline from "../components/uiInterface/advanced-ui/timeline";
// import Scrollbar from "../components/uiInterface/advanced-ui/uiscrollbar";
// import Apexchart from "../components/uiInterface/charts/apexcharts";
// import FeatherIcons from "../components/uiInterface/icons/feathericon";
// import FontawesomeIcons from "../components/uiInterface/icons/fontawesome";
// import MaterialIcons from "../components/uiInterface/icons/materialicon";
// import PE7Icons from "../components/uiInterface/icons/pe7icons";
// import SimplelineIcons from "../components/uiInterface/icons/simplelineicon";
// import ThemifyIcons from "../components/uiInterface/icons/themify";
// import TypiconIcons from "../components/uiInterface/icons/typicons";
// import WeatherIcons from "../components/uiInterface/icons/weathericons";
// import BasicInputs from "../components/uiInterface/forms/formelements/basic-inputs";
// import CheckboxRadios from "../components/uiInterface/forms/formelements/checkbox-radios";
// import InputGroup from "../components/uiInterface/forms/formelements/input-group";
// import GridGutters from "../components/uiInterface/forms/formelements/grid-gutters";
// import FormSelect from "../components/uiInterface/forms/formelements/form-select";
// import FormMask from "../components/uiInterface/forms/formelements/form-mask";
// import FileUpload from "../components/uiInterface/forms/formelements/fileupload";
// import FormHorizontal from "../components/uiInterface/forms/formelements/layouts/form-horizontal";
// import FormVertical from "../components/uiInterface/forms/formelements/layouts/form-vertical";

// import FormValidation from "../components/uiInterface/forms/formelements/layouts/form-validation";
// import FormSelect2 from "../components/uiInterface/forms/formelements/layouts/form-select2";
// import FormWizard from "../components/uiInterface/forms/formelements/form-wizard";
// import DataTables from "../components/uiInterface/table/data-tables";
// import TablesBasic from "../components/uiInterface/table/tables-basic";
// import IonicIcons from "../components/uiInterface/icons/ionicicons";
// import Badges from "../components/uiInterface/base-ui/badges";
// import Placeholder from "../components/uiInterface/base-ui/placeholder";
// import Alert from "../components/uiInterface/base-ui/alert";
// import Tooltips from "../components/uiInterface/base-ui/tooltips";
// import Ribbon from "../components/uiInterface/advanced-ui/ribbon";
// import AdminDashboard from "../dashboard/adminDashboard";
// import AlertUi from "../components/uiInterface/base-ui/alert-ui";
// import TeacherDashboard from "../dashboard/teacherDashboard";
// import StudentDasboard from "../dashboard/studentDashboard";
// import ParentDashboard from "../dashboard/parentDashboard";
// import StudentGrid from "../dashboard/adminDashboard/peoples/students/student-grid";
// import AddStudent from "../dashboard/adminDashboard/peoples/students/add-student";
// import StudentList from "../dashboard/adminDashboard/peoples/students/student-list";
// import StudentLibrary from "../dashboard/adminDashboard/peoples/students/student-details/studentLibrary";
// import StudentDetails from "../dashboard/adminDashboard/peoples/students/student-details/studentDetails";
// import StudentFees from "../dashboard/adminDashboard/peoples/students/student-details/studentFees";
// import StudentLeaves from "../dashboard/adminDashboard/peoples/students/student-details/studentLeaves";
// import StudentResult from "../dashboard/adminDashboard/peoples/students/student-details/studentResult";
// import StudentTimeTable from "../dashboard/adminDashboard/peoples/students/student-details/studentTimeTable";
// import AcademicReason from "../academic/academic-reason";
// import ClassSyllabus from "../academic/class-syllabus";
// import ClassSubject from "../academic/class-subject";
// import ClassSection from "../academic/class-section";
// import ClassRoom from "../academic/class-room";
// import ClassRoutine from "../academic/class-routine";
// import ScheduleClasses from "../academic/schedule-classes";
// import Exam from "../academic/examinations/exam";
// import ExamSchedule from "../academic/examinations/exam-schedule";
// import Grade from "../academic/examinations/grade";
// import Staff from "../hrm/staff-list/staff";
// import Departments from "../hrm/departments";
// import Classes from "../academic/classes";
// import ClassHomeWork from "../academic/class-home-work";
// import ExamResult from "../academic/examinations/exam-results";
// import ExamAttendance from "../academic/examinations/exam-attendance";
// import StudentPromotion from "../dashboard/adminDashboard/peoples/students/student-promotion";
// import TeacherGrid from "../dashboard/adminDashboard/peoples/teacher/teacher-grid";
// import TeacherForm from "../dashboard/adminDashboard/peoples/teacher/teacherForm";
// import ClassTimetable from "../academic/class-timetable";
// import Payroll from "../hrm/payroll";
// import Holiday from "../hrm/holidays";
// import Designation from "../hrm/designation";
// import ListLeaves from "../hrm/leaves/list-leaves";
// import StaffDetails from "../hrm/staff-list/staff-details.tsx";
// import StaffPayRoll from "../hrm/staff-list/staff-payroll.tsx";
// import StaffLeave from "../hrm/staff-list/staff-leave";
// import ApproveRequest from "../../superadmin/hrm/leaves/approve-request";
// import TeacherList from "../dashboard/adminDashboard/peoples/teacher/teacher-list";
// import TeacherDetails from "../dashboard/adminDashboard/peoples/teacher/teacher-details/teacherDetails";
// import TeachersRoutine from "../dashboard/adminDashboard/peoples/teacher/teacher-details/teachersRoutine";
// import TeacherSalary from "../dashboard/adminDashboard/peoples/teacher/teacher-details/teacherSalary";
// import TeacherLeave from "../dashboard/adminDashboard/peoples/teacher/teacher-details/teacherLeave";
// import TeacherLibrary from "../dashboard/adminDashboard/peoples/teacher/teacher-details/teacherLibrary";
// import ParentGrid from "../dashboard/adminDashboard/peoples/parent/parent-grid";
// import ParentList from "../dashboard/adminDashboard/peoples/parent/parent-list";
// import GuardianGrid from "../dashboard/adminDashboard/peoples/guardian/guardian-grid";
// import GuardianList from "../dashboard/adminDashboard/peoples/guardian/guardian-list";
// import FeesGroup from "../management/feescollection/feesGroup";

// // import ResetPassword2 from "../auth/resetPassword/resetPassword-2";
// // import ResetPassword3 from "../auth/resetPassword/resetPassword-3";
// // import TwoStepVerification2 from "../auth/twoStepVerification/twoStepVerification-2";
// // import TwoStepVerification3 from "../auth/twoStepVerification/twoStepVerification-3";

// import ForgotPassword2 from "../auth/forgotPassword/forgotPassword-2";
// import ForgotPassword3 from "../auth/forgotPassword/forgotPassword-3";
// import ResetPasswordSuccess from "../auth/resetPasswordSuccess/resetPasswordSuccess";
// import ResetPasswordSuccess2 from "../auth/resetPasswordSuccess/resetPasswordSuccess-2";
// import ResetPasswordSuccess3 from "../auth/resetPasswordSuccess/resetPasswordSuccess-3";
// import FeesTypes from "../management/feescollection/feesTypes";
// import FeesMaster from "../management/feescollection/feesMaster";
// import FeesAssign from "../management/feescollection/feesAssign";
// import CollectFees from "../management/feescollection/collectFees";
// import StudentAttendance from "../hrm/attendance/student-attendance";
// import TeacherAttendance from "../hrm/attendance/teacher-attendance";
// import StaffAttendance from "../hrm/attendance/staff-attendance";
// import AddStaff from "../hrm/staff-list/add-staff";
// import EditStaff from "../hrm/staff-list/edit-staff";
// import StaffsAttendance from "../hrm/staff-list/staffs-attendance";
// import LibraryMember from "../management/library/libraryMember";
// import Books from "../management/library/books";
// import IssueBook from "../management/library/issuesBook";
// import ReturnBook from "../management/library/returnBook";
// import SportsList from "../management/sports/sportsList";
// import PlayersList from "../management/sports/playersList";
// import HostelRooms from "../management/hostel/hostelRooms";
// import HostelList from "../management/hostel/hostelList";
// import HostelType from "../management/hostel/hostelType";
// import TransportRoutes from "../management/transport/transportRoutes";
// import TransportPickupPoints from "../management/transport/transportPickupPoints";
// import TransportVehicleDrivers from "../management/transport/transportVehicleDrivers";
// import TransportVehicle from "../management/transport/transportVehicle";
// import TransportAssignVehicle from "../management/transport/transportAssignVehicle";
// import RolesPermissions from "../wrapper/userManagement/rolesPermissions";
// import Permission from "../wrapper/userManagement/permission";
// import Manageusers from "../wrapper/userManagement/manageusers";
// import Profilesettings from "../wrapper/settings/generalSettings/profile";
// import Securitysettings from "../wrapper/settings/generalSettings/security";
// import Notificationssettings from "../wrapper/settings/generalSettings/notifications";
// import ConnectedApps from "../wrapper/settings/generalSettings/connectedApps";
// import CompanySettings from "../wrapper/settings/websiteSettings/companySettings";
// import Localization from "../wrapper/settings/websiteSettings/localization";
// import Prefixes from "../wrapper/settings/websiteSettings/prefixes";
// import Socialauthentication from "../wrapper/settings/websiteSettings/socialAuthentication";
// import Languagesettings from "../wrapper/settings/websiteSettings/language";
// import InvoiceSettings from "../wrapper/settings/appSettings/invoiceSettings";
// import CustomFields from "../wrapper/settings/appSettings/customFields";
// import EmailSettings from "../wrapper/settings/systemSettings/emailSettings";
// import Emailtemplates from "../wrapper/settings/systemSettings/email-templates";
// import SmsSettings from "../wrapper/settings/systemSettings/smsSettings";
// import OtpSettings from "../wrapper/settings/systemSettings/otp-settings";
// import GdprCookies from "../wrapper/settings/systemSettings/gdprCookies";
// import PaymentGateways from "../wrapper/settings/financialSettings/paymentGateways";
// import TaxRates from "../wrapper/settings/financialSettings/taxRates";
// import SchoolSettings from "../wrapper/settings/academicSettings/schoolSettings";
// import Religion from "../wrapper/settings/academicSettings/religion";
// import Storage from "../wrapper/settings/otherSettings/storage";
// import BanIpAddress from "../wrapper/settings/otherSettings/banIpaddress";
// import AllBlogs from "../content/blog/allBlogs";
// import BlogCategories from "../content/blog/blogCategories";
// import BlogComments from "../content/blog/blogComments";
// import BlogTags from "../content/blog/blogTags";
// import Faq from "../content/faq";
// import Cities from "../content/location/cities";
// import States from "../content/location/states";
// import Testimonials from "../content/testimonials";
// import AccountsIncome from "../accounts/accounts-income";
// import AccountsInvoices from "../accounts/accounts-invoices";
// import AccountsTransactions from "../accounts/accounts-transactions";
// import AddInvoice from "../accounts/add-invoice";
// import EditInvoice from "../accounts/edit-invoice";
// import Expense from "../accounts/expense";
// import ExpensesCategory from "../accounts/expenses-category";
// import Invoice from "../accounts/invoice";
// import NoticeBoard from "../announcements/notice-board";
// import Tickets from "../wrapper/support/tickets";
// import TicketGrid from "../wrapper/support/ticket-grid";
// import TicketDetails from "../wrapper/support/ticket-details";
// import FeesReport from "../dashboard/report/fees-report/feesReport";
// import LeaveReport from "../dashboard/report/leave-report/leaveReport";
// import GradeReport from "../dashboard/report/grade-report/gradeReport";
// import StudentReport from "../dashboard/report/student-report/studentReport";
// import ClassReport from "../dashboard/report/class-report/classReport";
// import AttendanceReport from "../dashboard/report/attendance-report/attendanceReport";
// import ContactMessages from "../wrapper/support/contactMessages";
// import Events from "../announcements/events";
// import Profile from "../pages/profile";
// import StudentAttendanceType from "../dashboard/report/attendance-report/studentAttendanceType";
// import StaffReport from "../dashboard/report/attendance-report/staffReport";
// import TeacherReport from "../dashboard/report/attendance-report/teacherReport";
// import StaffDayWise from "../dashboard/report/attendance-report/staffDayWise";
// import TeacherDayWise from "../dashboard/report/attendance-report/teacherDayWise";
// import StudentDayWise from "../dashboard/report/attendance-report/studentDayWise";
// import DailyAttendance from "../dashboard/report/attendance-report/dailyAttendance";
// import EmailVerification2 from "../auth/emailVerification/emailVerification-2";
// import EmailVerification3 from "../auth/emailVerification/emailVerification-3";
// import NotificationActivities from "../pages/profile/activities";

// import Videocall from "../apps/application/call/videoCall";
// import SuperAdminDashboard from "../dashboard/superadmindashboard";
// import RegisterSchool from "../dashboard/adminDashboard/peoples/super-admin/registerSchools";
// import GetSchools from "../dashboard/adminDashboard/peoples/super-admin/getSchools";

const routes = all_routes;

export const publicRoutes = [
  // {
  //   path: "/",
  //   name: "Root",
  //   element: <Navigate to="/login" />,
  //   route: Route,
  // },



  // Super Admin Module

  {
    path: routes.addSchools,
    element: <RegisterSchool />,
    route: Route

  },
  {
    path: routes.getSchools,
    element: <GetSchools />,
    route: Route
  },
  {
    path: routes.featuresRequestList,
    element: <SuperAdminFetauresRequestListPage />,
    route: Route,
  },


  {
    path: routes.adminDashboard,
    element: <AdminDashboard />,
    route: Route,
  },
  {
    path: routes.requestFeatures,
    element: <AdminRequestFetauresPage />,
    route: Route,
  },
  {
    path: routes.teacherDashboard,
    element: <TeacherDashboard />,
    route: Route,
  },
  {
    path: routes.superAdminDashboard,
    element: < SuperAdminDashboard />,
    route: Route,
  },
  {
    path: routes.studentDashboard,
    element: <StudentDasboard />,
    route: Route,
  },
  {
    path: routes.parentDashboard,
    element: <ParentDashboard />,
    route: Route,
  },
  {
    path: routes.audioCall,
    element: <AudioCall />,
    route: Route,
  },
  {
    path: routes.callHistory,
    element: <CallHistory />,
    route: Route,
  },
  {
    path: routes.callHistory,
    element: <CallHistory />,
    route: Route,
  },

  {
    path: routes.connectedApps,
    element: <ConnectedApps />,
    route: Route,
  },
  {
    path: routes.countries,
    element: <Countries />,
    route: Route,
  },
  {
    path: routes.blankPage,
    element: <BlankPage />,
    route: Route,
  },
  {
    path: routes.calendar,
    element: <Calendar />,
    route: Route,
  },

  {
    path: routes.membershipplan,
    element: <Membershipplan />,
  },
  {
    path: routes.membershipAddon,
    element: <MembershipAddon />,
  },
  {
    path: routes.membershipTransaction,
    element: <MembershipTransaction />,
  },
  {
    path: routes.notes,
    element: <Notes />,
  },
  {
    path: routes.countries,
    element: <Countries />,
    route: Route,
  },
  {
    path: routes.customFields,
    element: <CustomFields />,
    route: Route,
  },
  {
    path: routes.dataTables,
    element: <DataTable />,
    route: Route,
  },
  {
    path: routes.tablesBasic,
    element: <BasicTable />,
    route: Route,
  },

  {
    path: routes.deleteRequest,
    element: <DeleteRequest />,
    route: Route,
  },
  {
    path: routes.cities,
    element: <Cities />,
    route: Route,
  },

  {
    path: routes.accordion,
    element: <Accordion />,
    route: Route,
  },
  {
    path: routes.avatar,
    element: <Avatar />,
    route: Route,
  },
  {
    path: routes.badges,
    element: <Badges />,
    route: Route,
  },
  {
    path: routes.border,
    element: <Borders />,
    route: Route,
  },
  {
    path: routes.breadcrums,
    element: <Breadcrumb />,
    route: Route,
  },
  {
    path: routes.button,
    element: <Buttons />,
    route: Route,
  },
  {
    path: routes.buttonGroup,
    element: <ButtonsGroup />,
    route: Route,
  },
  {
    path: routes.cards,
    element: <Cards />,
    route: Route,
  },
  {
    path: routes.carousel,
    element: <Carousel />,
    route: Route,
  },
  {
    path: routes.colors,
    element: <Colors />,
    route: Route,
  },
  {
    path: routes.dropdowns,
    element: <Dropdowns />,
    route: Route,
  },
  {
    path: routes.grid,
    element: <Grid />,
    route: Route,
  },
  {
    path: routes.images,
    element: <Images />,
    route: Route,
  },
  {
    path: routes.lightbox,
    element: <Lightboxes />,
    route: Route,
  },
  {
    path: routes.media,
    element: <Media />,
    route: Route,
  },
  {
    path: routes.modals,
    element: <Modals />,
    route: Route,
  },
  {
    path: routes.navTabs,
    element: <NavTabs />,
    route: Route,
  },
  {
    path: routes.offcanvas,
    element: <Offcanvas />,
    route: Route,
  },
  {
    path: routes.pagination,
    element: <Pagination />,
    route: Route,
  },
  {
    path: routes.popover,
    element: <Popovers />,
    route: Route,
  },
  {
    path: routes.rangeSlider,
    element: <RangeSlides />,
    route: Route,
  },
  {
    path: routes.progress,
    element: <Progress />,
    route: Route,
  },
  {
    path: routes.spinner,
    element: <Spinner />,
    route: Route,
  },

  {
    path: routes.typography,
    element: <Typography />,
    route: Route,
  },
  {
    path: routes.video,
    element: <Video />,
    route: Route,
  },
  {
    path: routes.toasts,
    element: <Toasts />,
    route: Route,
  },
  {
    path: routes.banIpAddress,
    element: <BanIpAddress />,
    route: Route,
  },
  // {
  //   path: routes.localization,
  //   element: <Localization />,
  //   route: Route,
  // },
  {
    path: routes.preference,
    element: <Preference />,
    route: Route,
  },
  {
    path: routes.todo,
    element: <Todo />,
    route: Route,
  },
  {
    path: routes.email,
    element: <Email />,
    route: Route,
  },
  {
    path: routes.videoCall,
    element: <Videocall />,
    route: Route,
  },
  {
    path: routes.chat,
    element: <Chat />,
    route: Route,
  },
  {
    path: routes.pages,
    element: <Pages />,
    route: Route,
  },

  {
    path: routes.fileManager,
    element: <FileManager />,
    route: Route,
  },
  {
    path: routes.faq,
    element: <Faq />,
    route: Route,
  },

  {
    path: routes.states,
    element: <States />,
    route: Route,
  },
  {
    path: routes.testimonials,
    element: <Testimonials />,
    route: Route,
  },
  {
    path: routes.clipboard,
    element: <ClipBoard />,
    route: Route,
  },
  {
    path: routes.counter,
    element: <Counter />,
    route: Route,
  },
  {
    path: routes.dragandDrop,
    element: <DragAndDrop />,
    route: Route,
  },
  {
    path: routes.rating,
    element: <Rating />,
    route: Route,
  },
  {
    path: routes.stickyNotes,
    element: <Stickynote />,
    route: Route,
  },
  {
    path: routes.textEditor,
    element: <TextEditor />,
    route: Route,
  },
  {
    path: routes.timeLine,
    element: <Timeline />,
    route: Route,
  },
  {
    path: routes.scrollBar,
    element: <Scrollbar />,
    route: Route,
  },
  {
    path: routes.apexChat,
    element: <Apexchart />,
    route: Route,
  },
  {
    path: routes.featherIcons,
    element: <FeatherIcons />,
    route: Route,
  },
  {
    path: routes.falgIcons,
    element: <FeatherIcons />,
    route: Route,
  },
  {
    path: routes.fantawesome,
    element: <FontawesomeIcons />,
    route: Route,
  },
  {
    path: routes.fantawesome,
    element: <FontawesomeIcons />,
    route: Route,
  },
  {
    path: routes.materialIcon,
    element: <MaterialIcons />,
    route: Route,
  },
  {
    path: routes.pe7icon,
    element: <PE7Icons />,
    route: Route,
  },
  {
    path: routes.simpleLineIcon,
    element: <SimplelineIcons />,
    route: Route,
  },
  {
    path: routes.themifyIcon,
    element: <ThemifyIcons />,
    route: Route,
  },
  {
    path: routes.typicon,
    element: <TypiconIcons />,
    route: Route,
  },
  {
    path: routes.basicInput,
    element: <BasicInputs />,
    route: Route,
  },
  {
    path: routes.weatherIcon,
    element: <WeatherIcons />,
    route: Route,
  },
  {
    path: routes.checkboxandRadion,
    element: <CheckboxRadios />,
    route: Route,
  },
  {
    path: routes.inputGroup,
    element: <InputGroup />,
    route: Route,
  },
  {
    path: routes.gridandGutters,
    element: <GridGutters />,
    route: Route,
  },
  {
    path: routes.formSelect,
    element: <FormSelect />,
    route: Route,
  },
  {
    path: routes.formMask,
    element: <FormMask />,
    route: Route,
  },
  {
    path: routes.fileUpload,
    element: <FileUpload />,
    route: Route,
  },
  {
    path: routes.horizontalForm,
    element: <FormHorizontal />,
    route: Route,
  },
  {
    path: routes.verticalForm,
    element: <FormVertical />,
    route: Route,
  },
  {
    path: routes.floatingLable,
    element: <FloatingLabel />,
    route: Route,
  },
  {
    path: routes.formValidation,
    element: <FormValidation />,
    route: Route,
  },
  {
    path: routes.reactSelect,
    element: <FormSelect2 />,
    route: Route,
  },
  {
    path: routes.formWizard,
    element: <FormWizard />,
    route: Route,
  },
  {
    path: routes.dataTable,
    element: <DataTables />,
    route: Route,
  },
  {
    path: routes.tableBasic,
    element: <TablesBasic />,
    route: Route,
  },
  {
    path: routes.iconicIcon,
    element: <IonicIcons />,
    route: Route,
  },
  // {
  //   path: routes.chart,
  //   element: <ChartJs />,
  //   route: Route,
  // },

  {
    path: routes.placeholder,
    element: <Placeholder />,
    route: Route,
  },
  {
    path: routes.sweetalert,
    element: <Alert />,
    route: Route,
  },
  {
    path: routes.alert,
    element: <AlertUi />,
    route: Route,
  },
  {
    path: routes.tooltip,
    element: <Tooltips />,
    route: Route,
  },
  {
    path: routes.ribbon,
    element: <Ribbon />,
    route: Route,
  },


  // Peoples Module
  {
    path: routes.studentGrid,
    element: <StudentGrid />,
  },
  {
    path: routes.studentList,
    element: <StudentList />,
  },
  {
    path: routes.addStudent,
    element: <AddStudent />,
  },
  {
    path: routes.editStudent,
    element: <AddStudent />,
  },
  {
    path: routes.studentLibrary,
    element: <StudentLibrary />,
  },
  {
    path: routes.studentDetail,
    element: <StudentDetails />,
  },
  {
    path: routes.studentFees,
    element: <StudentFees />,
  },
  {
    path: routes.studentLeaves,
    element: <StudentLeaves />,
  },
  {
    path: routes.studentResult,
    element: <StudentResult />,
  },
  {
    path: routes.studentTimeTable,
    element: <StudentTimeTable />,
  },
  {
    path: routes.studentPromotion,
    element: <StudentPromotion />,
  },
  {
    path: routes.AcademicReason,
    element: <AcademicReason />,
  },
  {
    path: routes.classSyllabus,
    element: <ClassSyllabus />,
  },
  {
    path: routes.classSubject,
    element: <ClassSubject />,
  },
  {
    path: routes.classSection,
    element: <ClassSection />,
  },
  {
    path: routes.classRoom,
    element: <ClassRoom />,
  },
  {
    path: routes.classRoutine,
    element: <ClassRoutine />,
  },
  {
    path: routes.sheduleClasses,
    element: <ScheduleClasses />,
  },
  {
    path: routes.exam,
    element: <Exam />,
  },
  {
    path: routes.examSchedule,
    element: <ExamSchedule />,
  },
  {
    path: routes.grade,
    element: <Grade />,
  },
  {
    path: routes.staff,
    element: <Staff />,
  },
  {
    path: routes.departments,
    element: <Departments />,
  },
  {
    path: routes.classes,
    element: <Classes />,
  },
  {
    path: routes.classHomeWork,
    element: <ClassHomeWork />,
  },
  {
    path: routes.examResult,
    element: <ExamResult />,
  },
  {
    path: routes.examAttendance,
    element: <ExamAttendance />,
  },
  {
    path: routes.teacherGrid,
    element: <TeacherGrid />,
  },
  {
    path: routes.teacherList,
    element: <TeacherList />,
  },
  {
    path: routes.addTeacher,
    element: <TeacherForm />,
  },
  {
    path: routes.editTeacher,
    element: <TeacherForm />,
  },
  {
    path: routes.teacherDetails,
    element: <TeacherDetails />,
  },
  {
    path: routes.teachersRoutine,
    element: <TeachersRoutine />,
  },
  {
    path: routes.teacherSalary,
    element: <TeacherSalary />,
  },
  {
    path: routes.teacherLeaves,
    element: <TeacherLeave />,
  },
  {
    path: routes.teacherLibrary,
    element: <TeacherLibrary />,
  },
  {
    path: routes.parentGrid,
    element: <ParentGrid />,
  },
  {
    path: routes.parentList,
    element: <ParentList />,
  },
  {
    path: routes.classTimetable,
    element: <ClassTimetable />,
  },
  {
    path: routes.payroll,
    element: <Payroll />,
  },
  {
    path: routes.holidays,
    element: <Holiday />,
  },
  {
    path: routes.designation,
    element: <Designation />,
  },
  {
    path: routes.listLeaves,
    element: <ListLeaves />,
  },
  {
    path: routes.staffDetails,
    element: <StaffDetails />,
  },
  {
    path: routes.staffPayroll,
    element: <StaffPayRoll />,
  },
  {
    path: routes.staffLeave,
    element: <StaffLeave />,
  },

  {
    path: routes.layoutDefault,
    element: <AdminDashboard />,
  },
  {
    path: routes.layoutMini,
    element: <AdminDashboard />,
  },
  {
    path: routes.layoutRtl,
    element: <AdminDashboard />,
  },
  {
    path: routes.layoutBox,
    element: <AdminDashboard />,
  },
  {
    path: routes.layoutDark,
    element: <AdminDashboard />,
  },
  {
    path: routes.guardiansGrid,
    element: <GuardianGrid />,
  },
  {
    path: routes.guardiansList,
    element: <GuardianList />,
  },
  {
    path: routes.feesGroup,
    element: <FeesGroup />,
  },
  {
    path: routes.feesType,
    element: <FeesTypes />,
  },
  {
    path: routes.feesMaster,
    element: <FeesMaster />,
  },
  {
    path: routes.feesAssign,
    element: <FeesAssign />,
  },
  {
    path: routes.collectFees,
    element: <CollectFees />,
  },
  {
    path: routes.libraryMembers,
    element: <LibraryMember />,
  },
  {
    path: routes.libraryBooks,
    element: <Books />,
  },
  {
    path: routes.libraryIssueBook,
    element: <IssueBook />,
  },
  {
    path: routes.libraryReturn,
    element: <ReturnBook />,
  },
  {
    path: routes.sportsList,
    element: <SportsList />,
  },
  {
    path: routes.playerList,
    element: <PlayersList />,
  },
  {
    path: routes.hostelRoom,
    element: <HostelRooms />,
  },
  {
    path: routes.hostelType,
    element: <HostelType />,
  },
  {
    path: routes.hostelList,
    element: <HostelList />,
  },
  {
    path: routes.transportRoutes,
    element: <TransportRoutes />,
  },
  {
    path: routes.transportAssignVehicle,
    element: <TransportAssignVehicle />,
  },
  {
    path: routes.transportPickupPoints,
    element: <TransportPickupPoints />,
  },
  {
    path: routes.transportVehicleDrivers,
    element: <TransportVehicleDrivers />,
  },
  {
    path: routes.transportVehicle,
    element: <TransportVehicle />,
  },
  {
    path: routes.approveRequest,
    element: <ApproveRequest />,
  },
  {
    path: routes.studentAttendance,
    element: <StudentAttendance />,
  },
  {
    path: routes.teacherAttendance,
    element: <TeacherAttendance />,
  },

  {
    path: routes.staffAttendance,
    element: <StaffAttendance />,
  },
  {
    path: routes.staffsAttendance,
    element: <StaffsAttendance />,
  },
  {
    path: routes.addStaff,
    element: <AddStaff />,
  },
  {
    path: routes.editStaff,
    element: <EditStaff />,
  },

  {
    path: routes.accountsIncome,
    element: <AccountsIncome />,
  },
  {
    path: routes.accountsInvoices,
    element: <AccountsInvoices />,
  },
  {
    path: routes.accountsTransactions,
    element: <AccountsTransactions />,
  },
  {
    path: routes.addInvoice,
    element: <AddInvoice />,
  },
  {
    path: routes.editInvoice,
    element: <EditInvoice />,
  },
  {
    path: routes.guardiansList,
    element: <GuardianList />,
  },
  {
    path: routes.expense,
    element: <Expense />,
  },
  {
    path: routes.expenseCategory,
    element: <ExpensesCategory />,
  },
  {
    path: routes.invoice,
    element: <Invoice />,
  },
  {
    path: routes.events,
    element: <Events />,
  },
  {
    path: routes.noticeBoard,
    element: <NoticeBoard />,
  },

  //Settings

  {
    path: routes.profilesettings,
    element: <Profilesettings />,
  },
  {
    path: routes.securitysettings,
    element: <Securitysettings />,
  },
  {
    path: routes.notificationssettings,
    element: <Notificationssettings />,
  },
  {
    path: routes.connectedApps,
    element: <ConnectedApps />,
  },
  {
    path: routes.companySettings,
    element: <CompanySettings />,
  },
  {
    path: routes.localization,
    element: <Localization />,
  },
  {
    path: routes.prefixes,
    element: <Prefixes />,
  },
  {
    path: routes.socialAuthentication,
    element: <Socialauthentication />,
  },
  {
    path: routes.language,
    element: <Languagesettings />,
  },
  {
    path: routes.invoiceSettings,
    element: <InvoiceSettings />,
  },
  {
    path: routes.customFields,
    element: <CustomFields />,
  },
  {
    path: routes.emailSettings,
    element: <EmailSettings />,
  },
  {
    path: routes.emailTemplates,
    element: <Emailtemplates />,
  },
  {
    path: routes.smsSettings,
    element: <SmsSettings />,
  },
  {
    path: routes.optSettings,
    element: <OtpSettings />,
  },
  {
    path: routes.gdprCookies,
    element: <GdprCookies />,
  },

  {
    path: routes.paymentGateways,
    element: <PaymentGateways />,
  },
  {
    path: routes.taxRates,
    element: <TaxRates />,
  },
  {
    path: routes.schoolSettings,
    element: <SchoolSettings />,
  },
  {
    path: routes.religion,
    element: <Religion />,
  },
  {
    path: routes.storage,
    element: <Storage />,
  },
  {
    path: routes.rolesPermissions,
    element: <RolesPermissions />,
  },
  {
    path: routes.permissions,
    element: <Permission />,
  },
  {
    path: routes.manageusers,
    element: <Manageusers />,
  },
  {
    path: routes.allBlogs,
    element: <AllBlogs />,
  },
  {
    path: routes.blogCategories,
    element: <BlogCategories />,
  },
  {
    path: routes.blogComments,
    element: <BlogComments />,
  },
  {
    path: routes.blogTags,
    element: <BlogTags />,
  },
  {
    path: routes.tickets,
    element: <Tickets />,
  },
  {
    path: routes.ticketGrid,
    element: <TicketGrid />,
  },
  {
    path: routes.ticketDetails,
    element: <TicketDetails />,
  },
  {
    path: routes.feesReport,
    element: <FeesReport />,
  },
  {
    path: routes.leaveReport,
    element: <LeaveReport />,
  },
  {
    path: routes.gradeReport,
    element: <GradeReport />,
  },
  {
    path: routes.studentReport,
    element: <StudentReport />,
  },
  {
    path: routes.classReport,
    element: <ClassReport />,
  },
  {
    path: routes.attendanceReport,
    element: <AttendanceReport />,
  },
  {
    path: routes.studentAttendanceType,
    element: <StudentAttendanceType />,
  },
  {
    path: routes.dailyAttendance,
    element: <DailyAttendance />,
  },
  {
    path: routes.studentDayWise,
    element: <StudentDayWise />,
  },
  {
    path: routes.teacherDayWise,
    element: <TeacherDayWise />,
  },
  {
    path: routes.staffDayWise,
    element: <StaffDayWise />,
  },
  {
    path: routes.teacherReport,
    element: <TeacherReport />,
  },
  {
    path: routes.staffReport,
    element: <StaffReport />,
  },
  {
    path: routes.contactMessages,
    element: <ContactMessages />,
  },
  {
    path: routes.events,
    element: <Events />,
  },
  {
    path: routes.profile,
    element: <Profile />,
  },
  {
    path: routes.activity,
    element: <NotificationActivities />,
  },
];

export const authRoutes = [
  {
    path: routes.comingSoon,
    element: <ComingSoon />,
    route: Route,
  },
  {
    path: routes.login,
    element: <Login />,
    route: Route,
  },




  {
    path: routes.emailVerification,
    element: <EmailVerification />,
    route: Route,
  },


  {
    path: routes.resetPassword,
    element: <ResetPassword />,
    route: Route,
  },

  {
    path: routes.forgotPassword,
    element: <ForgotPassword />,
    route: Route,
  },

  {
    path: routes.error404,
    element: <Error404 />,
    route: Route,
  },
  {
    path: routes.error500,
    element: <Error500 />,
    route: Route,
  },
  {
    path: routes.underMaintenance,
    element: <UnderMaintenance />,
    route: Route,
  },

  {
    path: routes.resetPasswordSuccess,
    element: <ResetPasswordSuccess />,
  },

];
