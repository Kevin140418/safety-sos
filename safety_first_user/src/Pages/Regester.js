import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./regester.css"; // Import the correct CSS file

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  // Basic email validation
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const { name, email, phone, password, confirmPassword, address } = data;
    if (!name || !email || !phone || !password || !confirmPassword || !address) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Check if email is valid
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      // Send registration request to the server
      const response = await axios.post("https://safety-sos-1.onrender.com/register", {
        name,
        email,
        phone,
        password,
        address,
      }, {
        headers: {
          "Content-Type": "application/json",  // Ensure the content-type is correct
        },
      });

      if (response.status === 200) {
        toast.success("Registration successful", {
          autoClose: 1000,
          onClose: () => navigate("/login"), // Redirect to login page
        });
      }
    } catch (error) {
      console.error("Registration error:", error.response ? error.response.data : error.message);
      toast.error(error.response ? error.response.data.message : "Registration unsuccessful", { autoClose: 1500 });
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
    <div className="register-page">
      {/* Apply background to register page */}
      <div className="register-form">
        <h1 className="register-title">Create Your Account</h1>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="input-box">
            <i className="fa-solid fa-user" style={{ color: "#000000" }} />
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="input-box">
            <i className="fa-solid fa-envelope" style={{ color: "#000000" }} />
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
            <i className="fa-solid fa-phone" style={{ color: "#000000" }} />
            <input
              type="text"
              name="phone"
              className="form-control"
              id="phone"
              placeholder="Enter your phone number"
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="input-box">
            <i className="fa-solid fa-key" style={{ color: "#000000" }} />
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
          <div className="input-box">
            <i className="fa-solid fa-lock" style={{ color: "#000000" }} />
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm your password"
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="input-box">
            <i className="fa-solid fa-home" style={{ color: "#000000" }} />
            <input
              type="text"
              name="address"
              className="form-control"
              id="address"
              placeholder="Enter your address"
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <button className="register-btn">Register</button>
          <p className="link my-4">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
