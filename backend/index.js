const express = require("express");
const cors = require("cors");
const session = require("express-session");

const connectDB = require("./db/dbConnect");

// Auth APIs
const { LoginApi } = require("./api/loginApi");
const { SignUpApi } = require("./api/registerApi"); // Optional, you seem to use Register instead
const Session = require("./api/session");
const Logout = require("./api/logout");

// Admin APIs
const { ViewTempratureData } = require("./api/admin/viewTempratureData");
const { ViewSmokeData } = require("./api/admin/viewSmokeData");
const { ViewMQ135Data } = require("./api/admin/viewMQ135Data");
const { ViewMQ4Data } = require("./api/admin/viewMQ4Data");
const { ViewFireData } = require("./api/admin/viewFireData");
const { ViewusersData } = require("./api/admin/viewUsers");
const { AddDevice } = require("./api/admin/addDevice");
const { ViewDeviceLocation } = require("./api/admin/viewDeviceLocation");
const { ViewInquiry } = require("./api/admin/viewInquiry");
const { ViewAlerts } = require("./api/admin/viewAlerts");
const { ViewFeedback } = require("./api/admin/viewFeedback");
const { GetCounts } = require("./api/admin/getCounts");
const { AdminLoginApi } = require("./api/admin/adminLogin");

// User APIs
const { TempratureSensorApi } = require("./api/user/tempratureData");
const { AddComplaints } = require("./api/user/addComplaints");
const { AddFeedback } = require("./api/user/addFeedback");
const { GetLiveData } = require("./api/user/getLiveData");
const { ViewAlertsUser } = require("./api/user/getAlerts");
const { GetHistoryData } = require("./api/user/getHistoryData");
const { Register } = require("./api/user/Regester"); // <-- Your working register

const app = express();
const PORT = 8000;

// ✅ Connect to MongoDB before starting server
connectDB().then(() => {
  console.log("✅ MongoDB Connected");

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // CORS setup
  app.use(
    cors({
      origin: [
        "https://safety-sos.vercel.app",       // Admin panel
        "https://safety-sos-tf9n.vercel.app",  // User panel
        "http://localhost:3000",               // Local (user)
        "http://localhost:3001",               // Local (admin)
      ],
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
    })
  );

  // Session setup
  app.use(
    session({
      secret: "secret",
      resave: false,
      saveUninitialized: true,
    })
  );

  // Health check
  app.get("/", (req, res) => {
    res.send("🚀 Backend is live and connected to MongoDB");
  });

  //! Common Routes
  app.post("/register", Register); // <--- Used by frontend
  app.post("/login", LoginApi);
  app.post("/session", Session);
  app.get("/logout", Logout);

  //! Admin Routes
  app.post("/admin/login", AdminLoginApi);
  app.get("/getTemprature", ViewTempratureData);
  app.get("/getSmoke", ViewSmokeData);
  app.get("/getMQ135", ViewMQ135Data);
  app.get("/getMQ4", ViewMQ4Data);
  app.get("/getFire", ViewFireData);
  app.get("/getUsers", ViewusersData);
  app.get("/getInquiry", ViewInquiry);
  app.get("/getDeviceLocation", ViewDeviceLocation);
  app.get("/viewAlerts", ViewAlerts);
  app.get("/getFeedback", ViewFeedback);
  app.post("/addDevice", AddDevice);
  app.get("/getCounts", GetCounts);

  //! User Routes
  app.post("/temprature", TempratureSensorApi);
  app.post("/addComplaints", AddComplaints);
  app.post("/addFeedback", AddFeedback);
  app.get("/getLiveData", GetLiveData);
  app.get("/getAlertsUser", ViewAlertsUser);
  app.post("/getHistoryData", GetHistoryData);

  // ✅ Start server
  app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error("❌ Failed to connect to MongoDB:", err);
});