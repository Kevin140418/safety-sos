const connectDB = require("../db/dbConnect");

async function SignUpApi(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("users");

    // Match frontend fields
    const { name, email, phone, password, address } = req.body;

    if (!name || !email || !phone || !password || !address) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields!" });
    }

    const userExist = await collection.findOne({ email });

    if (userExist) {
      return res
        .status(400)
        .json({ success: false, message: "Email Already Exist!" });
    }

    // Create a unique index on the email field if it doesn't already exist
    await collection.createIndex({ email: 1 }, { unique: true });

    await collection.insertOne({
      name,
      email,
      phone,
      password,
      address,
      role: "0", // add default role if needed
    });

    return res
      .status(201)
      .json({ success: true, message: "Registration Successful" });
  } catch (error) {
    console.error("Registration Failed:", error);
    return res
      .status(500)
      .json({ success: false, error: "Registration Failed" });
  }
}

module.exports = { SignUpApi };