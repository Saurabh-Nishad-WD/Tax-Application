import React from "react";
import image from "../data/profile_pic.jpeg";
function Last() {
  return (
    <div className="h-[75vh] bg-blue-700 flex justify-center items-center">
      <div className="w-[90vh] h-[60vh] text-white  flex flex-col items-center justify-center gap-y-2">
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
            src={image}
            alt="profile pic error"
            className="h-16 w-16 object-cover rounded-full"
          />
        </div>
        <p>Jhon Wick</p>
        </div>
      </div>
    </div>
  );
}

export default Last;
