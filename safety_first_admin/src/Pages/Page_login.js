import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../Pages/admin_login.css";

function Page_login() {
  const [loginData, setLoginData] = useState({ email_id: "", password: "" });
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://safety-sos-1.onrender.com/admin/login",
        loginData
      );
      if (res.data.success) {
        toast.success("Login successful", {
          autoClose: 1500,
          onClose: () => navigate("/"),
        });
      } else {
        toast.error(res.data.message || "Login failed");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  useEffect(() => {
    document.body.classList.add("image-background");
    return () => document.body.classList.remove("image-background");
  }, []);

  return (
    <div className="login-page">
      <div className="login-form">
        <h1 className="login-title">Welcome Back,</h1>
        <form onSubmit={handleLoginSubmit}>
          <div className="input-box">
            <i className="fa-solid fa-user" />
            <input
              type="email"
              name="email_id"
              placeholder="Enter your email"
              onChange={handleChange}
              value={loginData.email_id}
              required
            />
          </div>
          <div className="input-box">
            <i className="fa-solid fa-lock" />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              value={loginData.password}
              required
            />
          </div>
          <button className="login-btn">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Page_login;
