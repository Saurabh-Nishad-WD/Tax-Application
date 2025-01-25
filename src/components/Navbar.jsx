import React from "react";
import logo from "../data/tax_img.avif";
import indian_flag from "../data/indian_flag.jpeg";

const Navbar = () => {
  const toggleMobileMenu = () => {
    const menu = document.getElementById("mobile-menu");
    if (menu) menu.classList.toggle("hidden");
  };

  return (
    <>
    <nav className=" items-center justify-between p-4 shadow-md min-h-52 sticky top-0 z-50 bg-white w-full sm:hidden">
    <div
          id="mobile-menu"
          className="flex flex-col fixed top-0 left-0 h-full w-64 shadow-lg bg-white z-50"
        >
          {/* Logo and Close Button */}
          <div className="p-4 flex items-center justify-between border-b">
            <button
              className="text-xl p-2 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              ✖
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-4 p-4">
            <a href="/" className="hover:underline text-base">
              मुख पृष्ठ
            </a>
            <a href="/corporate" className="hover:underline text-base">
              Corporate Legal Services
            </a>
            <a href="/criminal" className="hover:underline text-base">
              आपराधिक(Criminal Cases)
            </a>
            <a href="/civil" className="hover:underline text-base">
              दिवानी(Civil Cases)
            </a>
            <a href="/vehicle" className="hover:underline text-base">
              वाहन सेवाएँ(Vehicle Cases)
            </a>
            <a href="/admin" className="hover:underline text-base">
              प्रशासनिक सेवा(Administrative Service)
            </a>
            <a href="/others" className="hover:underline text-base">
              अन्य सेवाएँ(Others)
            </a>
            <a href="/contact" className="hover:underline text-base">
              Contact
            </a>
          </div>

          {/* Footer */}
          <div className="mt-auto p-4 flex items-center space-x-2 border-t">
            <img
              src={indian_flag}
              alt="India Flag"
              className="h-5 w-5 rounded-full"
            />
            <select className="text-sm border border-gray-300 rounded-md p-1">
              <option>EN</option>
              <option>HI</option>
            </select>
          </div>
        </div>

        {/* Open Menu Button */}
    <div className=" flex justify-between items-center w-full">
        <button
          className="text-xl p-2 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          ☰
        </button>
          <div className="w-[100] h-[60]">
          <img
              src={logo}
              alt="Logo"
              className="h-16 w-44"
            />
          </div>
    </div>
      </nav>

    {/* Sidebar for md and larger screens */}

    <nav class=" items-center justify-between p-4 shadow-md min-h-52 sticky top-0 z-50 bg-white w-full hidden sm:block">

<div className="flex items-center space-x-2">
  <img
    src={logo} // Replace with your logo image path
    alt="Logo"
    className="h-16 w-44"
  />

</div>

{/* Links Section */}
<div className="grid grid-cols-4 gap-x-2 gap-y-3 items-center">
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

{/* Utility Icons Section */}
<div className="flex items-center space-x-4">
  <div className="flex items-center space-x-1">
    <img
      src={indian_flag}// Replace with the Indian flag icon path
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
   
    </>
  );
};

export default Navbar;