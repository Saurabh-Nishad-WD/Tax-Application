import React from "react";
import vdo from "../data/6006249_Person_People_1280x720.mp4";
import Form from "../components/Form";
import insta from '../data/insta.jpeg';
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
        <Form />
        <div className="absolute left-0 top-1/2 transform -translate-y-3/4 translate-x-1/2 z-40 p-4 text-white">
          <div>
            <p>★★★★★</p>
            <p className="text-xm">ग्राहकों की समीक्षाओं में 5 सितारे</p>
          </div>
          <div>
            <h1 className="text-3xl">आपके कानूनी अधिकारों की सुरक्षा,</h1>
            <h1 className="text-3xl"> हमारे अनुभवी वकीलों के साथ।</h1>
          </div>
          <p className="text-xm">
            आपके कानूनी समाधान के लिए कुशल वकीलों और सहज संवाद का लाभ उठाएं
          </p>
          
          <div className="transform translate-y-60 flex justify-center items-center w-[45vh] h-10 bg-red-400 rounded-full p-5">
  <a 
    href="https://in.images.search.yahoo.com/search/images;_ylt=AwrKGQcxc49nOQIA4Vm7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=insta+logo&fr2=piv-web&type=E210IN885G91852&fr=mcafee#id=35&iurl=https%3A%2F%2Fwww.pngfind.com%2Fpngs%2Fm%2F7-70930_instagram-2016-logo-png-transparent-logo-instagram-png.png&action=click" 
    className="flex flex-row gap-x-1"
  >
    <span className="text-xl text-white font-bold flex justify-center items-center">हमें इंस्टाग्राम पर फॉलो करें!</span>
    <img src={insta} alt="insta err" className="rounded-full h-10 w-10" />
  </a>
</div>

        </div>
      </div>
    </>
  );
}

export default Input;
