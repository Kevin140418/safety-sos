
const bcrypt = require('bcryptjs');  // Import bcrypt
const connectDB = require('../../db/dbConnect');

async function Register(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("users");

    const { name, email, phone, password, address } = req.body;

    // Log the received data to check if it's being sent correctly
    console.log("Received Data:", { name, email, phone, password, address });

    // Ensure all required fields are present
    if (!name || !email || !phone || !password || !address) {
      return res.status(400).json({ message: "Missing required fields!" });
    }

    // Hash the password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the data into the database
    await collection.insertOne({
      name,
      email,
      phone,
      password: hashedPassword,  // Store the hashed password
      address,
    });

    return res.status(200).json({ message: "Data Added Successfully" });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = { Register };
