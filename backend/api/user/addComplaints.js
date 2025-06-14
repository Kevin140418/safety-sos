const connectDB = require("../../db/dbConnect");

async function AddComplaints(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("inquiry");

    const { u_name, subject, compDetails } = req.body;

    if (!u_name || !subject || !compDetails) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields!" });
    }

    await collection.insertOne({
      u_name,
      subject,
      compDetails,
      timestamp: new Date(),
    });

    return res
      .status(201)
      .json({ success: true, message: "Inquiry added successfully" });
  } catch (error) {
    console.error("addComplaints", error);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
}

module.exports = { AddComplaints };
