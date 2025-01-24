import React from "react";
import { useState } from 'react';
import {useFirebase} from "../context/Firebase";
const ContactForm = () => {
      const firebase = useFirebase();
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [queary, setQueary] = useState("");
    
      const handleSubmit = (event) => {
        event.preventDefault(); // Prevent form from reloading the page
        firebase
          .putData(`query/${name}`, { name, email, queary })
          .then(() => {
            alert("Data saved successfully!");
          })
          .catch((error) => {
            alert("Error saving data: " + error.message);
          });
      };
  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contact Your Legal Advocate</h1>
          <p className="text-gray-600 mb-6 text-base sm:text-lg">
            Reach out to our expert team for assistance with writs, appeals, and revisions. 
            We’re here to help you navigate your legal journey.
          </p>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">Contact</p>
              <p className="text-sm sm:text-base">+91 9910508972</p>
            </div>
            <div>
              <p className="font-semibold">Support</p>
              <p className="text-sm sm:text-base">lawyer@thelexlaw.com</p>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                Your First Name
              </label>
              <input
              onChange={(e) => setName(e.target.value)}
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                className="mt-1 block w-full px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your Email Address<span className="text-red-500">*</span>
              </label>
              <input
              onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="mt-1 block w-full px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Your Message<span className="text-red-500">*</span>
              </label>
              <textarea
              onChange={(e) => setQueary(e.target.value)}
                id="message"
                placeholder="Enter your message here"
                rows="4"
                className="mt-1 block w-full px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 text-sm sm:text-base rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={handleSubmit}
            >
              Submit Your Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
