import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Alerts() {
  // State variables
  const [devices, setDevices] = useState([]); // Stores the list of devices
  const [selectedDeviceName, setSelectedDeviceName] = useState(""); // Stores the selected device name
  const [sensorData, setSensorData] = useState([]); // Stores the sensor data for the selected device

  // Fetch device data from the API on component mount
  useEffect(() => {
    axios
      .get("http://localhost:8000/getAlertsUser")
      .then((response) => {
        setDevices(response.data.liveData);
        if (response.data.liveData.length > 0) {
          setSelectedDeviceName(response.data.liveData[0].deviceName); // Set the first device as default
        }
      })
      .catch((error) => {
        console.error("Error fetching device data:", error);
      });
  }, []);

  // Fetch sensor data for the selected device
  useEffect(() => {
    if (selectedDeviceName) {
      const selectedDevice = devices.find(
        (device) => device.deviceName === selectedDeviceName
      );
      if (selectedDevice) {
        setSensorData(selectedDevice.data);
      }
    } else {
      setSensorData([]);
    }
  }, [selectedDeviceName, devices]);

  // Function to get the display name and icon class for each sensor
  const getSensorInfo = (sensorName) => {
    switch (sensorName) {
      case "Fire Sensor":
        return { displayName: "FIRE SENSOR", iconClass: "fa fa-fire" };
      case "MQ 135 Sensor":
        return { displayName: "MQ135 SENSOR", iconClass: "fa fa-wind" };
      case "Smoke Sensor":
        return { displayName: "SMOKE SENSOR", iconClass: "fa fa-smog" };
      case "MQ4 Sensor":
        return { displayName: "MQ4 SENSOR", iconClass: "fa fa-users" };
      case "Temperature Sensor":
        return {
          displayName: "TEMPERATURE SENSOR",
          iconClass: "fa-solid fa-temperature-high",
        };

      default:
        return { displayName: "", iconClass: "" };
    }
  };

  // Render the component
  return (
    <>
      <Header />
      <div className="container-fluid services py-5 mb-5">
        <div className="container">
          <div
            className="text-center mx-auto pb-5 wow fadeIn"
            data-wow-delay=".3s"
            style={{ maxWidth: 600 }}
          >
            <h5 className="text-primary">Alerts</h5>
            <h1>Location wise Alerts data</h1>
            {/* Dropdown to select device */}
            <select
              className="form-select"
              value={selectedDeviceName}
              onChange={(e) => setSelectedDeviceName(e.target.value)}
            >
              {devices.map((device) => (
                <option key={device.deviceName} value={device.deviceName}>
                  {device.deviceName}
                </option>
              ))}
            </select>
          </div>
          <div className="row g-5 services-inner">
            {/* Display sensor data for the selected device */}
            {sensorData.map((sensor) => (
              <div
                key={sensor.sensorName}
                className="col-md-6 col-lg-4 wow fadeIn"
                data-wow-delay=".3s"
              >
                <div className="services-item bg-light">
                  <div className="p-4 text-center services-content">
                    <div className="services-content-icon">
                      {/* Display sensor icon */}
                      <i
                        className={`${
                          getSensorInfo(sensor.sensorName).iconClass
                        } fa-7x mb-4 text-primary`}
                      />
                      {/* Display sensor name */}
                      <h4 className="mb-3">
                        {getSensorInfo(sensor.sensorName).displayName}
                      </h4>
                      {/* Display sensor value */}
                      <p className="mb-4 text-muted fw-bold fs-5">
                        {sensor.sensorValue}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Alerts;
