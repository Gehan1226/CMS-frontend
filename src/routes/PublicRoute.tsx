import React, { JSX, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";

type AuthRouteProps = {
  children: JSX.Element;
};

const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
  const userContext = useContext(UserContext);
  const location = useLocation();
  const pathname = location.pathname;

  const isUserPath = pathname.startsWith("/user");

  console.log("userContext", userContext);

  if (userContext?.user) {
    if (isUserPath) {
      return children;
    } else {
      return <Navigate to="/user/dashboard" replace />;
    }
  } else if (userContext?.user === null) {
    if (!isUserPath) {
      return children;
    }
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AuthRoute;
