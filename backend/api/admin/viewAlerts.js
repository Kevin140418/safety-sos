const connectDB = require("../../db/dbConnect");

async function ViewAlerts(req, res) {
  try {
    const db = await connectDB();

    // Fetch data from different collections
    const tempCollection = db.collection("dht");
    const fireCollection = db.collection("fire");
    const smokeCollection = db.collection("smoke");
    const mq4Collection = db.collection("mq_4");
    const mq135Collection = db.collection("mq_135");

    // Fetching data from all collections simultaneously

    const tempratureData = await tempCollection
      .find({ sensorValue: { $gt: 40 } })
      .toArray();
    const fireData = await fireCollection
      .find({ sensorValue: { $gt: 40 } })
      .toArray();
    const smokeData = await smokeCollection
      .find({ sensorValue: { $gt: 40 } })
      .toArray();
    const mq3Data = await mq4Collection
      .find({ sensorValue: { $gt: 40 } })
      .toArray();
    const mq135Data = await mq135Collection
      .find({ sensorValue: { $gt: 40 } })
      .toArray();

    // Merge data from all collections into a single object
    const sensorData = {
      temperature: tempratureData,
      fire: fireData,
      smoke: smokeData,
      mq3: mq3Data,
      mq135: mq135Data,
    };

    // Check if any data is available
    if (
      tempratureData.length === 0 &&
      fireData.length === 0 &&
      smokeData.length === 0 &&
      mq3Data.length === 0 &&
      mq135Data.length === 0
    ) {
      return res
        .status(401)
        .json({ success: false, message: "No Data Found!!" });
    }
    const allData = [
      ...tempratureData,
      ...fireData,
      ...smokeData,
      ...mq3Data,
      ...mq135Data,
    ];

    // Send response with all sensor data merged under 'alerts' key
    res.status(200).json({
      alerts: allData,
      success: true,
      message: "Data Found Successfully!",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: "Something went wrong!" });
  }
}

module.exports = { ViewAlerts };
