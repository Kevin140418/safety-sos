import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Pages/admin_login.css";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const logout = async () => {
    try {
      await axios.get("http://localhost:8000/logout");
      window.location.reload(false);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <div className="dashboard-header">
        <nav className="navbar navbar-expand-lg bg-white fixed-top d-flex justify-content-between px-3">
          <Link className="navbar-brand" to="/" style={{ fontWeight: "bold" }}>
            Safety First
          </Link>

          <ul className="navbar-nav ml-auto d-flex align-items-center">
            <li className="nav-item dropdown nav-user position-relative">
              <a
                className="nav-link nav-user-img"
                href="#"
                id="navbarDropdownMenuLink2"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown();
                }}
              >
                <i
                  className="fa-solid fa-user-tie fa-2xl"
                  style={{ color: "#000000" }}
                ></i>
              </a>

              {/* Toggle dropdown visibility */}
              {dropdownOpen && (
                <div
                  className="dropdown-menu nav-user-dropdown show"
                  aria-labelledby="navbarDropdownMenuLink2"
                  style={{
                    position: "absolute",
                    top: "45px",
                    right: "-40px", // half off screen
                    minWidth: "120px",
                    borderRadius: "8px 0 0 8px",
                    backgroundColor: "#fff",
                    border: "1px solid #ccc",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    zIndex: 1000,
                  }}
                >
                  <Link onClick={logout} className="dropdown-item">
                    <i className="fas fa-power-off mr-2" />
                    Logout
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;