import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between flex-wrap py-3 px-6 bg-seasalt drop-shadow-md">
      <div className="flex items-center flex-shrink-0 text-jet mr-6">
        <span className="font-semibold text-xl tracking-tight md:flex-grow">
          <a
            href="#home"
            className="block mt-4 md:inline-block md:mt-0 text-jet hover:border-b-2 hover:border-turquoise border-b-2 border-transparent mr-4"
          >
            Lucas Hashimoto
          </a>
        </span>
      </div>
      <div className="sm:block md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 hover:text-jet hover:border-teal-500"
        >
          <svg
            className="fill-current h-3 w-3 text-jet"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? `block` : `hidden`
        } w-full block flex-grow md:flex md:items-center md:w-auto justify-end`}
      >
        <div className="text-sm">
          <a
            href="#about"
            className="block mt-4 md:inline-block md:mt-0 text-jet hover:border-b-2 hover:border-turquoise border-b-2 border-transparent mr-4"
          >
            About
          </a>
          <a
            href="#projects"
            className="block mt-4 md:inline-block md:mt-0 text-jet hover:border-b-2 hover:border-turquoise border-b-2 border-transparent mr-4"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block mt-4 md:inline-block md:mt-0  text-jet hover:border-b-2 hover:border-turquoise border-b-2 border-transparent"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
