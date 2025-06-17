const connectDB = require("../db/dbConnect");
const bcrypt = require('bcryptjs'); 

async function LoginApi(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("users");

    const { email, password } = req.body;
    
    const user = await collection.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email" });
    }

    console.log(user);
    
    
const isMatch = await bcrypt.compare(password, user.password);

if (!isMatch) {
  return res
  .status(401)
  .json({ success: false, message: "Invalid email or password" });
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

module.exports = { LoginApi };