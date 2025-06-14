const connectDB = require("../../db/dbConnect");

async function ViewMQ135Data(req, res) {
  try {
    const db = await connectDB();
    const mq_135Collection = db.collection("mq_135");
    const devicesCollection = db.collection("devices");

    const mq_135Data = await mq_135Collection.find({}).toArray();

    if (mq_135Data.length === 0) {
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

    const mappedData = await mq_135Collection.aggregate(pipeline).toArray();

    res.status(200).json({
      data: mappedData,
      success: true,
      message: "Data Found Successfully!",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: "Something went wrong!" });
  }
}

module.exports = { ViewMQ135Data };
