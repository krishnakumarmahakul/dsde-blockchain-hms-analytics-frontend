import React from 'react'
import { BrowserRouter , Routes, Route } from "react-router-dom";
// import Landing from './pages/landing/Landing';
import App from './App';
// import About from './pages/About/About'
// import Dashbord from './pages/dashboard/Dashbord';
import Login from './pages/Login/Login';

function Pageroutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/app" element={< App/>} />
      </Routes>
    </BrowserRouter>

    
  )
}

export default Pageroutes