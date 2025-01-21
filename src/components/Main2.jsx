import React from "react";
import hammer from "../data/hammer.avif";
function Main2() {
  return (
    <>
      <div className="flex flex-col  items-center px-40 py-20 gap-4 h-[120vh] bg-blue-400">
        <p className="text-5xl text-red font-bold">विस्तृत कानूनी सेवाएँ</p>
        <p>
          हमारी विशेषज्ञ कानूनी टीम के साथ जुड़ें और आपकी विशेष जरूरतों के
          अनुसार समाधान प्राप्त करें।
        </p>
        <div className="relative flex w-[80vh] h-[80vh] -translate-x-[50vh] translate-y-[10vh] rounded-xl">
          <img
            src={hammer}
            alt="Legal Hammer"
            className="object-cover rounded-3xl"
          />
        </div>
          <div className="py-5 translate-x-[50vh] -translate-y-[50vh] gap-y-2 w-[80vh] text-center">
            <div className="pb-4 ">
            <p className="text-xl font-bold pb-2 ">सुरक्षित ग्राहक प्लेटफार्म</p>
            <span className="text-gray-800">
              किसी भी समय, कहीं भी अपने केस की इतिहास और महत्वपूर्ण दस्तावेज़
              सुरक्षित रूप से एक्सेस करें
            </span>
            </div>
            <div className="pb-4">
            <p className="text-xl font-bold pb-2">सुरक्षित ग्राहक प्लेटफार्म</p>
            <span className="text-gray-800">
              किसी भी समय, कहीं भी अपने केस की इतिहास और महत्वपूर्ण दस्तावेज़
              सुरक्षित रूप से एक्सेस करें
            </span>
            </div>
            <div className="pb-4">
            <p className="text-xl font-bold pb-2">सुरक्षित ग्राहक प्लेटफार्म</p>
            <span className="text-gray-800">
              किसी भी समय, कहीं भी अपने केस की इतिहास और महत्वपूर्ण दस्तावेज़
              सुरक्षित रूप से एक्सेस करें
            </span>
            </div>
            <div className="pb-4">
            <p className="text-xl font-bold pb-2">सुरक्षित ग्राहक प्लेटफार्म</p>
            <span className="text-gray-800">
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
