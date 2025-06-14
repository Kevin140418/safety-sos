const connectDB = require("../../db/dbConnect");

async function AddDevice(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("devices");

    const { deviceName, loginId, area } = req.body;

    //   const data = req.session.user;
    //   console.log(data);

    if (!deviceName || !loginId || !area) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields!" });
    }

    await collection.insertOne({
      deviceName,
      loginId,
      area,
    });

    return res
      .status(201)
      .json({ success: true, message: "Device added successfully" });
  } catch (error) {
    console.error("Error adding device:", error);
    return res
      .status(500)
      .json({ success: false, error: "Something Went Wrong" });
  }
}

module.exports = { AddDevice };
