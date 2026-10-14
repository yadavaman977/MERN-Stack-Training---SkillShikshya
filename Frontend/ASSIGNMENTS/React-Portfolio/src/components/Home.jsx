
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaReact,
  FaNode,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";

const Home = ({ darkMode }) => {
  return (
    <section
      id="home"
      className={`min-h-screen pt-20 ${
        darkMode ? "bg-slate-950" : "bg-blue-50"
      }`}
    >
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20">

        <div className="flex flex-col md:flex-row items-center">

          {/* Left */}
          <div className="w-full md:w-1/2 mt-10">

            <p
              className={`text-lg mb-2 ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Welcome to my portfolio
            </p>

            <h1 className="text-4xl md:text-6xl font-bold">
              Hello, I'm{" "}
              <span className="text-blue-600">Aman</span>
            </h1>

            <h2
              className={`text-2xl md:text-3xl font-semibold mt-3 ${
                darkMode ? "text-slate-200" : "text-slate-700"
              }`}
            >
              Frontend Developer
            </h2>

            <div className="w-16 h-1 bg-orange-500 mt-5 rounded-full"></div>

            <p
              className={`mt-5 max-w-lg leading-7 ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              I'm a BIM student and MERN Stack enthusiast.
              I enjoy building clean, responsive and user-friendly
              web applications using modern technologies.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">

              <a
                href="#projects"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className={`px-6 py-3 rounded-lg border transition ${
                  darkMode
                    ? "border-slate-600 hover:bg-slate-800"
                    : "border-slate-400 hover:bg-white"
                }`}
              >
                Contact Me
              </a>

            </div>

            {/* Icons */}
            <div className="flex flex-col sm:flex-row gap-10 mt-10">

              <div>
                <h3 className="font-semibold mb-3">
                  Available On
                </h3>

                <div className="flex gap-5 text-2xl">
                  <FaFacebook className="hover:text-blue-600" />
                  <FaInstagram className="hover:text-pink-600" />
                  <FaLinkedin className="hover:text-blue-700" />
                  <FaGithub className="hover:text-gray-500" />
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">
                  Currently Working On
                </h3>

                <div className="flex gap-5 text-2xl">
                  <DiMongodb className="hover:text-green-600" />
                  <SiExpress className="hover:text-gray-500" />
                  <FaReact className="hover:text-cyan-500" />
                  <FaNode className="hover:text-green-600" />
                </div>
              </div>

            </div>

          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center mt-12">
            <div className="w-64 h-64 md:w-80 md:h-80">
              <img
                src="https://img.magnific.com/free-vector/illustrator-designer-man-holding-digital-tablet_107791-12062.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Developer"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
