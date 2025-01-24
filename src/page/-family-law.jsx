import React from "react";
import img001 from "../data/lawyer.avif";
import Contact from "../components/Contact";

function Family() {
  return (
    <div>
      {/* Hero Section */}
      <div className="h-[45vh] text-center flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black py-5">
          Compassionate Family Law
        </h1>
        <p className="w-full sm:w-[90%] md:w-[80vh] text-gray-800 text-lg sm:text-xl md:text-2xl">
          Dedicated support for divorce, custody, and adoption. Your family's
          future is our priority.
        </p>
      </div>

      {/* Services Section */}
      <div className="text-center flex flex-col items-center bg-gray-500 py-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black py-5">
          Family Law Services
        </h1>
        <p className="w-full sm:w-[90%] md:w-[80vh] text-gray-800 text-lg sm:text-xl md:text-2xl pb-10">
          Expert legal support for divorce, custody, support, and adoption
          matters tailored for families.
        </p>

        {/* Service Cards */}
        <div className="flex flex-wrap justify-center gap-6 px-4">
          <div className="w-full sm:w-[45%] md:w-[30%] p-3 m-3 rounded-tl-[10%] rounded-br-[10%] bg-gray-400">
            <img src={img001} alt="Service Image" className="rounded-[20%]" />
            <p className="pt-4 text-lg">
              Expert legal support for business formation, compliance, and
              intellectual property protection tailored for your needs.
            </p>
          </div>
          <div className="w-full sm:w-[45%] md:w-[30%] p-3 m-3 rounded-tl-[10%] rounded-br-[10%] bg-gray-400">
            <img src={img001} alt="Service Image" className="rounded-[20%]" />
            <p className="pt-4 text-lg">
              Expert legal support for business formation, compliance, and
              intellectual property protection tailored for your needs.
            </p>
          </div>
          <div className="w-full sm:w-[45%] md:w-[30%] p-3 m-3 rounded-tl-[10%] rounded-br-[10%] bg-gray-400">
            <img src={img001} alt="Service Image" className="rounded-[20%]" />
            <p className="pt-4 text-lg">
              Expert legal support for business formation, compliance, and
              intellectual property protection tailored for your needs.
            </p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="flex flex-wrap justify-center items-center w-full pt-10 gap-6">
          <div className="h-[40vh] w-full sm:w-[40vh] md:w-[45vh] bg-gray-200 border-2 border-black p-2 m-2 rounded-t-[10vh]">
            <div className="text-xl">★★★★★</div>
            <p className="text-center">
              TLC ने शानदार कानूनी सेवाएं दीं। उनके वकील की लिस्ट और संवाद
              प्रणाली से सब कुछ बहुत आसान हो गया। अगर आपको कानूनी मदद चाहिए,
              तो मैं इनकी पूरी तरह से अनुशंसा करता हूँ
            </p>
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
          <div className="h-[40vh] w-full sm:w-[40vh] md:w-[45vh] bg-gray-200 border-2 border-black p-2 m-2 rounded-b-[10vh]">
            <div className="text-xl">★★★★★</div>
            <p className="text-center">
              TLC ने शानदार कानूनी सेवाएं दीं। उनके वकील की लिस्ट और संवाद
              प्रणाली से सब कुछ बहुत आसान हो गया। अगर आपको कानूनी मदद चाहिए,
              तो मैं इनकी पूरी तरह से अनुशंसा करता हूँ
            </p>
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
        </div>
      </div>

      <Contact />
    </div>
  );
}

export default Family;
