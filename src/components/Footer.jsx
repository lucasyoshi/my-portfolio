import React from "react";

const Footer = () => {
  return (
    <footer className="bg-seasalt text-jet py-6 px-6">
      <div className="flex justify-between items-center">
        <div className="text-base md:text-sm lg:text-md text-black tracking-wider">
          &copy; {new Date().getFullYear()} Lucas Hashimoto
          <p className="tracking-normal font-normal">Created using React + Tailwind</p>
        </div>
        
        <div className="text-sm">
          <a
            rel="noopener noreferrer"
            href="mailto:lucasyoshio0@gmail.com"
            target="_blank"
          >
            <i className="fa-solid fa-envelope text-3xl pr-4 hover:text-turquoise"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/lucashashimoto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-jet hover:text-turquoise mr-4"
          >
            <i class="fa-brands fa-linkedin text-3xl"></i>
          </a>
          <a
            href="https://github.com/lucasyoshi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-jet hover:text-turquoise"
          >
            <i class="fa-brands fa-square-github text-3xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
