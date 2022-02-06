import React from "react";
import { Link, Outlet } from "react-router-dom";

const LoginScreen = () => {
  return (
    <>
      <div>LoginScreen</div>
      <Link to={"DetailedApp"}>DetailedApp</Link>
      <Outlet />
    </>
  );
};

export default LoginScreen;
