import React from 'react';
import img001 from "../data/lawyer.avif";
import Contact from "../components/Contact";

function Civil() {
  return (
    <div>
      {/* Hero Section */}
      <div className="h-[45vh] text-center flex flex-col items-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-black py-5">
          विशेषज्ञ कानूनी सेवाएँ
        </h1>
        <p className="w-full sm:w-[80%] lg:w-[100vh] text-gray-800 text-xl">
          Compassionate support for civil cases, including property disputes, family law, and personal injury claims.
        </p>
      </div>

      {/* Services Section */}
      <div className="text-center flex flex-col items-center bg-gray-300 py-10">
        <h1 className="text-4xl sm:text-6xl font-bold text-black py-5">
          Corporate Legal Services
        </h1>
        <p className="w-full sm:w-[80%] lg:w-[100vh] text-gray-700 text-xl py-4">
          Expert legal support for business formation, compliance, and intellectual property protection tailored for your needs.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center w-full sm:w-[85%] px-5 py-10">
          <img src={img001} alt="lawyer" className="w-full sm:w-[48%] rounded-[5%] mb-5 sm:mb-0" />
          <img src={img001} alt="lawyer" className="w-full sm:w-[48%] rounded-[5%]" />
        </div>

        <div className="flex flex-wrap justify-between items-center w-full sm:w-[70%] mx-auto mt-10">
          <div className="h-[25vh] w-full sm:w-[45%] lg:w-[70vh] bg-gray-400 border-2 border-black p-5 m-2 rounded-lg">
            <h1 className="text-2xl font-bold">Tax Compliance Help</h1>
            <p className="text-lg pt-2 text-gray-500">
              Expert assistance in tax return filings and compliance matters for businesses of all sizes.
            </p>
          </div>
          <div className="h-[25vh] w-full sm:w-[45%] lg:w-[70vh] bg-gray-400 border-2 border-black p-5 m-2 rounded-lg">
            <h1 className="text-2xl font-bold">Tax Compliance Help</h1>
            <p className="text-lg pt-2 text-gray-500">
              Expert assistance in tax return filings and compliance matters for businesses of all sizes.
            </p>
          </div>
        </div>
      </div>

      {/* Criminal Defense Services Section */}
      <div className="text-center flex flex-col items-center py-10">
        <h1 className="text-4xl sm:text-6xl font-bold text-black py-5">
          Criminal Defense Services
        </h1>
        <p className="w-full sm:w-[80%] lg:w-[100vh] text-gray-700 text-xl py-4">
          Expert legal support for business formation, compliance, and intellectual property protection tailored for your needs.
        </p>

        {/* Reviews Section */}
        <div className="flex flex-wrap justify-center items-center w-full sm:w-[90%] py-10">
          <div className="h-[40vh] w-full sm:w-[45%] lg:w-[90vh] bg-gray-400 border-2 border-black p-5 m-2 rounded-[10%]">
            <div className="text-xl">★★★★★</div>
            <p className="text-center pt-2">
              TLC ने शानदार कानूनी सेवाएं दीं। उनके वकील की लिस्ट और संवाद प्रणाली से सब कुछ बहुत आसान हो गया। अगर आपको कानूनी मदद चाहिए, तो मैं इनकी पूरी तरह से अनुशंसा करता हूँ
            </p>
            <div className="pt-5 flex flex-col justify-center items-center">
              <div className="h-16 w-16 rounded-full flex justify-center items-center">
                <img src={img001} alt="profile pic error" className="h-16 w-16 object-cover rounded-full" />
              </div>
              <p>Jhon Wick</p>
            </div>
          </div>

          <div className="h-[40vh] w-full sm:w-[45%] lg:w-[90vh] bg-gray-400 border-2 border-black p-5 m-2 rounded-[10%]">
            <div className="text-xl">★★★★★</div>
            <p className="text-center pt-2">
              TLC ने शानदार कानूनी सेवाएं दीं। उनके वकील की लिस्ट और संवाद प्रणाली से सब कुछ बहुत आसान हो गया। अगर आपको कानूनी मदद चाहिए, तो मैं इनकी पूरी तरह से अनुशंसा करता हूँ
            </p>
            <div className="pt-5 flex flex-col justify-center items-center">
              <div className="h-16 w-16 rounded-full flex justify-center items-center">
                <img src={img001} alt="profile pic error" className="h-16 w-16 object-cover rounded-full" />
              </div>
              <p>Jhon Wick</p>
            </div>
          </div>
        </div>
        
        <Contact />
      </div>
    </div>
  );
}

export default Civil;
