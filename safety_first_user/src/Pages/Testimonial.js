import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Testimonial() {
  return (
    <>
      <Header />
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5">
        <div className="container text-center py-5">
          <h1 className="display-2 text-white mb-4 animated slideInDown">
            Testimonial
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link to="/Home" style={{ textDecoration: 'none' }}>Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/Complaint" style={{ textDecoration: 'none' }}>Contact Us</Link>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                Testimonial
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
      {/* Fact End */}
      {/* Testimonial Start */}
      <div className="container-fluid testimonial py-5 my-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeIn"
            data-wow-delay=".3s"
            style={{ maxWidth: 600 }}
          >
            <h5 className="text-primary">Our Testimonial</h5>
            <h1>Our Client Saying!</h1>
          </div>
          <div
            className="owl-carousel testimonial-carousel wow fadeIn"
            data-wow-delay=".5s"
          >
            <div className="testimonial-item border p-4">
              <div className="d-flex align-items-center">
                <div className>
                  <img src="img/testimonial-1.jpg" alt='' />
                </div>
                <div className="ms-4">
                  <h4 className="text-secondary">Client Name</h4>
                  <p className="m-0 pb-3">Profession</p>
                  <div className="d-flex pe-5">
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                  </div>
                </div>
              </div>
              <div className="border-top mt-4 pt-3">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut
                  interdum aliquam dolor eget urna. Nam volutpat libero sit amet
                  leo cursus, ac viverra eros morbi quis quam mi.
                </p>
              </div>
            </div>
            <div className="testimonial-item border p-4">
              <div className=" d-flex align-items-center">
                <div className>
                  <img src="img/testimonial-2.jpg" alt='' />
                </div>
                <div className="ms-4">
                  <h4 className="text-secondary">Client Name</h4>
                  <p className="m-0 pb-3">Profession</p>
                  <div className="d-flex pe-5">
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                  </div>
                </div>
              </div>
              <div className="border-top mt-4 pt-3">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut
                  interdum aliquam dolor eget urna. Nam volutpat libero sit amet
                  leo cursus, ac viverra eros morbi quis quam mi.
                </p>
              </div>
            </div>
            <div className="testimonial-item border p-4">
              <div className=" d-flex align-items-center">
                <div className>
                  <img src="img/testimonial-3.jpg" alt='' />
                </div>
                <div className="ms-4">
                  <h4 className="text-secondary">Client Name</h4>
                  <p className="m-0 pb-3">Profession</p>
                  <div className="d-flex pe-5">
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                  </div>
                </div>
              </div>
              <div className="border-top mt-4 pt-3">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut
                  interdum aliquam dolor eget urna. Nam volutpat libero sit amet
                  leo cursus, ac viverra eros morbi quis quam mi.
                </p>
              </div>
            </div>
            <div className="testimonial-item border p-4">
              <div className=" d-flex align-items-center">
                <div className>
                  <img src="img/testimonial-4.jpg" alt='' />
                </div>
                <div className="ms-4">
                  <h4 className="text-secondary">Client Name</h4>
                  <p className="m-0 pb-3">Profession</p>
                  <div className="d-flex pe-5">
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                  </div>
                </div>
              </div>
              <div className="border-top mt-4 pt-3">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut
                  interdum aliquam dolor eget urna. Nam volutpat libero sit amet
                  leo cursus, ac viverra eros morbi quis quam mi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Testimonial;
