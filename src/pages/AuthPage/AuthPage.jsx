import React from "react";
import BG from "../../components/bg/BG";
import { Outlet } from "react-router-dom";
import Notification from "../../components/notification/Notification";

const AuthPage = () => {
  return (
    <BG>
      <div style={{ opacity: 0.8 }}>
        <Notification />
      </div>
      <Outlet />
    </BG>
  );
};

export default AuthPage;
