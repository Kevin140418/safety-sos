async function Session(req, res) {
  try {
    console.log("🔍 Session Check:", req.session);

    const userDatas = req.session.user;

    if (!userDatas) {
      return res.status(401).json({ message: "No session created!" });
    }

    res.status(200).json({
      sessionData: userDatas,
      success: true,
      message: "Session Valid",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = Session;
