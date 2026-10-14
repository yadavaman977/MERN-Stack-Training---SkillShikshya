
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home", link: "#home" },
    { id: 2, text: "About", link: "#about" },
    { id: 3, text: "Skills", link: "#skills" },
    { id: 4, text: "Projects", link: "#projects" },
    { id: 5, text: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-white shadow-md">

      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a
            href="#home"
            className="flex items-center space-x-2"
          >
            <img
              src="/logo.jpg"
              alt="Logo"
              className="h-12 w-12 rounded-full object-cover"
            />

            <div>
              <h1 className="font-semibold text-xl">
                Yadav{" "}
                <span className="text-blue-500 text-2xl">
                  Aman
                </span>
              </h1>

              <p className="text-sm text-gray-500">
                Web Developer
              </p>
            </div>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="cursor-pointer hover:text-blue-500 transition duration-200"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setMenu(!menu)}
            className="md:hidden cursor-pointer"
          >
            {menu ? (
              <IoIosClose size={30} />
            ) : (
              <CiMenuBurger size={24} />
            )}
          </button>

        </div>

        {/* Mobile Menu */}
        {menu && (
          <div className="md:hidden absolute left-0 top-16 w-full bg-white shadow-md">

            <ul className="flex flex-col items-center gap-6 py-8 text-xl">

              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    onClick={() => setMenu(false)}
                    className="cursor-pointer hover:text-blue-500 transition duration-200"
                  >
                    {item.text}
                  </a>
                </li>
              ))}

            </ul>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
