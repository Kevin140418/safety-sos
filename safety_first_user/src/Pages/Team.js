import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Team() {
  return (
    <>
      <Header />
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5">
        <div className="container text-center py-5">
          <h1 className="display-2 text-white mb-4 animated slideInDown">
            Our Team
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link to="/Home" style={{ textDecoration: "none" }}>
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/Complaint" style={{ textDecoration: "none" }}>
                  Contact Us
                </Link>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                Our Team
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}
      {/* Fact Start */}
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
      <div className="container-fluid py-5 mb-5 team">
        <div className="container">
          <div
            className="text-center mx-auto pb-5 wow fadeIn"
            data-wow-delay=".3s"
            style={{ maxWidth: 600 }}
          >
            <h5 className="text-primary">Our Team</h5>
            <h1>Meet our expert Team</h1>
          </div>
          <div className="row justify-content-center">
            {/* Team Member 1 */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card text-center border-0 shadow-lg"
              style={{ width: "18rem", height: "32rem" }}>
                <img
                  src="img/kevin propic.png"
                  className="card-img-top rounded-circle p-3"
                  alt="Kevin Vaghasiya"
                />
                <div className="card-body">
                  <h4 className="card-title">Kevin Vaghasiya</h4>
                  <p className="card-text">CEO</p>
                  <div className="d-flex justify-content-center">
                    <a
                      className="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="/#"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="/#"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="/#"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      className="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="/#"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card text-center border-0 shadow-lg"
              style={{ width: "18rem", height: "32rem" }}
              >
                <img
                  src="img/viplav propic.png"
                  className="card-img-top rounded-circle p-3"
                  alt="Viplav Sangani"
                />
                <div className="card-body">
                  <h4 className="card-title">Viplav Sangani</h4>
                  <p className="card-text">Manager</p>
                  <div className="d-flex justify-content-center">
                    <a
                      className="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="/#"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="/#"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="/#"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      className="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="/#"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div
                className="card text-center border-0 shadow-lg"
                style={{ width: "18rem", height: "32rem" }}
              >
                <img
                  src="img/dharmik propic.png"
                  className="card-img-top rounded-circle p-3"
                  alt="Dharmik Sinojiya"
                />&nbsp;
                <div className="card-body">
                  <h4 className="card-title">Dharmik Sinojiya</h4>
                  <p className="card-text">Founder</p>
                  <div className="d-flex justify-content-center">
                    <a
                      className="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="/#"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="/#"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="/#"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      className="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="/#"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Team;
