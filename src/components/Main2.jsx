import React from "react";
import hammer from "../data/hammer.avif";

function Main2() {
  return (
    <>
      <div className="flex flex-col items-center px-5 sm:px-20 md:px-40 py-20 gap-4 h-[120vh] bg-blue-400">
        <p className="text-3xl sm:text-4xl md:text-5xl text-red-500 font-bold text-center">
          विस्तृत कानूनी सेवाएँ
        </p>
        <p className="text-center sm:px-10 md:px-40">
          हमारी विशेषज्ञ कानूनी टीम के साथ जुड़ें और आपकी विशेष जरूरतों के
          अनुसार समाधान प्राप्त करें।
        </p>
        <div className="relative flex w-full sm:w-[70vh] md:w-[80vh] h-[50vh] sm:h-[70vh] md:h-[80vh] mt-10 md:mt-16 rounded-xl">
          <img
            src={hammer}
            alt="Legal Hammer"
            className="object-cover rounded-3xl w-full h-full"
          />
        </div>
        <div className="py-5 mt-10 sm:translate-x-[20vh] md:translate-x-[50vh] sm:-translate-y-[20vh] md:-translate-y-[50vh] gap-y-4 sm:w-full md:w-[70vh] text-center">
          <div className="pb-4">
            <p className="text-lg sm:text-xl md:text-2xl font-bold pb-2">
              सुरक्षित ग्राहक प्लेटफार्म
            </p>
            <span className="text-gray-800 text-sm sm:text-base md:text-lg">
              किसी भी समय, कहीं भी अपने केस की इतिहास और महत्वपूर्ण दस्तावेज़
              सुरक्षित रूप से एक्सेस करें
            </span>
          </div>
          <div className="pb-4">
            <p className="text-lg sm:text-xl md:text-2xl font-bold pb-2">
              सुरक्षित ग्राहक प्लेटफार्म
            </p>
            <span className="text-gray-800 text-sm sm:text-base md:text-lg">
              किसी भी समय, कहीं भी अपने केस की इतिहास और महत्वपूर्ण दस्तावेज़
              सुरक्षित रूप से एक्सेस करें
            </span>
          </div>
          <div className="pb-4">
            <p className="text-lg sm:text-xl md:text-2xl font-bold pb-2">
              सुरक्षित ग्राहक प्लेटफार्म
            </p>
            <span className="text-gray-800 text-sm sm:text-base md:text-lg">
              किसी भी समय, कहीं भी अपने केस की इतिहास और महत्वपूर्ण दस्तावेज़
              सुरक्षित रूप से एक्सेस करें
            </span>
          </div>
          <div className="pb-4">
            <p className="text-lg sm:text-xl md:text-2xl font-bold pb-2">
              सुरक्षित ग्राहक प्लेटफार्म
            </p>
            <span className="text-gray-800 text-sm sm:text-base md:text-lg">
              किसी भी समय, कहीं भी अपने केस की इतिहास और महत्वपूर्ण दस्तावेज़
              सुरक्षित रूप से एक्सेस करें
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main2;
