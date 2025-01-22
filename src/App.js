import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Corporate from "./page/Corporate_Legal_Services";
import Home from "./page/Home";
import Criminal_case from "./page/Criminal_case";
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
          </Routes>
        </div>
      </Router>
      

      {/* Other components */}
    </div>
  );
}

export default App;
