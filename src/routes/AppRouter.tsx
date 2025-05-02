import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import UserLayout from "../components/layout/UserLayout";
import Dashboard from "../pages/user/Dashboard";
import AddBooking from "../pages/user/AddBooking";
import ManageBookings from "../pages/user/ManageBookings";
import AuthRoute from "./PublicRoute";

const publicRoutes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
];

const userRoutes = [
  { path: "dashboard", element: <Dashboard /> },
  { path: "add-booking", element: <AddBooking /> },
  { path: "manage-bookings", element: <ManageBookings /> },
];

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<AuthRoute>{element}</AuthRoute>}
        />
      ))}

      <Route path="/user" element={<UserLayout />}>
        {userRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<AuthRoute>{element}</AuthRoute>}
          />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;
