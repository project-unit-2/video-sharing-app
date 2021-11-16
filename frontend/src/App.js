import React from 'react';
import Home from './pages/home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Regiser from './pages/register/Register';
import Login from './pages/register/Login';

function App() {
  return (

    // Routes
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Regiser />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
