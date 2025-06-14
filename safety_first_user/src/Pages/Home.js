import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      {/* Carousel Start */}
      <div className="container-fluid px-0">
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-bs-target="#carouselId"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="First slide"
            />
            <li
              data-bs-target="#carouselId"
              data-bs-slide-to={1}
              aria-label="Second slide"
            />
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img
                src="img/carousel-1.jpg"
                className="img-fluid"
                alt="First slide"
              />
              <div className="carousel-caption">
                <div className="container carousel-content">
                  <h6 className="text-secondary h4 animated fadeInUp">
                    Best Safety Devices
                  </h6>
                  <h1 className="text-white display-1 mb-4 animated fadeInRight">
                    Saftey At Your Premise <br />
                    "A Priority For Us"
                  </h1>
                  <br />
                  <p className="mb-4 text-white fs-5 animated fadeInDown" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="img/carousel-2.jpg"
                className="img-fluid"
                alt="Second slide"
              />
              <div className="carousel-caption">
                <div className="container carousel-content">
                  <h6 className="text-white h4 animated fadeInUp">
                    Best Safety Devices
                  </h6>
                  <h1 className="text-white display-1 mb-4 animated fadeInLeft">
                    The Key To Saftey Is In Our Hand
                  </h1>
                  <p className="mb-4 text-white fs-5 animated fadeInDown" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5 my-5">
        <div className="container pt-5">
          <div className="row g-5">
            <div
              className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
              data-wow-delay=".3s"
            >
              <div className="h-100 position-relative">
                <img
                  src="img/sensor.png"
                  className="img-fluid w-75 rounded"
                  alt=""
                  style={{ marginBottom: "25%" }}
                />
                <div
                  className="position-absolute w-75"
                  style={{ top: "25%", left: "25%" }}
                >
                  <img
                    src="img/bus.jpg"
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
              <h1 className="mb-4">About Safety-First SOS System</h1>
              <p>
                The <strong>Safety-First SOS System</strong> is an advanced
                IoT-powered emergency response platform designed to enhance
                safety and security during emergency situations. By integrating
                IoT sensors and cloud-based technology, this system enables
                real-time monitoring, instant alerts, and rapid response to
                critical threats such as fire, smoke, and gas leaks.
              </p>
              <Link
                to={"/about"}
                className="btn btn-secondary rounded-pill px-5 py-3 text-white"
              >
                More Details
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Services Start */}
      <div className="container-fluid services py-5 mb-5">
        <div className="container">
          <div
            className="text-center mx-auto pb-5 wow fadeIn"
            data-wow-delay=".3s"
            style={{ maxWidth: 600 }}
          >
            <h5 className="text-primary">Our Services</h5>
            <h1>Sensors Used In Our Product</h1>
          </div>
          <div className="row g-5 services-inner">
            {/* Flame Sensor */}
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
              <div className="services-item bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon">
                    <i className="fa fa-fire fa-7x mb-4 text-primary" />
                    <h4 className="mb-3">FLAME SENSOR</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* MQ-4 Sensor */}
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
              <div className="services-item bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon">
                    <i className="fa fa-solid fa-wine-bottle fa-7x mb-4 text-primary" />
                    <h4 className="mb-3">MQ4 SENSOR</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* MQ-2 Sensor */}
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
              <div className="services-item bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon">
                    <i className="fa fa-solid fa-smog fa-7x mb-4 text-primary" />
                    <h4 className="mb-3">SMOKE SENSOR</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* MQ-135 Sensor */}
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
              <div className="services-item bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon">
                    <i className="fa fa-solid fa-wine-bottle fa-7x mb-4 text-primary" />
                    <h4 className="mb-3">MQ135 SENSOR</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* DHT Sensor */}
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
              <div className="services-item bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon">
                    <i className="fa-solid fa-temperature-high fa-7x mb-4 text-primary" />
                    <h4 className="mb-3">TEMPERATURE SENSOR</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services End */}
      {/* Our Teams */}
      {/* <div className="container-fluid py-5 mb-5 team">
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
            <div className="col-lg-3 col-md-6 mb-4">
              <div
                className="card text-center border-0 shadow-lg"
                style={{ width: "18rem", height: "32rem" }}
              >
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

            <div className="col-lg-3 col-md-6 mb-4">
              <div
                className="card text-center border-0 shadow-lg"
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

            <div className="col-lg-3 col-md-6 mb-4">
              <div
                className="card text-center border-0 shadow-lg"
                style={{ width: "18rem", height: "32rem" }}
              >
                <img
                  src="img/dharmik propic.png"
                  className="card-img-top rounded-circle p-3"
                  alt="Dharmik Sinojiya"
                />
                &nbsp;
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
      */}
      <div className="container-fluid project py-5 my-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeIn"
            data-wow-delay=".3s"
            style={{ maxWidth: 600 }}
          >
            <h5 className="text-primary">Our Project</h5>
            <h1>Our Recently Completed Projects</h1>
          </div>
          <div className="row g-5">
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
              <div className="project-item">
                <div className="project-img">
                  <img
                    src="img/project-1.jpg"
                    className="img-fluid w-100 rounded"
                    alt=""
                  />
                  <div className="project-content">
                    <Link to="/projects" className="text-center">
                      <h4 className="text-warning">Fire Detection IOT</h4>
                      <p className="m-0 text-white">System</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
              <div className="project-item">
                <div className="project-img">
                  <img
                    src="img/project-2.jpg"
                    className="img-fluid w-100 rounded"
                    alt=""
                  />
                  <div className="project-content">
                    <Link to="/projects" className="text-center">
                      <h4 className="text-warning">Smoke Detcation</h4>
                      <p className="m-0 text-white">System</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
              <div className="project-item">
                <div className="project-img">
                  <img
                    src="img/project-3.jpg"
                    className="img-fluid w-100 rounded"
                    alt=""
                  />
                  <div className="project-content">
                    <Link to="/projects" className="text-center">
                      <h4 className="text-warning">Mobile Info</h4>
                      <p className="m-0 text-white">Upcomming Phone</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
              <div className="project-item">
                <div className="project-img">
                  <img
                    src="img/project-4.jpg"
                    className="img-fluid w-100 rounded"
                    alt=""
                  />
                  <div className="project-content">
                    <Link to="/projects" className="text-center">
                      <h4 className="text-warning">Air Quality Monitoring</h4>
                      <p className="m-0 text-white">System</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
              <div className="project-item">
                <div className="project-img">
                  <img
                    src="img/project-5.jpg"
                    className="img-fluid w-100 rounded"
                    alt=""
                  />
                  <div className="project-content">
                    <Link to="/projects" className="text-center">
                      <h4 className="text-warning">Gas Leakage Detection</h4>
                      <p className="m-0 text-white">System</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
              <div className="project-item">
                <div className="project-img">
                  <img
                    src="img/project-6.jpg"
                    className="img-fluid w-100 rounded"
                    alt=""
                  />
                  <div className="project-content">
                    <Link to="/projects" className="text-center">
                      <h4 className="text-warning">Temperature Monitoring</h4>
                      <p className="m-0 text-white">System</p>
                    </Link>
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

export default Home;
