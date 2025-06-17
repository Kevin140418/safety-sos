import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate
import "../Pages/admin_login.css";

function Page_login() {
  const navigate = useNavigate(); // ✅ Hook for redirection

  axios.defaults.withCredentials = true;

  const [loginData, setLoginData] = useState({
    email_id: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://safety-sos-1.onrender.com/admin/login", loginData);

      if (res.status === 200) {
        // ✅ Redirect to admin dashboard or any other route
        navigate("/dashboard"); // 🔁 Change this to your correct route
      }
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
      console.error(error);
    }
  };

  useEffect(() => {
    document.body.classList.add("image-background");
    return () => {
      document.body.classList.remove("image-background");
    };
  }, []);

  return (
    <div className="login-page">
      <div className="login-form">
        <h1 className="login-title">Welcome Back,</h1>
        <form onSubmit={handleLoginSubmit}>
          <div className="input-box">
            <i className="fa-solid fa-user" style={{ color: "#000000" }} />
            <input
              type="email"
              name="email_id"
              className="form-control"
              placeholder="Enter your email"
              onChange={handleChange}
              value={loginData.email_id}
              required
            />
          </div>
          <div className="input-box">
            <i className="fa-solid fa-lock" style={{ color: "#000000" }} />
            <input
              type="password"
              name="password"
              className="form-control"
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