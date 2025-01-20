import React from 'react'
import vdo from "../data/6006249_Person_People_1280x720.mp4"
import Form from "../components/Form"
function Input() {
  return (
    <>
    <div className="relative min-h-screen ">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-95 z-0"
        autoPlay
        loop
        muted
      >
        <source src={vdo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  
      {/* Form Container */}
      <Form/>
      <div className="absolute left-0 top-1/2 transform -translate-y-3/4 translate-x-1/2 z-40 p-4 text-white">
      <div>
        <p>★★★★★</p>
        <p className="text-xm">ग्राहकों की समीक्षाओं में 5 सितारे</p>
       </div> 
        <div>
        <h1 className="text-3xl">आपके कानूनी अधिकारों की सुरक्षा,</h1>
        <h1 className="text-3xl"> हमारे अनुभवी वकीलों के साथ।</h1>
        </div>
        <p className="text-xm">आपके कानूनी समाधान के लिए कुशल वकीलों और सहज संवाद का लाभ उठाएं</p>
      </div>
    </div>
  </>
  
  )
}

export default Input;
