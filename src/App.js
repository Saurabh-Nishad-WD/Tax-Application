import React from "react";
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import Main from "./components/Main";
import Main2 from "./components/Main2";
import Info from "./components/Info";
import Footer from "./components/Footer";
import coart from "./data/highCort.jpeg";
function App() {
  return (
    <div
     style={{
        backgroundImage: {coart},
        backgroundSize: "cover", // Ensures the image covers the whole container
        backgroundRepeat: "no-repeat", // Prevents image repetition
        backgroundPosition: "center", // Centers the image
      }}
      >
      <Navbar />
      <Input/>
      <Main/>
      <Main2/>
      <Info/>
      <Footer/>
      
      {/* Other components */}
    </div>
  );
}

export default App;