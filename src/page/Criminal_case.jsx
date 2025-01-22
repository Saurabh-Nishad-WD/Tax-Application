import React from "react";
import img001 from "../data/lawyer.avif";
function Criminal_case() {
  return (
    <div>
      <div className="h-[45vh] bg-gray-800 text-center flex flex-col items-center" loading="lazy">
        <h1 className="text-6xl font-bold text-white py-5">
        आपराधिक रक्षा विशेषज्ञ
        </h1>
        <p className="w-[100vh] text-white text-xl">
        गंभीर आरोपों का सामना कर रहे हैं? हमारा अनुभवी आपराधिक वकील आपके अधिकारों और भविष्य की रक्षा के लिए यहाँ है।
        </p>
      </div>
      <div className=" text-center flex flex-col items-center bg-gray-200">
        <h1 className="text-6xl font-bold text-black py-5">
          Corporate Legal Services
        </h1>
        <p className="w-[100vh] text-gray-700 text-xl">
          Expert legal support for business formation, compliance, and
          intellectual property protection tailored for your needs.
        </p>
        <div className="flex flex-row w-[85%] p-10">
          <img src={img001} alt="" className=" px-5 w-[50%] rounded-[10%]" />
        </div>
        <div className="py-5 translate-x-[50vh] -translate-y-[65vh] gap-y-2 w-[80vh] text-center h-[15vh] ">
          <div className="pb-4 ">
            <p className="text-xl font-bold pb-2 ">
              सुरक्षित ग्राहक प्लेटफार्म
            </p>
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
      <div className=" text-center flex flex-col items-center">
        <h1 className="text-6xl font-bold text-black py-5">
        Criminal Defense Services
        </h1>
        <p className="w-[100vh] text-gray-700 text-xl">
          Expert legal support for business formation, compliance, and
          intellectual property protection tailored for your needs.
        </p>

        <div className="flex flex-wrap justify-center items-center w-[90%] pt-10">
          <div className="h-[40vh] w-[90vh] bg-gray-400  border-2 border-black p-2 m-2 rounded-[10%]">
            <div className="text-xl">★★★★★</div>
            <div>
              <p className=" text-center">
                TLC ने शानदार कानूनी सेवाएं दीं। उनके वकील की लिस्ट और संवाद
                प्रणाली से सब कुछ बहुत आसान हो गया। अगर आपको कानूनी मदद चाहिए,
                तो मैं इनकी पूरी तरह से अनुशंसा करता हूँ
              </p>
            </div>
            <div className="pt-10 flex flex-col justify-center items-center">
              <div className="h-16 w-16 rounded-full flex justify-center items-center ">
                <img
                  src={img001}
                  alt="profile pic error"
                  className="h-16 w-16 object-cover rounded-full"
                />
              </div>
              <p>Jhon Wick</p>
            </div>
          </div>
          <div className="h-[40vh] w-[90vh] bg-gray-400  border-2 border-black p-2 m-2 rounded-[10%]">
            <div className="text-xl">★★★★★</div>
            <div>
              <p className=" text-center">
                TLC ने शानदार कानूनी सेवाएं दीं। उनके वकील की लिस्ट और संवाद
                प्रणाली से सब कुछ बहुत आसान हो गया। अगर आपको कानूनी मदद चाहिए,
                तो मैं इनकी पूरी तरह से अनुशंसा करता हूँ
              </p>
            </div>
            <div className="pt-10 flex flex-col justify-center items-center">
              <div className="h-16 w-16 rounded-full flex justify-center items-center ">
                <img
                  src={img001}
                  alt="profile pic error"
                  className="h-16 w-16 object-cover rounded-full"
                />
              </div>
              <p>Jhon Wick</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Criminal_case;
