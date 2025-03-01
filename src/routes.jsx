import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './pages/landing/Landing';
import App from './App';
function routes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< App/>} />
        
      </Routes>
    </Router>
  )
}

export default routes