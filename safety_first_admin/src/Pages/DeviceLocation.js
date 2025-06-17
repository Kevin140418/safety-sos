import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import React, { useEffect, useState } from "react";
import { CDBDataTable } from "cdbreact";
import { Link } from "react-router-dom";
import '../Pages/admin_login.css';
function DeviceLocation() {
  const [datas, setDatas] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });
    fetch("https://safety-sos-1.onrender.com/getDeviceLocation")
      .then((response) => response.json())
      .then((data) => setDatas(data))
      .then(() => setIsLoaded(true));
  }, []);

  var formattedSensorData = [];
  if (datas.length === 0) {
  } else {
    formattedSensorData = datas.data?.map((sensor) => ({
      "Device Name": sensor.deviceName,
      Address: sensor.address,
      Area: sensor.area,
      "View Location": (
        <a
          href={`https://www.google.com/maps/place/${sensor.latitude}+${sensor.longitude}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Location
        </a>
      ),
    }));
  }

  return (
    <>
     <div className="dashboard-main-wrapper">
      <Header />


      <div className="dashboard-body">
        <Sidebar />
        <div className="dashboard-wrapper">
          <div className="dashboard-ecommerce">
            <div className="container-fluid dashboard-content">
              <div className="ecommerce-widget">
                <div className="row align-items-end">
                  <div className="col-lg-8">
                    <div className="page-header-title">
                      <i className="ik ik-inbox bg-blue" />
                      <div className="d-inline">
                        <h2>Device Location</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <nav
                      className="breadcrumb-container"
                      aria-label="breadcrumb"
                    >
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <Link to="/">
                            <i class="fa-solid fa-house"></i>
                          </Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Device Location
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="dt-responsive">
                        {isLoaded ? (
                          <CDBDataTable
                            striped
                            bordered
                            hover
                            entriesOptions={[5, 20, 25]}
                            entries={5}
                            pagesAmount={4}
                            data={{
                              columns: Object.keys(
                                formattedSensorData[0] || {}
                              ).map((key) => ({
                                label: key,
                                field: key,
                              })),
                              rows: formattedSensorData,
                            }}
                          />
                        ) : (
                          <h3>Please Wait...</h3>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default DeviceLocation;
