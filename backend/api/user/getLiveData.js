// Import necessary modules
const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

// Define async function to fetch Live data from each collection for all devices
async function GetLiveData(req, res) {
  try {
    // Connect to the database
    const db = await connectDB();

    // Get the collection for devices
    const deviceCollection = db.collection("devices");
    // Initialize an array to store the live data
    const liveData = [];

    // Get all devices from the database
    const devices = await deviceCollection.find().toArray();

    // Loop through each device
    for (const device of devices) {
      // Define the collections to fetch data from
      const collections = ["fire", "mq_135", "mq_4", "smoke", "dht"];
      // Initialize an array to store the sensor data for the device
      const deviceData = [];

      // Loop through each collection to fetch sensor data
      for (const collection of collections) {
        // Find the latest sensor data for the device in the current collection
        const collectionData = await db
          .collection(collection)
          .findOne(
            { deviceId: new ObjectId(device._id) },
            { sort: { timestamp: -1 }, projection: { sensorValue: 1, _id: 0 } }
          );

        // If sensor data is found, add it to the deviceData array
        if (collectionData) {
          const sensorName = collection;
          const sensorValue = collectionData.sensorValue;
          deviceData.push({ sensorName, sensorValue });
        }
      }

      // Add an object to the liveData array containing deviceName, deviceId, and sensor data
      liveData.push({
        deviceName: device.deviceName,
        deviceId: device._id.toString(),
        data: deviceData,
      });
    }

    // Send the live data in the response
    res.status(200).json({
      liveData,
      success: true,
      message: "Live data fetched successfully!",
    });
  } catch (error) {
    // Handle errors
    console.error("Error fetching Live data:", error);
    res.status(500).json({ success: false, error: "Something went wrong!" });
  }
}

// Export the function for use in other modules
module.exports = { GetLiveData };
