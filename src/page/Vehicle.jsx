import React from "react";
import img001 from "../data/lawyer.avif";
import Contact from "../components/Contact";

function Vehicle() {
  return (
    <div>
      {/* Hero Section */}
      <div className="h-[45vh] text-center flex flex-col items-center py-10">
        <h1 className="text-4xl sm:text-6xl font-bold text-black py-5">
          विशेषज्ञ कानूनी सेवाएँ
        </h1>
        <p className="w-full sm:w-[80%] lg:w-[100vh] text-gray-800 text-xl">
          Compassionate support for Vehicle cases, including property disputes, family law, and personal injury claims.
        </p>
      </div>

      {/* Corporate Legal Services Section */}
      <div className="text-center flex flex-col items-center bg-gray-300 py-10">
        <h1 className="text-4xl sm:text-6xl font-bold text-black py-5">
          Corporate Legal Services
        </h1>
        <p className="w-full sm:w-[80%] lg:w-[100vh] text-gray-700 text-xl pb-[10vh]">
          Expert legal support for business formation, compliance, and intellectual property protection tailored for your needs.
        </p>

        {/* Services Cards */}
        <div className="flex flex-col sm:flex-row sm:space-x-5 w-full sm:w-[85%] justify-center space-y-5 sm:space-y-0">
          <div className="w-full sm:w-[30%] p-3 m-3 rounded-tl-[10%] rounded-br-[10%] bg-gray-400">
            <img src={img001} alt="Service 1" className="rounded-[20%] w-full" />
            <p className="pt-4 text-lg">
              Expert legal support for business formation, compliance, and intellectual property protection tailored for your needs.
            </p>
          </div>
          <div className="w-full sm:w-[30%] p-3 m-3 rounded-tl-[10%] rounded-br-[10%] bg-gray-400">
            <img src={img001} alt="Service 2" className="rounded-[20%] w-full" />
            <p className="pt-4 text-lg">
              Expert legal support for business formation, compliance, and intellectual property protection tailored for your needs.
            </p>
          </div>
          <div className="w-full sm:w-[30%] p-3 m-3 rounded-tl-[10%] rounded-br-[10%] bg-gray-400">
            <img src={img001} alt="Service 3" className="rounded-[20%] w-full" />
            <p className="pt-4 text-lg">
              Expert legal support for business formation, compliance, and intellectual property protection tailored for your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="w-full p-20 bg-white flex flex-col sm:flex-row justify-center items-center">
        {/* Image */}
        <div className="w-full sm:w-[40%] h-[80vh]">
          <img src={img001} alt="Testimonial Image" className="h-[80vh] rounded-bl-[10%] w-full" />
        </div>

        {/* Testimonial Content */}
        <div className="w-full sm:w-[50%] h-[80vh] flex justify-center items-center">
          <div className="h-[80vh] text-black bg-gray-400 flex flex-col rounded-tr-[10%] items-center justify-center gap-y-2 p-5">
            <div className="text-2xl">★★★★★</div>
            <div>
              <p className="text-xl font-semibold text-center">
                TLC ने शानदार कानूनी सेवाएं दीं। उनके वकील की लिस्ट और संवाद प्रणाली से सब कुछ बहुत आसान हो गया। अगर आपको कानूनी मदद चाहिए, तो मैं इनकी पूरी तरह से अनुशंसा करता हूँ
              </p>
            </div>
            <div className="pt-10">
              <div className="h-16 w-16 rounded-full flex justify-center items-center mx-auto">
                <img
                  src={img001}
                  alt="profile pic"
                  className="h-16 w-16 object-cover rounded-full"
                />
              </div>
              <p>Jhon Wick</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default Vehicle;
