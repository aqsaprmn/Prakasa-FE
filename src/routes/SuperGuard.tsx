import { useAuthStore } from "@app/zustand/Auth/auth";
import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

const SuperGuard = () => {
  const auth = useAuthStore((state) => state);

  if (auth.role === "ADMIN") {
    return <Navigate to={auth.initialRoute} />;
  }

  const isLoggedin =
    "token" in Cookies.get() && Cookies.get("token") !== "undefined";
  auth.name.length > 1 && auth.role.length > 1 && auth.initialRoute.length > 1
    ? true
    : false;

  return isLoggedin ? <Outlet /> : <Navigate to={auth.initialRoute} />;
};

export default SuperGuard;
