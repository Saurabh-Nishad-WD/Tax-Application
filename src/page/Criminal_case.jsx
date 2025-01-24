import React from "react";
import img001 from "../data/lawyer.avif";

function Criminal_case() {
  return (
    <div>
      {/* Hero Section */}
      <div className="h-[45vh] bg-gray-800 text-center flex flex-col items-center py-10">
        <h1 className="text-4xl sm:text-6xl font-bold text-white py-5">
          आपराधिक रक्षा विशेषज्ञ
        </h1>
        <p className="w-full sm:w-[80%] lg:w-[100vh] text-white text-xl">
          गंभीर आरोपों का सामना कर रहे हैं? हमारा अनुभवी आपराधिक वकील आपके अधिकारों और भविष्य की रक्षा के लिए यहाँ है।
        </p>
      </div>

      {/* Services Section */}
      <div className="text-center flex flex-col items-center bg-gray-200 py-10">
        <h1 className="text-4xl sm:text-6xl font-bold text-black py-5">
          Corporate Legal Services
        </h1>
        <p className="w-full sm:w-[80%] lg:w-[100vh] text-gray-700 text-xl">
          Expert legal support for business formation, compliance, and intellectual property protection tailored for your needs.
        </p>

        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center w-full sm:w-[85%] p-5 sm:p-10">
          <img
            src={img001}
            alt="Lawyer"
            className="w-full sm:w-[48%] rounded-[10%] mb-5 sm:mb-0"
          />
        </div>

        {/* Secure Client Platform Section */}
        <div className="py-5 translate-x-[50vh] -translate-y-[65vh] gap-y-5 sm:gap-y-2 w-full sm:w-[80vh] text-center h-[15vh] sm:h-auto mx-auto">
          {["सुरक्षित ग्राहक प्लेटफार्म", "सुरक्षित ग्राहक प्लेटफार्म", "सुरक्षित ग्राहक प्लेटफार्म", "सुरक्षित ग्राहक प्लेटफार्म"].map((text, index) => (
            <div key={index} className="pb-4">
              <p className="text-xl font-bold pb-2">{text}</p>
              <span className="text-gray-800">
                किसी भी समय, कहीं भी अपने केस की इतिहास और महत्वपूर्ण दस्तावेज़ सुरक्षित रूप से एक्सेस करें
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Client Testimonial Section */}
      <div className="text-center flex flex-col items-center py-10">
        <h1 className="text-4xl sm:text-6xl font-bold text-black py-5">
          Criminal Defense Services
        </h1>
        <p className="w-full sm:w-[80%] lg:w-[100vh] text-gray-700 text-xl">
          Expert legal support for business formation, compliance, and intellectual property protection tailored for your needs.
        </p>

        <div className="flex flex-wrap justify-center sm:justify-between w-full sm:w-[90%] pt-10 space-y-5 sm:space-y-0 sm:space-x-5">
          {/* Testimonial Cards */}
          {Array(2)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="h-[40vh] sm:h-[30vh] w-full sm:w-[45%] bg-gray-400 border-2 border-black p-2 m-2 rounded-[10%]">
                <div className="text-xl">★★★★★</div>
                <div>
                  <p className="text-center">
                    TLC ने शानदार कानूनी सेवाएं दीं। उनके वकील की लिस्ट और संवाद प्रणाली से सब कुछ बहुत आसान हो गया। अगर आपको कानूनी मदद चाहिए, तो मैं इनकी पूरी तरह से अनुशंसा करता हूँ
                  </p>
                </div>
                <div className="pt-10 flex flex-col justify-center items-center">
                  <div className="h-16 w-16 rounded-full flex justify-center items-center">
                    <img
                      src={img001}
                      alt="profile pic error"
                      className="h-16 w-16 object-cover rounded-full"
                    />
                  </div>
                  <p>Jhon Wick</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Criminal_case;
