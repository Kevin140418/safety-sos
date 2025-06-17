import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import AlertData from "./AlertData";

function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });
    fetch("https://safety-sos-1.onrender.com/getCounts")
      .then((response) => response.json())
      .then((data) => setCount(data));
  }, []);

  return (
    <div className="dashboard-main-wrapper">
      <Header />


      <div className="dashboard-body">
        <Sidebar />

        <div className="dashboard-wrapper">
          <div className="dashboard-layout">
            <div className="dashboard-ecommerce">
              <div className="container-fluid dashboard-content">
                <div className="ecommerce-widget">
                  <div className="row">
                    {/* Device */}
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="card border-3 border-top border-top-primary">
                        <div className="card-body">
                          <h2 className="text-muted">Device</h2>
                          <h2>{count.totalDevices}</h2>
                          <div className="icon">
                            <i className="fa-solid fa-house-laptop" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Feedback */}
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="card border-3 border-top border-top-primary">
                        <div className="card-body">
                          <h2 className="text-muted">Feedback</h2>
                          <h2>{count.totalFeedback}</h2>
                          <div className="icon">
                            <i className="fa-regular fa-thumbs-up" />
                            &nbsp;
                            <i className="fa-regular fa-thumbs-down" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Warnings */}
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="card border-3 border-top border-top-primary">
                        <div className="card-body">
                          <h2 className="text-muted">Warnings</h2>
                          <h2>{count.totalAlerts}</h2>
                          <div className="icon">
                            <i className="fa-solid fa-triangle-exclamation" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Inquiries */}
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="card border-3 border-top border-top-primary">
                        <div className="card-body">
                          <h2 className="text-muted">Inquiries</h2>
                          <h2>{count.totalInquiry}</h2>
                          <div className="icon">
                            <i className="fa-solid fa-comments" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Alert Component */}
                    <AlertData />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> {/* End dashboard-wrapper */}
      </div> {/* End dashboard-body */}
    </div>
  );
}

export default Home;
