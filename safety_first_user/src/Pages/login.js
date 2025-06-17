import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./login.css"; // Make sure to import the correct CSS file

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    role: "0", // Default role (can be managed based on your requirements)
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send login request to the server
      const response = await axios.post("https://safety-sos-1.onrender.com/login", data);
      if (response.status === 200) {
        toast.success("Login successful", {
          autoClose: 1000,
          onClose: () => navigate("/home"), // Redirect to /home on success
        });
      }
    } catch (error) {
      console.error(
        "Login error:",
        error.response ? error.response.data : error.message
      );
      toast.error("Login unsuccessful", { autoClose: 1500 });
    }
  };

  // Adding background image class to body on component mount
  useEffect(() => {
    document.body.classList.add("image-background");
    return () => {
      document.body.classList.remove("image-background");
    };
  }, []);

  return (
    <div className="login-page">
      {/* Apply background to login-page */}
      <div className="login-form">
        <h1 className="login-title ">Login to SAFETY FIRST</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <i className="fa-solid fa-user" style={{ color: "#000000" }} />
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="input-box">
            <i className="fa-solid fa-lock" style={{ color: "#000000" }} />
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <button className="login-btn">Login</button>
          <p className="link my-4">
            Don't have an account? <Link to="/signup">Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
