
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 border-t">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 text-center">

        <h2 className="text-xl font-semibold">
          Yadav <span className="text-blue-500">Aman</span>
        </h2>

        <p className="text-gray-500 mt-2">
          Frontend Developer & MERN Stack Enthusiast
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-xl mt-5">
          <FaFacebook className="cursor-pointer hover:text-blue-600 transition" />
          <FaInstagram className="cursor-pointer hover:text-pink-600 transition" />
          <FaLinkedin className="cursor-pointer hover:text-blue-700 transition" />
          <FaGithub className="cursor-pointer hover:text-gray-700 transition" />
        </div>

        <div className="border-t border-gray-300 mt-7 pt-5">
          <p className="text-gray-500 text-sm">
            © 2026 Yadav Aman. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
