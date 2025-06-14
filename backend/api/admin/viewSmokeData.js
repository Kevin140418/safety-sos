const connectDB = require("../../db/dbConnect");

async function ViewSmokeData(req, res) {
  try {
    const db = await connectDB();
    const smokeCollection = db.collection("smoke");
    const devicesCollection = db.collection("devices");

    const smokeData = await smokeCollection.find({}).toArray();

    if (smokeData.length === 0) {
      return res
        .status(401)
        .json({ success: false, message: "No Data Found!!" });
    }

    const pipeline = [
      {
        $lookup: {
          from: "devices",
          localField: "deviceId",
          foreignField: "_id",
          as: "deviceInfo",
        },
      },
      {
        $unwind: "$deviceInfo",
      },
      {
        $project: {
          _id: 0,
          deviceId: 1,
          deviceName: "$deviceInfo.deviceName",
          area: "$deviceInfo.area",
          sensorValue: 1,
          timestamp: 1,
        },
      },
    ];

    const mappedData = await smokeCollection.aggregate(pipeline).toArray();

    res.status(200).json({
      data: mappedData,
      success: true,
      message: "Data Found Successfully!",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: "Something went wrong!" });
  }
}

module.exports = { ViewSmokeData };
