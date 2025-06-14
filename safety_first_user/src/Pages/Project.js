import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

function Project() {
  return (
    <>
      <Header />
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5">
        <div className="container text-center py-5">
          <h1 className="display-2 text-white mb-4 animated slideInDown">Projects</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><Link to="/Home">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/#">Pages</Link></li>
              <li className="breadcrumb-item" aria-current="page">Projects</li>
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
                <h5 className="text-white mt-1">Success in getting happy customer</h5>
              </div>
            </div>
            <div className="col-lg-3 wow fadeIn" data-wow-delay=".3s">
              <div className="d-flex counter">
                <h1 className="me-3 text-primary counter-value">25</h1>
                <h5 className="text-white mt-1">Thousands of successful business</h5>
              </div>
            </div>
            <div className="col-lg-3 wow fadeIn" data-wow-delay=".5s">
              <div className="d-flex counter">
                <h1 className="me-3 text-primary counter-value">120</h1>
                <h5 className="text-white mt-1">Total clients who love HighTech</h5>
              </div>
            </div>
            <div className="col-lg-3 wow fadeIn" data-wow-delay=".7s">
              <div className="d-flex counter">
                <h1 className="me-3 text-primary counter-value">5</h1>
                <h5 className="text-white mt-1">Stars reviews given by satisfied clients</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fact End */}
      {/* Project Start */}
      <div className="container-fluid project py-5 my-5">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: 600 }}>
            <h5 className="text-primary">Our Project</h5>
            <h1>Our Recently Completed Projects</h1>
          </div>
          <div className="row g-5">
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
              <div className="project-item">
                <div className="project-img">
                  <img src="img/project-1.jpg" className="img-fluid w-100 rounded" alt='' />
                  <div className="project-content">
                    <Link to="/#" className="text-center">
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
                  <img src="img/project-2.jpg" className="img-fluid w-100 rounded" alt='' />
                  <div className="project-content">
                    <Link to="/#" className="text-center">
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
                  <img src="img/project-3.jpg" className="img-fluid w-100 rounded" alt='' />
                  <div className="project-content">
                    <Link to="/" className="text-center">
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
                  <img src="img/project-4.jpg" className="img-fluid w-100 rounded" alt='' />
                  <div className="project-content">
                    <Link to="/#" className="text-center">
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
                  <img src="img/project-5.jpg" className="img-fluid w-100 rounded" alt='' />
                  <div className="project-content">
                    <Link to="/#" className="text-center">
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
                  <img src="img/project-6.jpg" className="img-fluid w-100 rounded" alt='' />
                  <div className="project-content">
                    <Link to="/#" className="text-center">
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
  )
}

export default Project;