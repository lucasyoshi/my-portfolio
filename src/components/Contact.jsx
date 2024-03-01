import React from "react";

import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send("service_85pknim", "template_5us3b9p", data, "Anw8U_n6AcpLb36yU")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };
  return (
    <section
      id="contact"
      className="flex flex-col flex-wrap md:flex-row items-start mt-10 text-seasalt py-16 px-10 bg-jet"
    >
      <h2
        className="w-full flex-grow text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-center drop-shadow-lg"
        style={{
          background: "linear-gradient(to right, #FCFAF9, #48E5C2)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Contact Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 md:mt-10">
        <div className="mb-5 md:mb-0">
          <p className="pb-5 text-base md:text-lg lg:text-xl text-center md:mb-0 text-seasalt tracking-wider mb-0">
            If you want to get in touch, talk to me about a project
            collaboration or just say hi, feel free to send me an email or
            connect with me on social media.
          </p>
          <div className="text-seasalt flex justify-around mt-3 md:mb-0">
            <a
              href="mailto:lucasyoshio0@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-envelope text-4xl pr-4 hover:text-turquoise"></i>
            </a>
            <a
              href="https://github.com/lucasyoshi"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-square-github text-4xl pr-4 hover:text-turquoise"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/hashimotolucas/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin text-4xl pr-4 hover:text-turquoise"></i>
            </a>
          </div>
        </div>
        <div className="mb-5 md:mb-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name", { required: true })}
              className="w-full  p-2 border border-gray-300 rounded text-jet"
              type="text"
              placeholder="Name"
            />
            {errors.name && <p>This field is required</p>}

            <input
              {...register("email", { required: true })}
              className="w-full mt-4 p-2 border text-jet border-gray-300 rounded"
              type="email"
              placeholder="Email"
            />
            {errors.email && <p>This field is required</p>}

            <textarea
              {...register("message", { required: true })}
              className="w-full mt-4 p-2 border text-jet border-gray-300 rounded"
              placeholder="Message"
            ></textarea>
            {errors.message && <p>This field is required</p>}

            <button className="w-full p-2 bg-turquoise text-jet rounded tracking-wide font-bold hover:bg-seasalt hover:text-jet">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
