import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PrivateRoute = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(null); // спочатку невідомо

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthorized(!!token);
  }, []);

  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }

  return isAuthorized ? children : <Navigate to="/signIn" replace />;
};

export default PrivateRoute;
