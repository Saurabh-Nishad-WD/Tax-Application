import React from 'react'
import img001 from "../data/lawyer.avif";
import Contact from "../components/Contact";
function Civil() {
  return (
    <div>
            <div className="h-[45vh]  text-center flex flex-col items-center">
              <h1 className="text-6xl font-bold text-black py-5">
              विशेषज्ञ कानूनी सेवाएँ
              </h1>
              <p className="w-[100vh] text-gray-800 text-xl">
              Compassionate support for civil cases, including property disputes, family law, and personal injury claims.
              </p>
            </div>
          <div className=" text-center flex flex-col items-center bg-gray-300">
                  <h1 className="text-6xl font-bold text-black py-5">
                    Corporate Legal Services
                  </h1>
                  <p className="w-[100vh] text-gray-700 text-xl">
                    Expert legal support for business formation, compliance, and
                    intellectual property protection tailored for your needs.
                  </p>
                  <div className="flex flex-row w-[85%] p-10">
                    <img src={img001} alt="" className=" px-5 w-[50%] rounded-[5%]" />
                    <img src={img001} alt="" className=" px-5 w-[50%] rounded-[5%]" />
                  </div>
                  <div className="flex flex-wrap justify-between items-center w-[70%] -translate-y-[15vh]">
                    <div className="h-[25vh] w-[70vh] bg-gray-400  border-2 border-black p-2 m-2">
                      <h1 className="text-2xl font-bold ">Tax Compliance Help</h1>
                      <p className="text-lg pt-2 text-gray-500">
                        Expert assistance in tax return filings and compliance matters for
                        businesses of all sizes.
                      </p>
                    </div>
                    <div className="h-[25vh] w-[70vh] bg-gray-400  border-2 border-black p-2 m-2">
                      <h1 className="text-2xl font-bold ">Tax Compliance Help</h1>
                      <p className="text-lg pt-2 text-gray-500">
                        Expert assistance in tax return filings and compliance matters for
                        businesses of all sizes.
                      </p>
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
              <Contact/>
            </div>
    </div>
  )
}

export default Civil
