import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SignUp from "./pages/SignUp.jsx";
import CustomerHome from "./pages/CustomerHome.jsx";
import CleanerProfile from "./pages/CleanerProfile.jsx";
import MovingCleaningReservation from "./pages/MovingCleaningReservation.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/customer-home" element={<CustomerHome />} />
        <Route path="/cleaner-profile" element={<CleanerProfile />} />
        <Route path="/moving-cleaning-reservation" element={<MovingCleaningReservation />} />
      </Routes>
    </Router>
  );
}

export default App;
