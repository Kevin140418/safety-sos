import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import TempratureSensor from "./Pages/TempratureSensor";
import SmokeSensor from "./Pages/SmokeSensor";
import MQ135Sensor from "./Pages/MQ135Sensor";
import MQ3Sensor from "./Pages/MQ4Sensor";
import FireSensor from "./Pages/FireSensor";
import Users from "./Pages/Users";
import DeviceLocation from "./Pages/DeviceLocation";
import ComplainsData from "./Pages/ComplainsData";
import FeedbackData from "./Pages/FeedbackData";
import AlertData from "./Pages/AlertData";
import Page_login from "./Pages/Page_login";
import axios from "axios";
import { useState, useEffect } from "react";
import checkSession from "./auth/authServices";

function App() {
  axios.defaults.withCredentials = true;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // New loading state

  //for checking session
  useEffect(() => {
    const authenticateUser = async () => {
      // Call checkSession to determine if user is authenticated
      // const isAuthenticated = await checkSession();
      // setIsAuthenticated(isAuthenticated);
      // setLoading(false); // Set loading to false after checking session
      try {
        const isAuthenticated = await checkSession();
        setIsAuthenticated(isAuthenticated);
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false); // Set loading to false after authentication check
      }
    };
    if (!isAuthenticated) {
      authenticateUser(); // Check session only if user is not authenticated
    } else {
      setLoading(false); // Set loading to false immediately if user is authenticated
    }
  }, [isAuthenticated]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            // eslint-disable-next-line
            element={!isAuthenticated ? <Page_login /> : <Navigate to="/" />}
          />
          <Route
            path="/temprature.html"
            element={
              isAuthenticated ? <TempratureSensor /> : <Navigate to="/login" />
            }
          />

          <Route
            path="/smoke.html"
            element={
              isAuthenticated ? <SmokeSensor /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/mq135.html"
            element={
              isAuthenticated ? <MQ135Sensor /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/mq3.html"
            element={isAuthenticated ? <MQ3Sensor /> : <Navigate to="/login" />}
          />
          <Route
            path="/fire.html"
            element={
              isAuthenticated ? <FireSensor /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/users.html"
            element={isAuthenticated ? <Users /> : <Navigate to="/login" />}
          />
          <Route
            path="/deviceLocation.html"
            element={
              isAuthenticated ? <DeviceLocation /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/inquiryData.html"
            element={
              isAuthenticated ? <ComplainsData /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/feedbackData.html"
            element={
              isAuthenticated ? <FeedbackData /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/alertData.html"
            element={isAuthenticated ? <AlertData /> : <Navigate to="/login" />}
          />
          <Route
            path="*"
            element={
              isAuthenticated ? (
                <h1 style={{ textAlign: "center" }}>404 Not Found</h1>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
