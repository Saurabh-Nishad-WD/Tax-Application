import React from "react";
import logo from "../data/tax_img.avif";
import indian_flag from "../data/indian_flag.jpeg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 shadow-md min-h-52 sticky top-0 z-50 bg-white w-full">

      <div className="flex items-center space-x-2">
        <img
          src={logo} // Replace with your logo image path
          alt="Logo"
          className="h-12 sm:h-16 w-32 sm:w-44"
        />
      </div>

      {/* Links Section */}
      <div className="hidden sm:grid grid-cols-4 gap-x-2 gap-y-3 items-center">
        <a href="/" className="hover:underline">
          मुख पृष्ठ
        </a>
        <a href="/corporate" className="hover:underline">
          Corporate Legal Services
        </a>
        <a href="/criminal" className="hover:underline">
          आपराधिक(Criminal Cases)
        </a>
        <a href="/civil" className="hover:underline">
          दिवानी(Civil Cases)
        </a>
        <a href="/vehicle" className="hover:underline col-span-2">
          वाहन सेवाएँ(Vehicle Cases)
        </a>
        <a href="/admin" className="hover:underline">
          प्रशासनिक सेवा(Administrative Service)
        </a>
        <a href="/others" className="hover:underline">
          अन्य सेवाएँ(Others)
        </a>
        <a href="/contact" className="hover:underline">
          Contact
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="sm:hidden flex items-center space-x-4">
        <button className="text-lg" aria-label="Toggle Menu">
          ☰
        </button>
      </div>

      {/* Utility Icons Section */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <img
            src={indian_flag} // Replace with the Indian flag icon path
            alt="India Flag"
            className="h-5 w-5 rounded-full"
          />
          <select className="text-sm border border-gray-300 rounded-md p-1">
            <option>EN</option>
            <option>HI</option>
          </select>
        </div>
        <a href="/cart" className="text-lg">
          🛒
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
