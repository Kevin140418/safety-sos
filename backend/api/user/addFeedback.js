const connectDB = require("../../db/dbConnect");

async function AddFeedback(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("feedback");

    const { userName, rating, review } = req.body; 

    if (!userName || !rating || !review) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields!" });
    }

    //! Get current timestamp in IST


    await collection.insertOne({
      userName,
      rating,
      review,
      timestamp: new Date(),
    });

    return res
      .status(201)
      .json({ success: true, message: "Feedback added successfully" });
  } catch (error) {
    console.error("addFeedback:", error);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
}

module.exports = { AddFeedback };
