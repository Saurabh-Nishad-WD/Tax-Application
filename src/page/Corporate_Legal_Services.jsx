import React from "react";
import img001 from "../data/img001.avif";
import img002 from "../data/img002.avif";
import Last from "../components/Last";

function Corporate() {
  return (
    <div>
      {/* Hero Section */}
      <div className="h-[45vh] bg-gray-800 text-center flex flex-col items-center py-10">
        <h1 className="text-4xl sm:text-6xl font-bold text-white py-5">
          Corporate Legal Services
        </h1>
        <p className="w-full sm:w-[80%] lg:w-[100vh] text-white text-xl">
          Expert legal support for business formation, compliance, and intellectual property protection tailored for your needs.
        </p>
      </div>

      {/* Services Section */}
      <div className="text-center flex flex-col items-center py-10">
        <h1 className="text-4xl sm:text-6xl font-bold text-black py-5">
          Corporate Legal Services
        </h1>
        <p className="w-full sm:w-[80%] lg:w-[100vh] text-gray-700 text-xl">
          Expert legal support for business formation, compliance, and intellectual property protection tailored for your needs.
        </p>

        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center w-full sm:w-[85%] p-5 sm:p-10">
          <img src={img001} alt="Lawyer" className="w-full sm:w-[48%] rounded-[5%] mb-5 sm:mb-0" />
          <img src={img002} alt="Lawyer" className="w-full sm:w-[48%] rounded-[5%]" />
        </div>

        <div className="flex flex-wrap justify-center sm:justify-between items-center w-full sm:w-[70%] mx-auto mt-10 space-y-5 sm:space-y-0 sm:space-x-5 sm:flex-row">
          {/* Tax Compliance Help Cards */}
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="h-[25vh] w-full sm:w-[45%] lg:w-[70vh] bg-gray-400 border-2 border-black p-5 m-2 rounded-lg">
                <h1 className="text-2xl font-bold">Tax Compliance Help</h1>
                <p className="text-lg pt-2 text-gray-800">
                  Expert assistance in tax return filings and compliance matters for businesses of all sizes.
                </p>
              </div>
            ))}
        </div>
      </div>

      {/* Footer Section */}
      <Last />
    </div>
  );
}

export default Corporate;
