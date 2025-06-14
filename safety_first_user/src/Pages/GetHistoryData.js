import React, { useEffect, useState } from "react";
import axios from "axios";
import { CDBDataTable } from "cdbreact";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function GetHistoryData() {
  // State variables
  const [historyData, setHistoryData] = useState([]);
  const [selectedDeviceName, setSelectedDeviceName] = useState("");
  const [selectedSensorName, setSelectedSensorName] = useState("");
  const [sensorData, setSensorData] = useState([]);

  // Fetch device data from the API on component mount
  useEffect(() => {
    axios
      .post("http://localhost:8000/getHistoryData")
      .then((response) => {
        setHistoryData(response.data.historyData);
        if (response.data.historyData.length > 0) {
          setSelectedDeviceName(response.data.historyData[0].deviceName); // Set the first device as default
          const firstSensor = Object.keys(
            response.data.historyData[0].sensors
          )[0]; // Get the first sensor of the first device
          setSelectedSensorName(firstSensor); // Set the first sensor as default
        }
      })
      .catch((error) => {
        console.error("Error fetching device data:", error);
      });
  }, []);

  // Fetch sensor data for the selected device and sensor
  useEffect(() => {
    if (selectedDeviceName && selectedSensorName) {
      const selectedDevice = historyData.find(
        (device) => device.deviceName === selectedDeviceName
      );
      if (selectedDevice && selectedDevice.sensors[selectedSensorName]) {
        setSensorData(selectedDevice.sensors[selectedSensorName]);
      }
    } else {
      setSensorData([]);
    }
  }, [selectedDeviceName, selectedSensorName, historyData]);

  // Update selectedSensorName when selectedDeviceName changes
  useEffect(() => {
    if (selectedDeviceName && historyData.length > 0) {
      const firstSensor = Object.keys(
        historyData.find((device) => device.deviceName === selectedDeviceName)
          .sensors
      )[0];
      setSelectedSensorName(firstSensor);
    }
  }, [selectedDeviceName, historyData]);

  const formattedData = sensorData.map((data, index) => ({
    id: index,
    sensorValue: data.sensorValue,
    deviceId: selectedDeviceName,
    deviceName: selectedDeviceName,
    timestamp: new Date(data.timestamp).toLocaleString(),
  }));

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
            <h5 className="text-primary">History Data</h5>
            <h1>Location wise history data</h1>
            {/* Dropdown to select device */}
            <select
              className="form-select mb-3"
              value={selectedDeviceName}
              onChange={(e) => setSelectedDeviceName(e.target.value)}
            >
              {historyData.map((device) => (
                <option key={device.deviceName} value={device.deviceName}>
                  {device.deviceName}
                </option>
              ))}
            </select>

            {selectedDeviceName &&
              historyData.find(
                (device) => device.deviceName === selectedDeviceName
              ) && (
                <select
                  className="form-select mb-3"
                  value={selectedSensorName}
                  onChange={(e) => setSelectedSensorName(e.target.value)}
                >
                  {Object.keys(
                    historyData.find(
                      (device) => device.deviceName === selectedDeviceName
                    ).sensors
                  ).map((sensorName) => (
                    <option key={sensorName} value={sensorName}>
                      {sensorName}
                    </option>
                  ))}
                </select>
              )}
          </div>
        </div>
        <div
          className="row g-5 services-inner py-5 wow fadeIn col-8 mx-auto "
          data-wow-delay=".3s "
        >
          <CDBDataTable
            striped
            hover
            responsive
            bordered
            entriesOptions={[5, 10, 15]}
            entries={5}
            pagesAmount={4}
            data={{
              columns: [
                { label: "ID", field: "id" },
                { label: "Sensor Value", field: "sensorValue" },
                { label: "Device ID", field: "deviceId" },
                { label: "Location Name", field: "deviceName" },
                { label: "TimeStamp", field: "timestamp" },
              ],
              rows: formattedData,
            }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default GetHistoryData;
