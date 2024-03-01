import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Draw App",
      description:
        "The proposed project, named DRAW (Digital Retail for Art and Writing), aims to develop a specialized stationery e- commerce app using Flutter. This project aims to combine two things I’m passionate for: stationery and programming. DRAW is designed to be a one-stop destination for stationery enthusiasts, offering a seamless and enjoyable shopping experience. The app will feature a diverse range of stationery items, including pens, pencils, notebooks, and organizational tools.  ",
      technologies: ["Dart", "Flutter", "Firebase"],
      image: "draw-app.webp",
      link: "https://youtu.be/VxyudjJndXU",
      github: "https://github.com/lucasyoshi/draw/tree/main",
    },
    {
      id: 2,
      name: "LifeCycle",
      description:
        "The project was done as a final course project (Intermediate Application Development) and consisted in developing an application for a Management System that would allow employees to manage various aspects of the business via an Intranet application. The application had 4 parts Purchasing, Servicing, Sales and Receiving. The latter was developed by myself with the following requirement: The application must allow for the receiving of incoming products from suppliers.",
      technologies: ["C#", ".NET Core", "MVC", "Microsoft SQL Server"],
      image: "LifeCycle.webp",
      link: "",
      github:
        "https://github.com/DMIT-2018/2018-jan-2023-a03-project-team3-a03-jan2023/tree/main/eBikes/Receiving",
    },
    {
      id: 3,
      name: "Edmonton Property Data CRUD",
      description:
        "This project's goal was to develop  the backend of an application with REST API endpoints to query data provided by the City of Edmonton on property assessment data for the current calendar year. The dataset contains over 400K records that processing the data from CSV file directly using the Java Stream API would lead to high CPU usage and high memory usage. To resolve the issue with high CPU usage and high memory usage you will import the data from the csv file to a SQL database with a ExpressJS backend and ReactJS frontend",
      technologies: [
        "ReactJS",
        "ExpressJS",
        "NodeJS",
        "REST API",
        "Microsoft SQL Server",
      ],
      image: "LifeCycle.webp",
      link: "",
      github:
        "https://github.com/DMIT-2018/2018-jan-2023-a03-project-team3-a03-jan2023/tree/main/eBikes/Receiving",
    },
  ];

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center mt-3 py-16 px-6 min-h-screenMinusNavbar text-jet"
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 drop-shadow-lg">
        Projects
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded border-2 p-4 hover:shadow-lg"
          >
            <h3
              className="font-bold mb-2"
              style={{
                background: "linear-gradient(to right, #333333, #48E5C2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {project.name}
            </h3>
            <p className="text-justify font-normal text-sm tracking-wide">
              {project.description}
            </p>
            <p className="text-justify font-bold text-sm tracking-wide mt-5">
              Technologies used:
            </p>
            <div className="grid grid-cols-3 gap-2 mt-1">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="flex items-center justify-center bg-turquoise text-jet rounded-md px-2 h-10 text-xs font-medium tracking-wide text-pretty text-center line-clamp-2 shadow-md hover:text-seasalt hover:bg-jet"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-justify font-bold text-sm tracking-wide mt-5">
              Resources
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-turquoise hover:text-jet mr-4"
              >
                <i class="fa-brands fa-youtube text-3xl"></i>
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-turquoise hover:text-jet"
            >
              <i className="fa-brands fa-square-github text-3xl"></i>
            </a>
          </div>
        ))}
      </div>
      <div className="md:col-span-2 flex justify-center mt-10">
        <i className="fa-solid fa-arrow-down text-jet text-2xl animate-bounce"></i>
      </div>
    </section>
  );
};

export default Projects;
