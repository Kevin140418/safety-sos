const connectDB = require("../../db/dbConnect");
const { ObjectId } = require("mongodb");

async function ViewDeviceLocation(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("devices");

    const deviceLocation = await collection
      .aggregate([
        {
          $lookup: {
            from: "location", // Join with the location collection
            localField: "locationId", // Field in devices collection
            foreignField: "_id", // Field in location collection
            as: "locationDetails", // Output array
          },
        },
        {
          $addFields: {
            address: { $arrayElemAt: ["$locationDetails.address", 0] },
            latitude: { $arrayElemAt: ["$locationDetails.latitude", 0] },
            longitude: { $arrayElemAt: ["$locationDetails.longitude", 0] },
          },
        },
        {
          $project: {
            _id: 1,
            deviceName: 1,
            area: 1,
            address: 1,
            latitude: 1,
            longitude: 1,
          },
        },
      ])
      .toArray();

    if (deviceLocation.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No Data Found!!" });
    }

    res.status(200).json({
      success: true,
      message: "Data Found Successfully!",
      data: deviceLocation,
    });
  } catch (error) {
    console.error("ViewDeviceLocation.js error:", error);
    res.status(500).json({ success: false, error: "Something went wrong!" });
  }
}

module.exports = { ViewDeviceLocation };
