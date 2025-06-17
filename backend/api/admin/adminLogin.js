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

    //session creation
    req.session.user = { session: user, isAuth: true };
    const userDatas = req.session.user;

    res.status(200).json({
      userData: userDatas,
      success: true,
      message: "Login Successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Login Failed" });
  }
}

module.exports = { AdminLoginApi };
