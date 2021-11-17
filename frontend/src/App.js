import React, { useContext } from "react";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Regiser from "./pages/register/Register";
import VideoPage from "./pages/videoPage/VideoPage";
import { Context } from "./Context/Context";
import Login from "./pages/login/Login";
import UserSetting from "./pages/userSetting/UserSetting";

function App() {
  const { user } = useContext(Context);

  return (
    // Routes
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Regiser />} />
        <Route
          path="/addVideoPage"
          element={user ? <VideoPage /> : <Login />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/userSetting" element={<UserSetting />} />
      </Routes>
    </Router>
  );
}

export default App;
