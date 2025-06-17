const connectDB = require("../../db/dbConnect");

async function AdminLoginApi(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("admin");

    const { email_id, password } = req.body;
    const user = await collection.findOne({ email_id, password });

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid username or password" });
    }

    // Set session
    req.session.user = { session: user, isAuth: true };
    console.log("✅ Session Created:", req.session);

    res.status(200).json({
      userData: req.session.user,
      success: true,
      message: "Login Successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Login Failed" });
  }
}

module.exports = { AdminLoginApi };
