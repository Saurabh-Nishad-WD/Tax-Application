import React from 'react'

function Form() {
  return (
    <>
      <div className="relative z-10 bg-cover bg-center min-h-screen flex items-center justify-end pr-32">
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md w-full ">
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                आपका नाम
              </label>
              <input
                type="text"
                id="name"
                placeholder="अपना नाम लिखें"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
  
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                आपका ईमेल पता
              </label>
              <input
                type="email"
                id="email"
                placeholder="अपना ईमेल पता दर्ज करें (यदि नही है तो खाली छोड़ दें )"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
  
            {/* Mobile Number Field */}
            <div>
              <label htmlFor="mobile" className="block text-gray-700 font-medium mb-2">
                मोबाइल नंबर*
              </label>
              <input
                type="tel"
                id="mobile"
                placeholder="आपका मोबाइल नंबर"
                required
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
  
            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                आपके केस के बारे में संक्षिप्त जानकारी*
              </label>
              <textarea
                id="message"
                placeholder="अपना संदेश यहाँ लिखें"
                rows="4"
                required
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              ></textarea>
            </div>
  
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              >
                अपने केस के बारे में पूछें
              </button>
            </div>
          </form>
        </div>
      </div>
  </>
  
  )
}

export default Form
