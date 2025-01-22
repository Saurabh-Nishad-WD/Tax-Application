import React from "react";
import img001 from "../data/lawyer.avif";
import Contact from "../components/Contact";
import Last from "../components/Last";
function Vehicle() {
  return (
    <div>
      <div className="h-[45vh]  text-center flex flex-col items-center">
        <h1 className="text-6xl font-bold text-black py-5">
          विशेषज्ञ कानूनी सेवाएँ
        </h1>
        <p className="w-[100vh] text-gray-800 text-xl ">
          Compassionate support for Vehicle cases, including property disputes,
          family law, and personal injury claims.
        </p>
      </div>
      <div className=" text-center flex flex-col items-center bg-gray-300">
        <h1 className="text-6xl font-bold text-black py-5">
          Corporate Legal Services
        </h1>
        <p className="w-[100vh] text-gray-700 text-xl pb-[10vh]">
          Expert legal support for business formation, compliance, and
          intellectual property protection tailored for your needs.
        </p>
        <div className="flex flex-row w-[85%]  justify-between text-start">
          <div className="w-[110vh] p-3 m-3 rounded-tl-[10%] rounded-br-[10%] bg-gray-400">
            <img src={img001} alt="" className="rounded-[20%]" />
            <p className=" pt-4 text-lg">
              Expert legal support for business formation, compliance, and
              intellectual property protection tailored for your needs.
            </p>
          </div>
          <div className="w-[110vh] p-3 m-3 rounded-tl-[10%] rounded-br-[10%] bg-gray-400">
            <img src={img001} alt="" className="rounded-[20%]" />
            <p className=" pt-4 text-lg">
              Expert legal support for business formation, compliance, and
              intellectual property protection tailored for your needs.
            </p>
          </div>
          <div className="w-[110vh] p-3 m-3 rounded-tl-[10%] rounded-br-[10%] bg-gray-400">
            <img src={img001} alt="" className="rounded-[20%]" />
            <p className=" pt-4 text-lg">
              Expert legal support for business formation, compliance, and
              intellectual property protection tailored for your needs.
            </p>
          </div>
        </div>
        <div className="w-[100%] p-20 bg-white flex flex-row justify-center items-center ">
          <div className="w-[100vh] h-[80vh]">
            <img src={img001} alt="" className="h-[80vh] rounded-bl-[10%]" />
          </div>
          <div className="w-[100vh] h-[80vh]">
              <div className="h-[80vh] text-black bg-gray-400 flex flex-col rounded-tr-[10%] items-center justify-center gap-y-2">
                    <div className="text-2xl">★★★★★</div>
                    <div>
                      <p className="text-xl font-semibold text-center">
                        TLC ने शानदार कानूनी सेवाएं दीं। उनके वकील की लिस्ट और संवाद प्रणाली
                        से सब कुछ बहुत आसान हो गया। अगर आपको कानूनी मदद चाहिए, तो मैं इनकी
                        पूरी तरह से अनुशंसा करता हूँ
                      </p>
                    </div>
                    <div className="pt-10">
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
      <Contact />
    </div>
  );
}

export default Vehicle;
