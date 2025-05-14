// src/components/PrivateRoute/PrivateRoute.jsx
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/signIn" replace />;
  }

  return children;
};

export default PrivateRoute;
