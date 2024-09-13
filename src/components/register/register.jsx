import { Link } from "react-router-dom";
import "./register.scss";
import React from "react";
import { Bounce, toast } from "react-toastify";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("注册成功", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };
  return (
    <form onSubmit={handleSubmit} className="register">
      <h1>创建账号</h1>
      <input type="text" placeholder="请输入用户名" />
      <input type="password" placeholder="请输入密码" />
      <input type="password" placeholder="请确认密码" />
      <div className="btn-container">
        <button>注册</button>
        <Link to={"/login"}>已有账号？立即登录</Link>
      </div>
    </form>
  );
};

export default Register;
