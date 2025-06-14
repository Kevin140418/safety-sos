// Import necessary modules
const connectDB = require("../../db/dbConnect");

// Define async function to fetch total counts
async function GetCounts(req, res) {
  try {
    const db = await connectDB();

    const deviceCollection = db.collection("devices");
    const feeedbackCollection = db.collection("feedback");
    const inquiryCollection = db.collection("inquiry");

    const tempCollection = db.collection("dht");
    const smokeCollection = db.collection("smoke");
    const mq135Collection = db.collection("mq_135");
    const mq4Collection = db.collection("mq_4");
    const fireCollection = db.collection("fire");

    // Fetch total counts
    const totalDevicesCount = await deviceCollection.countDocuments();
    const totalInquiryCount = await inquiryCollection.countDocuments();
    const totalFeedbackCount = await feeedbackCollection.countDocuments();

    const totalTempAlerts = await tempCollection.countDocuments({
      sensorValue: { $gt: 30 },
    });
    const totalSmokeAlerts = await smokeCollection.countDocuments({
      sensorValue: { $gt: 0 },
    });
    const totalMQ135Alerts = await mq135Collection.countDocuments({
      sensorValue: { $gt: 0 },
    });
    const totalMQ3Alerts = await mq4Collection.countDocuments({
      sensorValue: { $gt: 0 },
    });
    const totalFireAlerts = await fireCollection.countDocuments({
      sensorValue: { $gt: 0 },
    });

    const totalAlertsCount =
      totalTempAlerts +
      totalSmokeAlerts +
      totalMQ135Alerts +
      totalMQ3Alerts +
      totalFireAlerts;

    res.status(200).json({
      totalDevices: totalDevicesCount,
      totalInquiry: totalInquiryCount,
      totalFeedback: totalFeedbackCount,
      totalAlerts: totalAlertsCount,
      success: true,
      message: "Counts fetched successfully!",
    });
  } catch (error) {
    console.error("Error fetching counts:", error);
    res.status(500).json({ success: false, error: "Something went wrong!" });
  }
}

module.exports = { GetCounts };
