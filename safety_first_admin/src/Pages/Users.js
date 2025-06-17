import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import React, { useEffect, useState } from "react";
import { CDBDataTable } from "cdbreact";
import { Link } from "react-router-dom";
import '../Pages/admin_login.css';
function Users() {
  const [datas, setDatas] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("https://safety-sos-1.onrender.com/getUsers")
      .then((response) => response.json())
      .then((data) => setDatas(data))
      .then(() => setIsLoaded(true));
  }, []);

  var formettedData = [];
  if (datas.length === 0) {
  } else {
    formettedData = datas.data?.map((data) => ({
      "User Name": data.username,
      Email: data.email,
      "Phone No": data.phoneNo,
    }));
  }

  return (
    <>
      <div className="dashboard-main-wrapper">
        <Header />
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
                        <h2>Users</h2>
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
                          Users
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
                              columns: Object.keys(formettedData[0] || {}).map(
                                (key) => ({
                                  label: key,
                                  field: key,
                                })
                              ),
                              rows: formettedData,
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
    </>
  );
}

export default Users;
