import React from "react";
import vdo from "../data/6006249_Person_People_1280x720.mp4";
import Form from "../components/Form";
import insta from "../data/insta.jpeg";
import Button from "../utils/Button";

function Input() {
  return (
    <>
      <div className="relative min-h-screen">
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

        {/* Content Section */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-[5%] lg:translate-x-[10%] xl:translate-x-[20vh] z-40 p-4 text-white">
          <div className="mb-4">
            <p className="text-lg md:text-xl lg:text-2xl">★★★★★</p>
            <p className="text-sm md:text-base">ग्राहकों की समीक्षाओं में 5 सितारे</p>
          </div>
          <div className="mb-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl">आपके कानूनी अधिकारों की सुरक्षा,</h1>
            <h1 className="text-2xl md:text-3xl lg:text-4xl"> हमारे अनुभवी वकीलों के साथ।</h1>
          </div>
          <p className="text-sm md:text-base lg:text-lg drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] mb-6">
            आपके कानूनी समाधान के लिए कुशल वकीलों और सहज संवाद का लाभ उठाएं
          </p>
          <div className="flex flex-col lg:flex-row lg:gap-4 justify-center pt-10 w-full lg:w-[80vh]">
            <div className="h-[9vh] w-full lg:w-[40vh] mb-4 lg:mb-0">
              <Button
                text="अपने मामले की मुफ्त समीक्षा करवाएं।"
                className="border-2 border-black text-sm text-center h-[6vh] w-full lg:w-[35vh]"
              />
            </div>
            <div className="h-[10vh] w-full lg:w-[40vh]">
              <Button
                text="UK , EU, CANADA, UAE LAWYERS"
                className="border-2 border-black text-sm text-center h-[6vh] w-full lg:w-[35vh]"
              />
            </div>
          </div>
          <div className="h-[10vh] w-full lg:w-[40vh] mt-4">
            <Button
              text="भारतीय सेना परिवार के लिए मुफ्त परामर्श"
              className="border-2 border-black text-sm text-center h-[6vh] w-full lg:w-[35vh]"
            />
          </div>
          <div className="h-[10vh] w-full lg:w-[40vh] mt-4">
            <Button
              text="Business & Corporate"
              className="border-2 border-black text-sm text-center h-[6vh] w-full lg:w-[35vh]"
            />
          </div>

          {/* Instagram Follow Section */}
          <div className="mt-6 flex justify-center items-center w-full lg:w-[45vh] h-20 rounded-full p-5 border-4 border-red-500 shadow-lg bg-pink-300 bg-opacity-70">
            <a
              href="https://www.instagram.com/direct/t/17842930583948521/?__pwa=1"
              className="flex flex-row gap-x-2 items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-sm md:text-lg lg:text-xl text-white font-bold">
                हमें इंस्टाग्राम पर फॉलो करें!
              </span>
              <img
                src={insta}
                alt="Instagram"
                className="rounded-full h-8 w-8 md:h-10 md:w-10"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Input;