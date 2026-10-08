import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">

        <h2 className="text-3xl md:text-4xl font-bold text-center">
          My <span className="text-red-600">Skills</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white border rounded-lg p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition"
            >
              <div className="text-4xl flex justify-center mb-3">
                {skill.icon}
              </div>

              <h3 className="font-semibold">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;