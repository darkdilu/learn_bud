import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Front from "./pages/Authenticate/front/index.jsx";
import Intrest from "./pages/Authenticate/Intrest/index.jsx";
import Confirm from "./pages/Authenticate/Intrest/confirm/index.jsx";
import Job from "./pages/Authenticate/job/index.jsx";
import JobSeeker from "./pages/Authenticate/job/seeker/index.jsx";
import Employe from "./pages/Authenticate/job/Employe/index.jsx";
import Other from "./pages/Authenticate/OtherProfile/index.jsx";
import Payment from "./pages/Authenticate/Payment/index.jsx";
import Payment2 from "./pages/Authenticate/Payment2/index.jsx";
import Profile from "./pages/Authenticate/Profilecreation/index.jsx";
import Registration from "./pages/Authenticate/Registration/index.jsx";
import Login from "./pages/Authenticate/UserLogin/index.jsx";
import SignUp from "./pages/Authenticate/UserSignup/index.jsx";
import Home from './pages/BuddysHome/Home';
import QualificationSorting from './pages/Qualification/QualificationSorting';
import EducationSort from './pages/EducationSort/EducationSort';
import QualificationSortingPage from './pages/SortingPages/QualificationSorting/QualificationSortingPage';
import LocationSortingPage from './pages/SortingPages/LocationSorting/LocationSortingPage';
import DesignationSortingPage from './pages/SortingPages/DesignationSorting/DesignationSortingPage';
import ViewedMyProfile from './pages/SortingPages/ViewMyProfile/ViewedMyProfile';
import Messages from './pages/Message/Messages';
import SentPage from './pages/Sent/SentPage';
import AcceptPage from './pages/Accept/AcceptPage';
import RejectPage from './pages/Reject/RejectPage';
import ReceivedPage from './pages/Recieved/ReceivedPage';
import Filter from './pages/Filter/Filter';
import PartnerPreference from './pages/PartnerPreference/PartnerPreference';
import SubscriptionPlan from './pages/SubscriptionPlan/SubscriptionPlan';
import ViewedMyProfileActivity from './pages/ViewedMyProfileActivity/ViewedMyProfileActivity';
import Contacted from './pages/Contacted/Contacted';
import ShortlistedBy from './pages/ShortlistedBy/ShortlistedBy';
import Shortlist from './pages/Shortlist/Shortlist';
import Settings from './pages/Settings';
import Edit from './pages/Edit';
import Change from './pages/Change';
import NotFoundPage from "./pages/pagenotfound/NotFoundPage.jsx";
import AccessDeniedPage from "./pages/accessDenied/AccessDenied.jsx";
import ChatRoomPage from "./pages/Chatroom/ChatRoomPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<SignUp />} />
        <Route path="/registration/:id" element={<Registration />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment2" element={<Payment2 />} />
        <Route path="/other" element={<Other />} />
        <Route path="/job/employe" element={<Employe />} />
        <Route path="/job/seeker" element={<JobSeeker />} />
        <Route path="/job" element={<Job />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/intrest" element={<Intrest />} />
        <Route path="/buddysHomePage" element={<Home />} />
        <Route path="/QualificationSortedPage" element={<QualificationSorting />} />
        <Route path="/educationSortedPage" element={<EducationSort />} />
        <Route path="/qualificationSorting" element={<QualificationSortingPage />} />
        <Route path="/locationSorting" element={<LocationSortingPage />} />
        <Route path="/designationSorting" element={<DesignationSortingPage />} />
        <Route path="/viewedMyProfileSorting" element={<ViewedMyProfile />} />
        <Route path="/sent" element={<SentPage />} />
        <Route path="/accept" element={<AcceptPage />} />
        <Route path="/reject" element={<RejectPage />} />
        <Route path="/received" element={<ReceivedPage />} />
        <Route path="/message" element={<Messages />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/preference" element={<PartnerPreference />} />
        <Route path="/subscription" element={<SubscriptionPlan />} />
        <Route path='/setting' element={<Settings Se="Settings" />} />
        <Route path='/edit' element={<Edit Se="Edit My Profile" />} />
        <Route path='/change' element={<Change Se="Change Password" />} />
        <Route path="/shortlist" element={<Shortlist />} />
        <Route path="/shortlistedby" element={<ShortlistedBy />} />
        <Route path="/contacted" element={<Contacted />} />
        <Route path="/viewed" element={<ViewedMyProfileActivity />} />
        <Route path="/pageNotFound" element={<NotFoundPage/>}/>
        <Route path="/accessDenied" element={<AccessDeniedPage/>}/>
        <Route path="/chat" element={<ChatRoomPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
