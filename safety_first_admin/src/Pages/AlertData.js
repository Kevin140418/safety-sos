import React, { useEffect, useState } from "react";
import axios from "axios";
import { CDBDataTable } from "cdbreact";
import '../Pages/admin_login.css';
function AlertData() {
  const [liveData, setLiveData] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/getAlertsUser")
      .then((response) => {
        setLiveData(response.data.liveData);
        setSelectedDevice(response.data.liveData[0]); // Select the first device by default
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Error fetching live data:", error);
      });
  }, []);

  const handleDeviceChange = (deviceId) => {
    const selected = liveData.find((device) => device.deviceId === deviceId);
    setSelectedDevice(selected);
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <div>
                <h2 className="text-muted">Alerts</h2>
                {isLoaded ? (
                  <>
                    <select
                      className="form-select mb-3 w-50"
                      onChange={(e) => handleDeviceChange(e.target.value)}
                    >
                      {liveData.length > 0 ? (
                        liveData.map((device) => (
                          <option
                            key={device.deviceId}
                            value={device.deviceId}
                          >{`${device.deviceName} - ${device.deviceId}`}</option>
                        ))
                      ) : (
                        <option value="">No alert found</option>
                      )}
                    </select>
                    {selectedDevice && (
                      <CDBDataTable
                        striped
                        bordered
                        hover
                        entriesOptions={[5, 20, 25]}
                        entries={5}
                        pagesAmount={4}
                        data={{
                          columns: [
                            { label: "Sensor Name", field: "sensorName" },
                            { label: "Sensor Value", field: "sensorValue" },
                          ],
                          rows: selectedDevice.data.map((sensor, index) => ({
                            id: index,
                            sensorName: sensor.sensorName,
                            sensorValue: sensor.sensorValue,
                          })),
                        }}
                      />
                    )}
                  </>
                ) : (
                  <h3>Loading...</h3>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AlertData;
