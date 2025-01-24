import React from "react";
import Contact from "../components/Contact";
import sunder from "../data/sunder.avif";
import pic from "../data/pic.avif";
function Others() {
  return (
    <div>
      <div className="h-[45vh] bg-gray-800 text-center flex flex-col items-center">
        <h1 className="text-6xl font-bold text-white py-5">
        विशेषज्ञ कानूनी सेवाएं
        </h1>
        <p className="w-[100vh] text-white text-xl">
        Your trusted partner for writs, appeals, and revisions with dedicated legal support and guidance.
        </p>
      </div>
      <div className="h-[150vh] bg-slate-100 text-center flex flex-col items-center">
      <div className="flex flex-row w-[85%] p-10">
      <img 
  src={pic} 
  alt="" className="mt-[15%] px-5 w-full sm:w-[55%] rounded-[5%] mx-auto sm:ml-[4%] transform -translate-x-[10%]"/>

</div>
          
<div className="h-[25vh] w-[60vh] bg-white border-2 sm:mr-[40%] sm:w-[35%]  sm:h-[23%] sm:mt-[-1%]">
            <h1 className="text-2xl font-bold  ">Appeals Process</h1>
            <p className="text-lg pt-2 text-gray-800">
            Appeals Process
            हमारी टीम आपको प्रतिकूल न्यायालयीन निर्णयों को चुनौती देने के लिए अपील प्रक्रिया में मार्गदर्शन करती है।
            </p>
            <button
              type="submit"
              className="w-60%  bg-blue-600 text-white py-2 sm:mt-[4%]  rounded-2xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              तत्काल सम्पर्क करें
            </button>
          </div>
       
          <div className="h-[25vh] w-[60vh] bg-white border-2 sm:ml-[49%] sm:w-[35%]  sm:h-[23%] sm:mt-[-12%]">
            <h1 className="text-2xl font-bold  ">Write Petition</h1>
            <p className="text-lg pt-2 text-gray-800">
            Write Petition
            हम आपको याचिकाएँ दाखिल करने और उनकी जटिलताओं को प्रभावी ढंग से संपन्न करने में मदद करते हैं।
            </p>
            <button
              type="submit"
              className="w-60%  bg-blue-600 text-white py-2  sm:mt-[4%] rounded-2xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              तत्काल सम्पर्क करें
            </button>
          </div>
       
          <div className="h-[25vh] w-[60vh] bg-white border-2 sm:ml-[4%] sm:w-[35%]  sm:h-[23%] sm:mt-[12%]">
            <h1 className="text-2xl font-bold  "> Revision  Process</h1>
            <p className="text-lg pt-2 text-gray-800">
            Revision  Process
            हम आपको पुनर्विचार प्रक्रिया को प्रभावी ढंग से संचालित करने और उसकी जटिलताओं से निपटने में मदद करते हैं।
            </p>
            <button
              type="submit"
              className="w-60%  bg-blue-600 text-white py-2 sm:mt-[4%]  rounded-2xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              तत्काल सम्पर्क करें
            </button>
          </div>
        
      </div>


      <div className="h-[60vh] bg-blue-600  flex flex-col items-center">
      <h1 className="text-1xl font-mono mt-[8%] text-white py-5  " >
        <h1 className="font-bold text-center  text-2xl">★★★★★</h1>
                          <br />
      TLC की कानूनी टीम ने मेरी अपील प्रक्रिया में शानदार मदद की। उनकी विशेषज्ञता ने <br /> नतीजे में बड़ा फर्क डाला। मैं अपने मित्रों से अप्पकी  सेवा की संस्तुति करूंगा 
      <img  src={sunder} alt=""  className="h-14    sm:ml-[43%] sm:mt-[6%] rounded-full" />
<p className="sm:ml-[39%] sm:mt-[3%]">श्याम सुन्दर IAS</p>
        </h1>
        
      </div>
      
        
      
      <Contact/>
    </div>
  );
}
export default Others;