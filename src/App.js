import React from "react";
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import Main from "./components/Main";
import Main2 from "./components/Main2";
import Info from "./components/Info";
function App() {
  return (
    <div>
      <Navbar />
      <Input/>
      <Main/>
      <Main2/>
      <Info/>
      {/* Other components */}
    </div>
  );
}

export default App;