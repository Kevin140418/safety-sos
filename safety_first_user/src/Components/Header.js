import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navigate = useNavigate(); // Add navigate hook for redirection

  const [activeItem, setActiveItem] = useState("Home");
  const [user, setUser] = useState(null); // State for user data

  // Check if user is logged in when the component mounts
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser); // If user data exists in localStorage, set it to the state
    }
  }, []);

  useEffect(() => {
    switch (location.pathname) {
      case "/home":
        setActiveItem("Home");
        break;
      case "/about":
        setActiveItem("About");
        break;
      case "/blog":
        setActiveItem("Blog");
        break;
      case "/team":
        setActiveItem("Team");
        break;
      case "/testimonial":
        setActiveItem("Testimonial");
        break;
      case "/feedback":
        setActiveItem("Feedback");
        break;
      case "/complaint":
        setActiveItem("Complaint");
        break;
      case "/liveData":
        setActiveItem("Live Data");
        break;
      case "/alerts":
        setActiveItem("Alerts");
        break;
      case "/getHistoryData":
        setActiveItem("Sensor History");
        break;

      default:
        setActiveItem("Home");
        break;
    }
  }, [location.pathname]);

  // Handle logout functionality
  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove the user data from localStorage
    setUser(null); // Update the state to indicate the user is logged out
    navigate("/login"); // Redirect to the login page
  };

  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid bg-dark py-2 d-none d-md-flex">
        <div className="container">
          <div className="d-flex justify-content-between topbar">
            <div className="top-info">
              <small className="me-3 text-white-50">
                <Link to="/Home">
                  <i className="fas fa-envelope me-2 " />
                </Link>{" "}
                safetyfirstsos1@gmail.com
              </small>
            </div>
            <div id="note" className=" d-none d-xl-flex">
              <small>Note : We provide you best saftey</small>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <div className="container-fluid bg-primary">
        <div className="container">
          <nav className="navbar navbar-dark navbar-expand-lg py-0">
            <Link to="/Home" className="navbar-brand">
              <h1 className="text-white fw-bold d-block">SAFETY FIRST</h1>
            </Link>
            <button
              type="button"
              className="navbar-toggler me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse bg-transparent"
              id="navbarCollapse"
            >
              <div className="navbar-nav ms-auto mx-xl-auto p-0">
                <Link
                  to="/Home"
                  className={`nav-item nav-link ${
                    activeItem === "Home" ? "active" : ""
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`nav-item nav-link ${
                    activeItem === "About" ? "active" : ""
                  }`}
                >
                  About
                </Link>
                <div className="nav-item dropdown">
                  <Link
                    to="/"
                    className={`nav-link dropdown-toggle ${
                      activeItem === "Live Data" ? "active" : ""
                    }`}
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </Link>
                  <div className="dropdown-menu rounded">
                    <Link
                      to="/liveData"
                      className={`dropdown-item ${
                        activeItem === "Live Data" ? "active" : ""
                      }`}
                    >
                      Live Data
                    </Link>
                    <Link
                      to="/alerts"
                      className={`dropdown-item ${
                        activeItem === "Alerts" ? "active" : ""
                      }`}
                    >
                      Alerts
                    </Link>
                    <Link
                      to="/getHistoryData"
                      className={`dropdown-item ${
                        activeItem === "Sensor History" ? "active" : ""
                      }`}
                    >
                      Sensor History
                    </Link>
                  </div>
                </div>

                <div className="nav-item dropdown">
                  <Link
                    to="/"
                    className={`nav-link dropdown-toggle ${
                      activeItem === "Blog" ||
                      activeItem === "Team" ||
                      activeItem === "Feedback" ||
                      activeItem === "Complaint" ||
                      activeItem === "Testimonial"
                        ? "active"
                        : ""
                    }`}
                    data-bs-toggle="dropdown"
                  >
                    Contact Us
                  </Link>
                  <div className="dropdown-menu rounded">
                    <Link
                      to="/blog"
                      className={`dropdown-item ${
                        activeItem === "Blog" ? "active" : ""
                      }`}
                    >
                      Our Blog
                    </Link>
                    <Link
                      to="/team"
                      className={`dropdown-item ${
                        activeItem === "Team" ? "active" : ""
                      }`}
                    >
                      Our Team
                    </Link>
                    <Link
                      to="/testimonial"
                      className={`dropdown-item ${
                        activeItem === "Testimonial" ? "active" : ""
                      }`}
                    >
                      Testimonial
                    </Link>
                    <Link
                      to="/feedback"
                      className={`dropdown-item ${
                        activeItem === "Feedback" ? "active" : ""
                      }`}
                    >
                      Feedback
                    </Link>
                    <Link
                      to="/complaint"
                      className={`dropdown-item ${
                        activeItem === "Complaint" ? "active" : ""
                      }`}
                    >
                      Inquiry
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-none d-xl-flex flex-shirink-0">
              <div
                id="phone-tada"
                className="d-flex align-items-center justify-content-center me-4"
              >
                <Link className="position-relative animated tada infinite">
                  <i className="fa fa-phone-alt text-white fa-2x" />
                  <div
                    className="position-absolute"
                    style={{ top: "-7px", left: 20 }}
                  >
                    <span>
                      <i className="fa fa-comment-dots " />
                    </span>
                  </div>
                </Link>
              </div>
              <div className="d-flex flex-column pe-4 border-end">
                <span className="text-white-50">Have any questions?</span>
                <span className="">Call: +91 9737463550 </span>
              </div>
            </div>
            {/* User Profile and Logout Button */}
            <div className="d-none d-xl-flex flex-shrink-0">
              {user ? (
                <div className="d-flex flex-column pe-6">
                  {/* <span className="text-white-50">Hello, {user.name}</span> */}
                  <button
                    onClick={handleLogout}
                    className="btn  mt-2"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link to="/login" className="btn btn-primary ms-3">
                  Logout
                </Link>
              )}
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}
    </>
  );
}

export default Header;
