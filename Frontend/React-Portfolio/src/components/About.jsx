
import React from "react";

const About = () => {
  return (
    <section
  id="about"
  className={`py-20 ${
    darkMode ? "bg-slate-900" : "bg-white"
  }`}
>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          About <span className="text-red-600">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-10 mt-12 items-center">
          
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">
              I'm Aman Kumar Yadav
            </h3>

            <p className="text-gray-600 leading-7">
              I am a Bachelor of Information Management (BIM) student
              and a MERN Stack enthusiast. I enjoy creating responsive,
              clean and user-friendly web applications.
            </p>

            <p className="text-gray-600 leading-7 mt-4">
              I am continuously improving my skills in React,
              JavaScript and modern web development while working
              on practical projects.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <div className="border rounded-lg p-6 shadow-sm">
              <p className="mb-4">
                <span className="font-semibold">Education:</span> BIM
              </p>

              <p className="mb-4">
                <span className="font-semibold">Role:</span> Frontend Developer
              </p>

              <p className="mb-4">
                <span className="font-semibold">Focus:</span> MERN Stack
              </p>

              <p>
                <span className="font-semibold">Location:</span> Nepal
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
