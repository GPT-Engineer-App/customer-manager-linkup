import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SignUp from "./pages/SignUp.jsx";
import CustomerHome from "./pages/CustomerHome.jsx";
import CleanerProfile from "./pages/CleanerProfile.jsx";
import MovingCleaningReservation from "./pages/MovingCleaningReservation.jsx";
import CommercialCleaningReservation from "./pages/CommercialCleaningReservation.jsx";
import OfficeCleaningReservation from "./pages/OfficeCleaningReservation.jsx";
import SpecialCleaningReservation from "./pages/SpecialCleaningReservation.jsx";
import ApplianceCleaningReservation from "./pages/ApplianceCleaningReservation.jsx";
import Home from "./pages/Home.jsx";
import MyReservations from "./pages/MyReservations.jsx";
import UsageHistory from "./pages/UsageHistory.jsx";
import Chat from "./pages/Chat.jsx";
import Settings from "./pages/Settings.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/customer-home" element={<CustomerHome />} />
        <Route path="/cleaner-profile" element={<CleanerProfile />} />
        <Route path="/moving-cleaning-reservation" element={<MovingCleaningReservation />} />
        <Route path="/commercial-cleaning-reservation" element={<CommercialCleaningReservation />} />
        <Route path="/office-cleaning-reservation" element={<OfficeCleaningReservation />} />
        <Route path="/special-cleaning-reservation" element={<SpecialCleaningReservation />} />
        <Route path="/appliance-cleaning-reservation" element={<ApplianceCleaningReservation />} />
        <Route path="/home" element={<Home />} />
        <Route path="/my-reservations" element={<MyReservations />} />
        <Route path="/usage-history" element={<UsageHistory />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
