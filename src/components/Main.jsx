import React from "react";
import Button from "../utils/Button";

function Main() {
  return (
    <>
      <div className="flex flex-col  items-center px-40 py-20 gap-4 h-[110vh] bg-transparent">
        <p className="text-5xl text-red font-bold">हमारी सेवाएं और समाधान</p>
        <p className="text-center">
          हमारे समर्पित वकील अपने ग्राहकों की जरूरतों को पूरा करने के लिए व्यापक
          सेवाओं की पेशकश करते हैं। आपराधिक मामलों के लिए रक्षा सेवाओं से लेकर
          पारिवारिक सेवाओं जैसे तलाक और बाल हिरासत मामलों तक, हम विशेषज्ञ कानूनी
          प्रतिनिधित्व और मार्गदर्शन प्रदान करने के लिए प्रतिबद्ध हैं। इसके
          अलावा, हम ट्रैफिक उल्लंघन, दुर्घटनाओं और अन्य ऑटोमोटिव कानूनी मामलों
          से संबंधित मुद्दों में सहायता के लिए वाहन सेवाएं भी प्रदान करते हैं।
          हमारे अनुभवी वकीलों की टीम हमारे ग्राहकों की वकालत करने और यह
          सुनिश्चित करने के लिए प्रतिबद्ध है कि उनके कानूनी अधिकारों की रक्षा की
          जाए। चाहे आप किसी कानूनी विवाद का सामना कर रहे हों, अपने परिवार की
          रक्षा करना चाहते हों, या वाहन से संबंधित मुद्दों से निपट रहे हों, हम
          आपकी आवश्यकताओं के लिए विशेषज्ञ कानूनी सहायता प्रदान करने के लिए यहां
          हैं।
        </p>

        <div className="flex flex-wrap w-[90%] gap-x-[15vh] justify-center items-center">
          <div className=" w-[40vh] h-[20vh] ">
            <button>
              <Button text="आपराधिक मामले" className="border-[3px] border-gray-800 w-[30vh]" />
            </button>
          </div>
          <div className="w-[40vh] h-[20vh]">
            <button>
              <Button text={"दिवानी मामले"}  className="border-[3px] border-gray-800 w-[30vh]"/>
            </button>
          </div>
          <div className="w-[40vh] h-[20vh]">
            <button>
              <Button text={"रिट (Writ)"}  className="border-[3px] border-gray-800 w-[30vh]"/>
            </button>
          </div>
          <div className="w-[40vh] h-[20vh]">
            <button>
              <Button text={"प्रशासनिक सेवा"}  className="border-[3px] border-gray-800 w-[30vh]"/>
            </button>
          </div>
          <div className="w-[40vh] h-[20vh]">
            <button>
              <Button text={"पारिवारिक सेवाएं"}  className="border-[3px] border-gray-800 w-[30vh]"/>
            </button>
          </div>
          <div className="w-[40vh] h-[20vh]">
            <button>
              <Button text={"अपील (Appeal)" } className="border-[3px] border-gray-800 w-[30vh]"/>
            </button>
          </div>
          <div className="w-[40vh] h-[20vh]">
            <button>
              <Button text={"वाहन सेवाएं"}  className="border-[3px] border-gray-800 w-[30vh]"/>
            </button>
          </div>
          <div className="w-[40vh] h-[20vh]">
            <button>
              <Button text={"Corporates Services"}  className="border-[3px] border-gray-800 w-[30vh]"/>
            </button>
          </div>
          <div className="w-[40vh] h-[20vh]">
            <button>
              <Button text={"संशोधन (Revisions)"}  className="border-[3px] border-gray-800 w-[30vh]"/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
