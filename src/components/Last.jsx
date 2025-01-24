import React from "react";
import image from "../data/profile_pic.jpeg";

function Last() {
  return (
    <div className="h-auto min-h-[75vh] bg-blue-700 flex justify-center items-center px-4">
      <div className="w-full max-w-4xl text-white flex flex-col items-center justify-center gap-y-4 text-center">
        {/* Rating Section */}
        <div className="text-2xl">★★★★★</div>

        {/* Review Text */}
        <div>
          <p className="text-lg md:text-xl font-semibold">
            TLC ने शानदार कानूनी सेवाएं दीं। उनके वकील की लिस्ट और संवाद प्रणाली
            से सब कुछ बहुत आसान हो गया। अगर आपको कानूनी मदद चाहिए, तो मैं इनकी
            पूरी तरह से अनुशंसा करता हूँ।
          </p>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center pt-8">
          <div className="h-16 w-16 md:h-20 md:w-20 rounded-full overflow-hidden">
            <img
              src={image}
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="text-sm md:text-base font-medium mt-2">Jhon Wick</p>
        </div>
      </div>
    </div>
  );
}

export default Last;
