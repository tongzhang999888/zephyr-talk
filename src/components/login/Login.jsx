import { Link } from "react-router-dom";
import "./login.scss";
import React from "react";
import { Bounce, toast } from "react-toastify";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("登录成功", {
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
    <form onSubmit={handleSubmit} className="login">
      <h1>用户登录</h1>
      <input type="text" placeholder="请输入用户名" />
      <input type="password" placeholder="请输入密码" />
      <div className="btn-container">
        <button>登录</button>
        <Link to={"/register"}>没有账号？立即注册</Link>
      </div>
    </form>
  );
};

export default Login;
