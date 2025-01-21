import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Last from "./components/Last";
import Corporate from "./page/Corporate_Legal_Services";
import Home from "./page/Home";
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
          </Routes>
          <Last />
        </div>
      </Router>
      

      {/* Other components */}
    </div>
  );
}

export default App;
