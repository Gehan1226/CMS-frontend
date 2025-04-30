import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import UserLayout from "../components/layout/UserLayout";
import Dashboard from "../pages/user/Dashboard";
import { UserProvider } from "../context/UserContext";
import AddBooking from "../pages/user/AddBooking";
import ManageBookings from "../pages/user/ManageBookings";

const AppRouter = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/user" element={<UserLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-booking" element={<AddBooking />} />
          <Route path="manage-bookings" element={<ManageBookings />} />
        </Route>
      </Routes>
    </UserProvider>
  );
};

export default AppRouter;
