import React from "react";
import homeImage from "../assets/img/home.webp";

const Home = () => {
  return (
    <section
      id="home"
      className="grid grid-cols-1 md:grid-cols-2 items-center py-16 px-10 h-screenMinusNavbar z-0"
      style={{ marginTop: "54px" }}
    >
      <div className="animate-slideInFromLeft md:pr-4 pt-12 md:pt-0">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-black"
          style={{
            background: "linear-gradient(to right, #333333, #48E5C2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Hi, I'm Lucas Hashimoto
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-10 md:mb-0 text-black tracking-wider">
          I'm a software developer specializing in building (and occasionally
          designing) exceptional websites, applications, and everything in
          between.
        </p>
      </div>
      <div className="flex justify-center animate-fadeIn z-10">
        <img
          src={homeImage}
          alt="Coffee and Keyboard"
          className="md:w-fit w-4/5 drop-shadow-lg z-10"
          style={{ maxHeight: "35rem" }}
        />
      </div>
      <div className="md:col-span-2 flex justify-center mt-10 md:mt-auto">
        <i className="fa-solid fa-arrow-down text-jet text-2xl animate-bounce"></i>
      </div>
    </section>
  );
};

export default Home;
