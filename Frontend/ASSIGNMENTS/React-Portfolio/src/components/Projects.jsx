
import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "PharmaConnect",
      description:
        "A multi-vendor online pharmacy platform where customers can purchase medicines and vendors can manage their products.",
      technologies: "HTML, CSS, JavaScript, PHP, MySQL",
      image:
        "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80",
    },
    {
      title: "Personal Portfolio",
      description:
        "A responsive personal portfolio website to showcase my skills, projects and contact information.",
      technologies: "React, Tailwind CSS, JavaScript",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    },
    {
      title: "Product Management",
      description:
        "A React application that fetches products from an API and provides CRUD operations.",
      technologies: "React, Axios, REST API",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">

        <h2 className="text-3xl md:text-4xl font-bold text-center">
          My <span className="text-red-600">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-6">
                  {project.description}
                </p>

                <p className="text-sm text-gray-500 mt-4">
                  <span className="font-semibold">Tech:</span>{" "}
                  {project.technologies}
                </p>

                <button className="mt-5 bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
