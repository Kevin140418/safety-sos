const { LoginApi } = require("./api/loginApi");
const { SignUpApi } = require("./api/registerApi");
const connectDB = require("./db/dbConnect");
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const Session = require("./api/session");
const Logout = require("./api/logout");
const { TempratureSensorApi } = require("./api/user/tempratureData");
const { ViewTempratureData } = require("./api/admin/viewTempratureData");
const { ViewSmokeData } = require("./api/admin/viewSmokeData");
const { ViewMQ135Data } = require("./api/admin/viewMQ135Data");
const { ViewMQ4Data } = require("./api/admin/viewMQ4Data");
const { ViewFireData } = require("./api/admin/viewFireData");
const { ViewusersData } = require("./api/admin/viewUsers");
const { AddDevice } = require("./api/admin/addDevice");
const { ViewDeviceLocation } = require("./api/admin/viewDeviceLocation");
const { AddComplaints } = require("./api/user/addComplaints");
const { ViewInquiry } = require("./api/admin/viewInquiry");
const { AddFeedback } = require("./api/user/addFeedback");
const { ViewAlerts } = require("./api/admin/viewAlerts");
const { ViewFeedback } = require("./api/admin/viewFeedback");
const { GetCounts } = require("./api/admin/getCounts");
const { GetLiveData } = require("./api/user/getLiveData");
const { ViewAlertsUser } = require("./api/user/getAlerts");
const { GetHistoryData } = require("./api/user/getHistoryData");
const { AdminLoginApi } = require("./api/admin/adminLogin");
const { Register } = require("./api/user/Regester");

const app = express();

const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

//!common
app.post("/register", Register);
app.post("/login", LoginApi);
app.post("/session", Session);
app.get("/logout", Logout);

//!admin
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

//!user
app.post("/temprature", TempratureSensorApi);
app.post("/addComplaints", AddComplaints);
app.post("/addFeedback", AddFeedback);
app.get("/getLiveData", GetLiveData);
app.get("/getAlertsUser", ViewAlertsUser);
app.post("/getHistoryData", GetHistoryData);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connectDB();
