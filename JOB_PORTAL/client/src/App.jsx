import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomeLayout from "./pages/jobseeker/HomeLayout";
import ErrorPage from "./pages/error/ErrorPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import AdminLayout from "./pages/admin/AdminLayout";
import Statistics from "./pages/admin/statistics/Statistics";
import Companies from "./pages/admin/company/Companies";
import Jobs from "./pages/admin/jobs/Jobs";
import Users from "./pages/admin/users/Users";
import Reports from "./pages/admin/reports/Reports";
import Settings from "./pages/admin/settings/Settings";
import SingleCompanyPage from "./pages/admin/company/SingleCompanyPage";
import SingleJobPage from "./pages/admin/jobs/SingleJobPage";
import SingleUserPage from "./pages/admin/users/SingleUserPage";
import PaymentSettings from "./pages/admin/settings/PaymentSettings";
import NotificationSettings from "./pages/admin/settings/NotificationSettings";
import AdvertisementSettings from "./pages/admin/settings/AdvertisementSettings";
import PlanSettings from "./pages/admin/settings/PlanSettings";
import SingleNotification from "./pages/admin/settings/SingleNotification";
import DataCollection from "./pages/dataCollection/DataCollection";
import HomePage from "./pages/jobseeker/home/HomePage";
import JobPage from "./pages/jobseeker/jobs/JobPage";
import CompaniesPage from "./pages/jobseeker/companies/CompaniesPage";
import MobileOtp from "./pages/auth/MobileOtp";
import MobileVerify from "./pages/auth/MobileVerify";
import ResetPassword from "./pages/auth/ResetPassword";
import AuthLayout from "./pages/auth/AuthLayout";
import EmployerHomeLayout from "./pages/employer/EmployerHomeLayout";
import EmployerHomePage from "./pages/employer/home/EmployerHomePage";
import CandidatesPage from "./pages/employer/candidates/CandidatesPage";
import CompanyPage from "./pages/employer/companies/CompanyPage";
import DashboardLayout from "./pages/employer/dashboard/DashboardLayout";
import EmployerDashBoard from "./pages/employer/dashboard/EmployerDashBoard";
import CompanyProfile from "./pages/employer/dashboard/CompanyProfile";
import PostAJob from "./pages/employer/dashboard/PostAJob";
import ManageJobs from "./pages/employer/dashboard/manageJobs/ManageJobs";
import AllApplicants from "./pages/employer/dashboard/AllApplicants";
import Messages from "./pages/employer/dashboard/Messages";
import ShortListedResumes from "./pages/employer/dashboard/ShortListedResumes";
import ChangePassword from "./pages/employer/dashboard/ChangePassword";
import CandidateSinglePage from "./pages/employer/candidates/CandidateSinglePage";
import CompanySinglePage from "./pages/employer/companies/CompanySinglePage";
import SingleJob from "./pages/employer/dashboard/manageJobs/SingleJob";
import EditJob from "./pages/employer/dashboard/manageJobs/EditJob";
import MainHomeLayout from "./pages/home/MainHomeLayout";
import LandingPage from "./pages/home/landing/LandingPage";
import UserData from "./pages/dataCollection/UserData";
import Choose5 from "./pages/dataCollection/Choose5";
import JobPortalType from "./pages/dataCollection/JobPortalType";
import JobSeekerSingleJobPage from "./pages/jobseeker/jobs/JobSeekerSingleJobPage";
import JobSeekerSingleCompany from "./pages/jobseeker/companies/JobSeekerSingleCompany";
import Logout from "./pages/employer/dashboard/Logout";
import DeleteAccount from "./pages/employer/dashboard/DeleteAccount";
import JSDashboardLayout from "./pages/jobseeker/dashBoard/JSDashboardLayout";
import JSDashboard from "./pages/jobseeker/dashBoard/JSDashboard";
import JSMyProfile from "./pages/jobseeker/dashBoard/JSMyProfile";
import JSAppliedJobs from "./pages/jobseeker/dashBoard/JSAppliedJobs";
import JSShortlisted from "./pages/jobseeker/dashBoard/JSShortlisted";
import JSMessage from "./pages/jobseeker/dashBoard/JSMessage";
import JSChangePassword from "./pages/jobseeker/dashBoard/JSChangePassword";
import JSLogout from "./pages/jobseeker/dashBoard/JSLogout";
import JSdeleteAccount from "./pages/jobseeker/dashBoard/JSdeleteAccount";
import SAHomeLayout from "./pages/studyAbroad/SAHomeLayout";
import SAHome from "./pages/studyAbroad/sahome/SAHome";
import SACountry from "./pages/studyAbroad/sacountry/SACountry";
import SACountrySinglePage from "./pages/studyAbroad/sacountry/SACountrySinglePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainHomeLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: "details",
          element: <UserData />,
        },
        {
          path: "choose",
          element: <Choose5 />,
        },
        {
          path: "portal-type",
          element: <JobPortalType />,
        },
      ],
    },
    {
      path: "/jobseeker",
      element: <HomeLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "jobs",
          element: <JobPage />,
        },
        {
          path: "jobs/:id",
          element: <JobSeekerSingleJobPage />,
        },
        {
          path: "companies",
          element: <CompaniesPage />,
        },
        {
          path: "companies/:id",
          element: <JobSeekerSingleCompany />,
        },
        {
          path: "details",
          element: <DataCollection />,
        },
        {
          path: "dashboard",
          element: <JSDashboardLayout />,
          children: [
            {
              index: true,
              element: <JSDashboard />,
            },
            {
              path: "profile",
              element: <JSMyProfile />,
            },
            {
              path: "applied-jobs",
              element: <JSAppliedJobs />,
            },
            {
              path: "shortlisted",
              element: <JSShortlisted />,
            },
            {
              path: "messages",
              element: <JSMessage />,
            },
            {
              path: "change-password",
              element: <JSChangePassword />,
            },
            {
              path: "logout",
              element: <JSLogout />,
            },
            {
              path: "delete-account",
              element: <JSdeleteAccount />,
            },
          ],
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
        {
          path: "send-otp",
          element: <MobileOtp />,
        },
        {
          path: "verify",
          element: <MobileVerify />,
        },

        {
          path: "forgot-password",
          element: <ForgotPasswordPage />,
        },
        {
          path: "reset-password",
          element: <ResetPassword />,
        },
      ],
    },
    {
      path: "/employer",
      element: <EmployerHomeLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <EmployerHomePage />,
        },
        {
          path: "candidates",
          element: <CandidatesPage />,
        },
        {
          path: "candidates/:id",
          element: <CandidateSinglePage />,
        },
        {
          path: "companies",
          element: <CompanyPage />,
        },
        {
          path: "companies/:id",
          element: <CompanySinglePage />,
        },
        {
          path: "dashboard",
          element: <DashboardLayout />,
          children: [
            { index: true, element: <EmployerDashBoard /> },
            {
              path: "company-profile",
              element: <CompanyProfile />,
            },
            {
              path: "post-job",
              element: <PostAJob />,
            },
            {
              path: "manage-jobs",
              element: <ManageJobs />,
            },
            {
              path: "manage-jobs/edit/:id",
              element: <EditJob />,
            },
            {
              path: "manage-jobs/:id",
              element: <SingleJob />,
            },
            {
              path: "applicants",
              element: <AllApplicants />,
            },
            {
              path: "messages",
              element: <Messages />,
            },
            {
              path: "shortlisted",
              element: <ShortListedResumes />,
            },
            {
              path: "change-password",
              element: <ChangePassword />,
            },
            {
              path: "logout",
              element: <Logout />,
            },
            {
              path: "delete-account",
              element: <DeleteAccount />,
            },
          ],
        },
      ],
    },
    {
      path: "/study-abroad",
      element: <SAHomeLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <SAHome /> },
        {
          path: "country",
          element: <SACountry />,
        },
        {
          path: "country/:id",
          element: <SACountrySinglePage />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "statistics",
          element: <Statistics />,
        },
        {
          path: "companies",
          element: <Companies />,
        },
        {
          path: "companies/:id",
          element: <SingleCompanyPage />,
        },
        {
          path: "jobs",
          element: <Jobs />,
        },
        {
          path: "jobs/:id",
          element: <SingleJobPage />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "users/:id",
          element: <SingleUserPage />,
        },
        {
          path: "reports",
          element: <Reports />,
        },
        {
          path: "settings",
          element: <Settings />,
        },

        {
          path: "settings/payment",
          element: <PaymentSettings />,
        },
        {
          path: "settings/notification",
          element: <NotificationSettings />,
        },
        {
          path: "settings/notification/:id",
          element: <SingleNotification />,
        },
        {
          path: "settings/advertisement",
          element: <AdvertisementSettings />,
        },
        {
          path: "settings/plan",
          element: <PlanSettings />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
