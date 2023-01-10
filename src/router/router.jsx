import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Signin from "../pages/Signin/Signin";
import Register from "../pages/Register/Register";
export default function router() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Signin />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}
