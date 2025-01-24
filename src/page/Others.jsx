import React from "react";
import Contact from "../components/Contact";
import sunder from "../data/sunder.avif";
import pic from "../data/pic.avif";

function Others() {
  return (
    <div>
      {/* Hero Section */}
      <div className="h-[45vh] bg-gray-800 text-center flex flex-col items-center py-10">
        <h1 className="text-4xl sm:text-6xl font-bold text-white py-5">
          विशेषज्ञ कानूनी सेवाएं
        </h1>
        <p className="w-full sm:w-[80%] lg:w-[100vh] text-white text-xl">
          Your trusted partner for writs, appeals, and revisions with dedicated legal support and guidance.
        </p>
      </div>

      {/* Content Section */}
      <div className="h-auto bg-slate-100 text-center flex flex-col items-center py-10">
        
        {/* Image Section */}
        <div className="flex flex-col sm:flex-row w-full sm:w-[85%] p-5 sm:p-10 justify-center">
          <img
            src={pic}
            alt=""
            className="mt-5 sm:mt-[15%] px-5 w-full sm:w-[55%] rounded-[5%] mx-auto sm:ml-[4%] transform sm:translate-x-0 -translate-x-[10%]"
          />
        </div>

        {/* Cards Section */}
        <div className="flex flex-col sm:flex-row sm:space-x-5 sm:w-full justify-center space-y-5 sm:space-y-0 w-[85%]">
          <div className="h-auto sm:h-[25vh] w-full sm:w-[35%] bg-white border-2 border-gray-300 p-5 rounded-lg">
            <h1 className="text-2xl font-bold">Appeals Process</h1>
            <p className="text-lg pt-2 text-gray-800">
              हमारी टीम आपको प्रतिकूल न्यायालयीन निर्णयों को चुनौती देने के लिए अपील प्रक्रिया में मार्गदर्शन करती है।
            </p>
            <button
              type="submit"
              className="w-full sm:w-[60%] bg-blue-600 text-white py-2 sm:mt-4 rounded-lg p-1 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              तत्काल सम्पर्क करें
            </button>
          </div>

          <div className="h-auto sm:h-[25vh] w-full sm:w-[35%] bg-white border-2 border-gray-300 p-5 rounded-lg">
            <h1 className="text-2xl font-bold">Write Petition</h1>
            <p className="text-lg pt-2 text-gray-800">
              हम आपको याचिकाएँ दाखिल करने और उनकी जटिलताओं को प्रभावी ढंग से संपन्न करने में मदद करते हैं।
            </p>
            <button
              type="submit"
              className="w-full sm:w-[60%] bg-blue-600 text-white py-2 sm:mt-4 rounded-lg p-1 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              तत्काल सम्पर्क करें
            </button>
          </div>

          <div className="h-auto sm:h-[25vh] w-full sm:w-[35%] bg-white border-2 border-gray-300 p-5 rounded-lg">
            <h1 className="text-2xl font-bold">Revision Process</h1>
            <p className="text-lg pt-2 text-gray-800">
              हम आपको पुनर्विचार प्रक्रिया को प्रभावी ढंग से संचालित करने और उसकी जटिलताओं से निपटने में मदद करते हैं।
            </p>
            <button
              type="submit"
              className="w-full sm:w-[60%] bg-blue-600 text-white py-2 sm:mt-4 rounded-lg p-1 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              तत्काल सम्पर्क करें
            </button>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="h-auto bg-blue-600 flex flex-col items-center py-10">
        <h1 className="text-2xl sm:text-3xl font-mono text-white text-center">
          <span className="font-bold text-center">★★★★★</span>
          <br />
          TLC की कानूनी टीम ने मेरी अपील प्रक्रिया में शानदार मदद की। उनकी विशेषज्ञता ने नतीजे में बड़ा फर्क डाला। मैं अपने मित्रों से आपकी सेवा की संस्तुति करूंगा।
          <div className="mt-4">
            <img
              src={sunder}
              alt="Testimonial"
              className="h-16 w-16 sm:h-20 sm:w-20 rounded-full mx-auto"
            />
            <p className="mt-2 text-white">श्याम सुन्दर IAS</p>
          </div>
        </h1>
      </div>

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default Others;
