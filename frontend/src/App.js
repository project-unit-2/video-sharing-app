import React from 'react';
import Home from './pages/home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Regiser from './pages/reqister/Reqister';
import Login from './pages/login/Login';
import VideoPage from './pages/videoPage/VideoPage';
function App() {
  return (

    // Routes
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Regiser />} />
        <Route path='/login' element={<Login />} />
        <Route path='/addVideoPage' element={<VideoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
