import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import UserLayout from "../components/layout/UserLayout";
import Dashboard from "../pages/user/Dashboard";
import AddBooking from "../pages/user/AddBooking";
import ManageBookings from "../pages/user/ManageBookings";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <Home />
          </PublicRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <SignupPage />
          </PublicRoute>
        }
      />

      <Route path="/user" element={<UserLayout />}>
        <Route
          path="dashboard"
          element={
            <PublicRoute>
              <Dashboard />
            </PublicRoute>
          }
        />
        <Route
          path="add-booking"
          element={
            <PublicRoute>
              <AddBooking />
            </PublicRoute>
          }
        />
        <Route
          path="manage-bookings"
          element={
            <PublicRoute>
              <ManageBookings />
            </PublicRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
