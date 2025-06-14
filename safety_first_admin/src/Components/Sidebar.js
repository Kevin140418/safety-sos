import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
    <div className="sidebar">
      <div className="nav-left-sidebar sidebar-dark">
        <div className="menu-list">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="d-xl-none d-lg-none" to="/">
              Dashboard
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav flex-column">
                <li className="nav-divider">Menu</li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to="/"
                    aria-expanded="false"
                    data-target="#submenu-1"
                    aria-controls="submenu-1"
                  >
                    <i className="fa fa-fw fa-user-circle" />
                    Dashboard
                    <span className="badge badge-success"></span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="#"
                    data-toggle="collapse"
                    aria-expanded="false"
                    data-target="#submenu-2"
                    aria-controls="submenu-2"
                  >
                    <i className="fa fa-fw fa-rocket" />
                    SENSOR CATEGORIES
                  </Link>
                  <div id="submenu-2" className="collapse submenu" style={{}}>
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <Link className="nav-link" to="/temprature.html">
                          Temprature Sensor
                          <span className="badge badge-secondary">New</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        
                        <Link className="nav-link" to="/smoke.html">
                          Smoke Sensor
                        </Link>
                        
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/mq135.html">
                          MQ 135 Sensor
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/mq3.html">
                          MQ4 Sensor
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/fire.html">
                          Fire Sensor
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/users.html">
                    <i className="fas fa-fw fa-chart-pie" />
                    Users
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/deviceLocation.html">
                    <i className="fas fa-fw fa-chart-pie" />
                    Device Location
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/inquiryData.html">
                    <i className="fas fa-fw fa-chart-pie" />
                    Inquiry Data
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/feedbackData.html">
                    <i className="fas fa-fw fa-chart-pie" />
                    Feedback Data
                  </Link>
                </li>

                {/* <li className="nav-item">
                  <Link className="nav-link" to="/alertData.html">
                    <i className="fas fa-fw fa-chart-pie" />
                    Alert Data
                  </Link>
                </li> */}
              </ul>
            </div>
          </nav>
        </div>
      </div>
      </div>
    </>
  );
}

export default Sidebar;
