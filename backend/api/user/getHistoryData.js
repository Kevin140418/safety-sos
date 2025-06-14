// Import necessary modules
const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

// Define async function to fetch history data from each collection for all devices
async function GetHistoryData(req, res) {
  try {
    // Connect to the database
    const db = await connectDB();

    // Get the collection for devices
    const deviceCollection = db.collection("devices");
    // Initialize an array to store the history data
    const historyData = [];

    // Get all devices from the database
    const devices = await deviceCollection.find().toArray();

    // Loop through each device
    for (const device of devices) {
      // Initialize an object to store sensor-wise data for the device
      const deviceData = {
        deviceName: device.deviceName,
        deviceId: device._id.toString(),
        sensors: {},
      };

      // Define the collections to fetch data from
      const collections = ["fire", "mq_135", "mq_4", "smoke", "dht"];

      // Loop through each collection to fetch sensor data
      for (const collection of collections) {
        // Find all sensor data for the device in the current collection
        const collectionData = await db
          .collection(collection)
          .find(
            { deviceId: new ObjectId(device._id) },
            { projection: { sensorValue: 1, timestamp: 1, _id: 0 } }
          )
          .toArray();

        // If sensor data is found, add it to the deviceData object
        if (collectionData.length > 0) {
          deviceData.sensors[collection] = collectionData.map((data) => ({
            sensorValue: data.sensorValue,
            timestamp: data.timestamp,
          }));
        }
      }

      // Add the deviceData object to the historyData array
      historyData.push(deviceData);
    }

    // Send the history data in the response
    res.status(200).json({
      historyData,
      success: true,
      message: "History data fetched successfully!",
    });
  } catch (error) {
    // Handle errors
    console.error("Error fetching History data:", error);
    res.status(500).json({ success: false, error: "Something went wrong!" });
  }
}

// Export the function for use in other modules
module.exports = { GetHistoryData };
