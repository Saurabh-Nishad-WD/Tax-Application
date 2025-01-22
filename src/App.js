import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Corporate from "./page/Corporate_Legal_Services";
import Home from "./page/Home";
import Criminal_case from "./page/Criminal_case";
import Civil from "./page/Civil";
import Vehicle from "./page/Vehicle";
import Admin from "./page/Admin";
import Family from "./page/-family-law";
function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Routes>
            {/* Define Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/criminal" element={<Criminal_case />} />
            <Route path="/Civil" element={<Civil />} />
            <Route path="/Vehicle" element={<Vehicle />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/-family-law" element={<Family />} />
          </Routes>
        </div>
      </Router>
      

      {/* Other components */}
    </div>
  );
}

export default App;
