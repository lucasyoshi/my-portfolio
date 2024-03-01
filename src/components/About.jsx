import React, { useState, useEffect } from "react";
import bgUrl from "../assets/img/bg.webp";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    {
      icon: "fa-solid fa-terminal",
      description: "Languages",
      id: 1,
      skillList: [
        { skill: "HTML" },
        { skill: "CSS" },
        { skill: "JavaScript" },
        { skill: "TypeScript" },
        { skill: "C#" },
        { skill: "Java" },
        { skill: "Dart" },
        { skill: "Python" },
      ],
    },
    {
      icon: "fa-solid fa-display",
      description: "Front-end",
      skillList: [
        { skill: "React" },
        { skill: "Next.js" },
        { skill: "TailwindCSS" },
        { skill: "Bootstrap" },
        { skill: "Material UI" },
        { skill: "SASS" },
      ],
    },
    {
      icon: "fa-solid fa-laptop-code",
      description: "Back-end",
      skillList: [
        { skill: "ASP.NET Core" },
        { skill: "Entity Framework" },
        { skill: "NodeJS" },
        { skill: "ExpressJS" },
        { skill: "Java" },
      ],
    },
    {
      icon: "fa-solid fa-database",
      description: "Database",
      skillList: [
        { skill: "MS SQL" },
        { skill: "PostgreSQL" },
        { skill: "Firebase" },
        { skill: "Oracle" },
      ],
    },
    {
      icon: "fa-solid fa-mobile",
      description: "Mobile",
      skillList: [{ skill: "Flutter" }, { skill: "Android Studio" }],
    },
    {
      icon: "fa-solid fa-screwdriver-wrench",
      description: "Tools",
      skillList: [
        { skill: "Git" },
        { skill: "GitHub" },
        { skill: "Docker" },
        { skill: "Jira" },
        { skill: "Figma" },
        { skill: "Adobe Photoshop" },
      ],
    },
  ];

  const checkVisible = () => {
    const el = document.getElementById("about");
    const rect = el.getBoundingClientRect();
    const viewHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight
    );
    setIsVisible(!(rect.bottom < 0 || rect.top - viewHeight >= 0));
  };

  useEffect(() => {
    window.addEventListener("scroll", checkVisible);
    return () => {
      window.removeEventListener("scroll", checkVisible);
    };
  }, []);

  return (
    <section
      id="about"
      className={`flex flex-col items-center mt-3 py-16 px-4 min-h-screenMinusNavbar bg-cover bg-center bg-opacity-50 bg-seasalt`}
      style={{ backgroundImage: `url(${bgUrl})`, backgroundColor: "#FCFAF9" }}
    >
      <div
        className={`flex flex-col items-center pt-6 ${
          isVisible ? "animate-slideInFromLeft" : ""
        }`}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 md:mb-8 text-black drop-shadow-lg">
          About Me
        </h1>
        <p className="text-base md:text-lg lg:text-xl drop-shadow-md mb-10 md:mb-6 text-black tracking-wider text-center">
          I'm a software developer based in Edmonton, Alberta, CA. I enjoy
          creating aesthetically pleasing and functional websites and
          applications.
        </p>
      </div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-4/5 ${
          isVisible ? "animate-fadeIn" : ""
        }`}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className=" flex flex-col flex-grow items-center border rounded shadow-md bg-seasalt/75 "
          >
            <div className="flex w-full justify-center items-center h-14 bg-jet rounded-t text-seasalt px-3">
              <i className={`${skill.icon} text-3xl mr-3`} />
              <p className="text-sm md:text-base lg:text-lg font-semibold">
                {skill.description}
              </p>
            </div>
            <div className="p-3 grid grid-cols-2 gap-x-8 gap-y-4 md:gap-4 text-jet font-medium tracking-wide justify-items-center items-center">
              {skill.skillList &&
                skill.skillList.map((item, index) => (
                  <div
                    key={index}
                    className="hover:border-turquoise border-b-2 border-transparent text-center"
                  >
                    {item.skill}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
      <div className="md:col-span-2 flex justify-center mt-10">
        <i className="fa-solid fa-arrow-down text-seasalt text-2xl animate-bounce"></i>
      </div>
    </section>
  );
};

export default About;
