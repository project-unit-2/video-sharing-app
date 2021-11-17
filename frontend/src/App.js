import React, { useContext, useState } from "react";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Regiser from "./pages/register/Register";
import VideoPage from "./pages/videoPage/VideoPage";
import { Context, VideoTypeContext } from "./Context/Context";
import Login from "./pages/login/Login";
import UserSetting from "./pages/userSetting/UserSetting";
import VideoType from "./pages/videoType/VideoType";

function App() {
  const { user } = useContext(Context);

  const [videoType, setVideoType] = useState([])

  return (
    // Routes
    <VideoTypeContext.Provider value={{videoType, setVideoType}}>
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
          <Route path="/videoType/:text" element={<VideoType />} />
        </Routes>
      </Router>
    </VideoTypeContext.Provider>
  );
}

export default App;
