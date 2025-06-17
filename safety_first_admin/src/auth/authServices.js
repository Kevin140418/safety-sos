import axios from "axios";

axios.defaults.withCredentials = true;

const checkSession = async () => {
  try {
    console.log("🔍 Checking session...");
    const res = await axios.post("https://safety-sos-1.onrender.com/session");
    console.log("✅ Session valid:", res.data);
    return true;
  } catch (error) {
    console.log("❌ Session check failed:", error.response?.data?.message);
    return false;
  }
};

export default checkSession;