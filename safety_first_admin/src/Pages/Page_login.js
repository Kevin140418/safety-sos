import React, { useEffect } from "react";
import axios from "axios";
import "../Pages/admin_login.css"; // Make sure to use the updated CSS

function Page_login() {
  axios.defaults.withCredentials = true;

  const [loginData, setLoginData] = React.useState({
    email_id: "",
    password: "",
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://safety-sos-1.onrender.com/admin/login", loginData);
      window.location.reload(false);
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }
  };

  useEffect(() => {
    // Add the background class to body when component mounts
    document.body.classList.add("image-background");
    return () => {
      // Remove the background class when component unmounts
      document.body.classList.remove("image-background");
    };
  }, []);

  return (
    <div className="login-page">
      <div className="login-form">
        <h1 className="login-title"> Wellcome Back, </h1>
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
