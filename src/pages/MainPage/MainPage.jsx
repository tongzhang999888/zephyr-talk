import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import "./mainpage.scss";
import React from "react";

const MainPage = () => {
  return (
    <div className="mainpage">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default MainPage;
