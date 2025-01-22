import React from "react";
import img001 from "../data/lawyer.avif";
import Contact from "../components/Contact";
import stick from "../data/stick.avif";
function Admin() {
  return (
    <div>
      <div className="h-[45vh]  text-center flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-black py-5">
        Expert Legal Assistance
        </h1>
        <p className="w-[100vh] text-gray-800 text-xl ">
          Compassionate support for Admin cases, including property disputes,
          family law, and personal injury claims.
        </p>
      </div>
      <div className=" text-center flex flex-col items-center bg-gray-300">
        <h1 className="text-6xl font-bold text-black py-5">
        Administrative Legal Services
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
      </div>
      <div className=" h-[100vh]">
        <div className=" pl-[20vh]">
            <p className="text-5xl font-bold p-5 pb-[8vh] ">
            Your Trusted Legal Partner
            </p>
            <div className="flex flex-row gap-x-[15vh] ">
            <div className="w-[70vh] ">
                <p className="text-lg font-bold">Expert Legal Assistance</p>
                <p className="">At [your law firm name], we provide expert legal assistance in navigating complex administrative service matters, ensuring that our clients receive the best representation and guidance throughout their legal challenges.</p>
            </div>
            <div className="w-[70vh] ">
                <p className="text-lg font-bold">Expert Legal Assistance</p>
                <p className="">At [your law firm name], we provide expert legal assistance in navigating complex administrative service matters, ensuring that our clients receive the best representation and guidance throughout their legal challenges.</p>
            </div>
            </div>
        </div>
            <div className="flex items-center justify-center">
                <img src={stick} alt="" className="h-[60vh] p-10 w-[200vh] rounded-tl-[10vh] rounded-br-[10vh]"/>
            </div>
      </div>
            <div className="flex flex-row justify-center items-center pt-10">
                           <div className="h-[40vh] w-[90vh] bg-gray-400  border-2 border-black p-2 m-2">
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
                           <div className="h-[40vh] w-[90vh] bg-gray-400  border-2 border-black p-2 m-2">
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
      <Contact />
      <div className="h-[90vh] flex justify-center items-center ">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.1580251398254!2d82.07690407487358!3d26.288976686618007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a7c86ad9cb917%3A0x9149667aec4302ec!2sKNIT%20Post%20Office!5e0!3m2!1sen!2sin!4v1737540873612!5m2!1sen!2sin"
    width="1000"
    height="550"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
    </div>
  );
}

export default Admin;
