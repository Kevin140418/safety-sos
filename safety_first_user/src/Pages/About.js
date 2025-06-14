import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <Header />
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5">
        <div className="container text-center py-5">
          <h1 className="display-2 text-white mb-4 animated slideInDown">
            About Us
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link to="/Home" style={{ textDecoration: "none" }}>
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                About
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container-fluid bg-secondary py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 wow fadeIn" data-wow-delay=".1s">
              <div className="d-flex counter">
                <h1 className="me-3 text-primary counter-value">99</h1>
                <h5 className="text-white mt-1">
                  Success in getting happy customer
                </h5>
              </div>
            </div>
            <div className="col-lg-3 wow fadeIn" data-wow-delay=".3s">
              <div className="d-flex counter">
                <h1 className="me-3 text-primary counter-value">25</h1>
                <h5 className="text-white mt-1">
                  Thousands of successful business
                </h5>
              </div>
            </div>
            <div className="col-lg-3 wow fadeIn" data-wow-delay=".5s">
              <div className="d-flex counter">
                <h1 className="me-3 text-primary counter-value">120</h1>
                <h5 className="text-white mt-1">
                  Total clients who love HighTech
                </h5>
              </div>
            </div>
            <div className="col-lg-3 wow fadeIn" data-wow-delay=".7s">
              <div className="d-flex counter">
                <h1 className="me-3 text-primary counter-value">5</h1>
                <h5 className="text-white mt-1">
                  Stars reviews given by satisfied clients
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5 my-5">
        <div className="container py-5">
          <div className="row g-5">
            <div
              className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
              data-wow-delay=".3s"
            >
              <div className="h-100 position-relative">
                <img
                  src="img/about-1.jpg"
                  className="img-fluid w-75 rounded"
                  alt=""
                  style={{ marginBottom: "25%" }}
                />
                <div
                  className="position-absolute w-75"
                  style={{ top: "25%", left: "25%" }}
                >
                  <img
                    src="img/about-2.jpg"
                    className="img-fluid w-100 rounded"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              className="col-lg-7 col-md-6 col-sm-12 wow fadeIn"
              data-wow-delay=".5s"
            >
              <h5 className="text-primary">About Us</h5>
              <h1 className="mb-4">
                About HighTech Agency And It's Innovative IT Solutions
              </h1>
              <p>
                The <strong>Safety-First SOS System</strong> is an advanced
                IoT-powered emergency response platform designed to enhance
                safety and security during emergency situations. By integrating
                IoT sensors and cloud-based technology, this system enables
                real-time monitoring, instant alerts, and rapid response to
                critical threats such as fire, smoke, and gas leaks.
              </p>
              <p>
                <strong>Key Features:</strong> This system incorporates various
                sensors, including fire, smoke, DHT (temperature & humidity),
                MQ4 (methane & natural gas), and MQ135 (air quality) sensors, to
                detect and monitor environmental conditions. It provides instant
                notifications to authorities and users through a cloud-based IoT
                platform, ensuring quick response and improved safety.
              </p>
              <p>
                <strong>Emergency Alerts:</strong> The system includes emergency
                alert buttons and automatic detection mechanisms to notify
                emergency responders and users in case of critical situations,
                helping prevent disasters and ensuring a proactive safety
                approach.
              </p>
              <p className="mb-4">.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
