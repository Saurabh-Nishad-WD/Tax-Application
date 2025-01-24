import React from "react";
import Button from "../utils/Button";

function Info() {
  return (
    <>
      <div className="flex flex-col items-start px-8 md:px-20 pt-10 md:pt-20 gap-4 h-full bg-white">
        <p className="text-2xl md:text-4xl text-red font-semibold">
          हमारी संस्था का लक्ष्य
        </p>
        <p className="text-sm md:text-base">
          असाधारण कानूनी सेवाएँ देने और यह सुनिश्चित करने के लिए प्रतिबद्ध कि
          हमारे ग्राहक, वह समर्थन और प्रतिनिधित्व प्राप्त करें जिसके वे हकदार
          हैं।
        </p>
      </div>

      <div className="flex flex-col items-start px-8 md:px-20 py-10 md:py-20">
        <p className="font-bold pb-5 md:pb-10 text-lg md:text-xl">विशेषज्ञ कानूनी सेवाएँ:</p>
        {[...Array(6)].map((_, index) => (
          <div key={index} className="py-5">
            <p className="font-bold pb-2 text-base md:text-lg">{index + 1}. विवाद समाधान:</p>
            <span className="font-bold pr-2">-विशेषज्ञ कानूनी सेवाएँ:</span>
            <span>
              आपके कानूनी मामले का विश्लेषण और सर्वोत्तम समाधान की सिफारिश।
            </span>
            <br />
            <span className="font-bold pr-2">-विशेषज्ञ कानूनी सेवाएँ:</span>
            <span>
              आपके कानूनी मामले का विश्लेषण और सर्वोत्तम समाधान की सिफारिश।
            </span>
          </div>
        ))}
        <p className="text-sm md:text-base">
          हमारी विशेषज्ञ कानूनी सेवाएँ आपके सभी कानूनी मुद्दों को प्रभावी ढंग से हल करने में आपकी मदद करेंगी।
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-start gap-y-5 md:gap-x-16 items-center px-8 md:px-20">
        <div className="flex justify-center items-center w-full md:w-[40vh] h-[10vh] md:h-[20vh]">
          <Button
            text="WhatsApp"
            dest="https://wa.me/9120633022"
            className="border-2 border-gray-800 w-full h-12 bg-green-600 text-white rounded-lg hover:bg-green-900"
          />
        </div>
        <div className="flex justify-center items-center w-full md:w-[40vh] h-[10vh] md:h-[20vh]">
          <Button
            text="Call Now!"
            dest="tel:9120633022"
            className="border-2 border-gray-800 w-full h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-900"
          />
        </div>
      </div>

      <div className="px-8 md:px-[10%] py-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.163884996897!2d82.07974147487361!3d26.288786686625908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a7c86d691219f%3A0x99a3eb1e7c07f78f!2sKamla%20Nehru%20Institute%20of%20Technology%2C%20Sultanpur%20(U.P.)!5e0!3m2!1sen!2sin!4v1737448249218!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Info;
