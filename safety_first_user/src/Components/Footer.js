import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* Footer Start */}
      <div
        className="container-fluid footer bg-dark wow fadeIn"
        data-wow-delay=".3s"
      >
        <div className="container pt-5 pb-4">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <Link to="/" style={{ textDecoration: "none" }}>
                <h1 className="text-white fw-bold d-block">
                  Safety<span className="text-secondary">First</span>{" "}
                </h1>
              </Link>
              <p className="mt-4 text-light">
                Empowering you with real-time alerts and instant response
                solutions, because your safety is our top priority – anytime,
                anywhere
              </p>
              <div className="d-flex hightech-link">
                <Link
                  to="/#"
                  className="btn-light nav-fill btn btn-square rounded-circle me-2"
                >
                  <i className="fab fa-facebook-f text-primary" />
                </Link>
                <Link
                  to="/#"
                  className="btn-light nav-fill btn btn-square rounded-circle me-2"
                >
                  <i className="fab fa-twitter text-primary" />
                </Link>
                <Link
                  to="/#"
                  className="btn-light nav-fill btn btn-square rounded-circle me-2"
                >
                  <i className="fab fa-instagram text-primary" />
                </Link>
                <Link
                  to="/#"
                  className="btn-light nav-fill btn btn-square rounded-circle me-0"
                >
                  <i className="fab fa-linkedin-in text-primary" />
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <Link
                to="/#"
                className="h3 text-secondary"
                style={{ textDecoration: "none" }}
              >
                Short Link
              </Link>
              <div className="mt-4 d-flex flex-column short-link">
                <Link to="/about" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2" />
                  About us
                </Link>
                <Link to="/team" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2" />
                  Contact us
                </Link>
                <Link to="/projects" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2" />
                  Our Projects
                </Link>
                <Link to="/blog" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2" />
                  Latest Blog
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <Link
                to="/contact"
                className="h3 text-secondary"
                style={{ textDecoration: "none" }}
              >
                Contact Us
              </Link>
              <div className="text-white mt-4 d-flex flex-column contact-link">
                <a
                  href="https://www.google.com/maps?q=Navrangpura,Ahmedabad"
                  className="pb-3 text-light border-bottom border-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-map-marker-alt text-secondary me-2" />{" "}
                  Navrangpura, Ahmedabad
                </a>
                <a
                  href="https://wa.me/919737463550"
                  className="py-3 text-light border-bottom border-primary"
                >
                  <i className="fas fa-phone-alt text-secondary me-2" /> +91
                  9737463550
                </a>
                <a
                  href="mailto:safetyfirstsos1@gmail.com"
                  className="py-3 text-light border-bottom border-primary"
                >
                  <i className="fas fa-envelope text-secondary me-2" />{" "}
                  safetyfirstsos1@gmail.com
                </a>
                {/* WhatsApp link */}
                <a
                  href="https://wa.me/919737463550?text=Hello,%20I%20need%20assistance."
                  className="py-3 text-light border-bottom border-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp text-secondary me-2" /> Chat on
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          <hr className="text-light mt-5 mb-4" />
          {/* Copyright Message */}
          <div className="row">
            <div className="col-12 text-center text-light">
              <p className="mb-0">
                Copyright ©️ 2025,{" "}
                <span className="text-secondary">Safety First SOS Systeam</span>
                . All rights reserved.
              </p>
            </div>
            <div className="row mt-3">
              <div className="col-12 text-center text-light">
                <p className="mb-0">
                  Designed & Developed by{" "}
                  <span className="text-secondary">Safety First SOS Systeam</span>
                  &nbsp;&nbsp; All the assets including images belong to the
                  respective owners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </>
  );
}

export default Footer;
