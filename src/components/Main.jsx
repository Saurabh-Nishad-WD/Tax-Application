import React from "react";
import Button from "../utils/Button";
import judge from "../data/judgee.jpeg";

function Main() {
  return (
    <>
      <div className="relative flex flex-col items-center px-4 md:px-20 py-10 gap-8 min-h-[110vh] w-full bg-center bg-no-repeat">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${judge})`, opacity: 0.7 }}
        ></div>

        {/* Title */}
        <p className="relative text-3xl md:text-5xl text-red font-bold text-center">
          हमारी सेवाएं और समाधान
        </p>

        {/* Description */}
        <p className="relative text-sm md:text-base lg:text-lg font-bold text-center">
          हमारे समर्पित वकील अपने ग्राहकों की जरूरतों को पूरा करने के लिए व्यापक
          सेवाओं की पेशकश करते हैं। आपराधिक मामलों के लिए रक्षा सेवाओं से लेकर
          पारिवारिक सेवाओं जैसे तलाक और बाल हिरासत मामलों तक, हम विशेषज्ञ कानूनी
          प्रतिनिधित्व और मार्गदर्शन प्रदान करने के लिए प्रतिबद्ध हैं। इसके
          अलावा, हम ट्रैफिक उल्लंघन, दुर्घटनाओं और अन्य ऑटोमोटिव कानूनी मामलों
          से संबंधित मुद्दों में सहायता के लिए वाहन सेवाएं भी प्रदान करते हैं।
          हमारे अनुभवी वकीलों की टीम हमारे ग्राहकों की वकालत करने और यह
          सुनिश्चित करने के लिए प्रतिबद्ध है कि उनके कानूनी अधिकारों की रक्षा
          की जाए। चाहे आप किसी कानूनी विवाद का सामना कर रहे हों, अपने परिवार की
          रक्षा करना चाहते हों, या वाहन से संबंधित मुद्दों से निपट रहे हों, हम
          आपकी आवश्यकताओं के लिए विशेषज्ञ कानूनी सहायता प्रदान करने के लिए यहां
          हैं।
        </p>

        {/* Buttons Section */}
        <div className="relative flex flex-wrap w-full max-w-4xl gap-4 justify-center">
          {[
            "आपराधिक मामले",
            "दिवानी मामले",
            "रिट (Writ)",
            "प्रशासनिक सेवा",
            "पारिवारिक सेवाएं",
            "अपील (Appeal)",
            "वाहन सेवाएं",
            "Corporates Services",
            "संशोधन (Revisions)",
          ].map((text, index) => (
            <div
              key={index}
              className="w-[40%] md:w-[30%] lg:w-[20%] h-12 flex justify-center items-center"
            >
              <Button
                text={text}
                dest="https://wa.me/9120633022"
                className="border-[3px] border-gray-800 w-full h-12 text-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Main;
