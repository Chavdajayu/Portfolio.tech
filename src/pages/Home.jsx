import React from "react";
import img from "../image/Iamjaydeep.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="
        min-h-[80%] w-full bg-black
        flex flex-col items-center justify-center
        px-4 pt-18
      "
    >
      {/* IMAGE */}
      <div className="w-full flex justify-center">
        <img
          src={img}
          alt="Jaydeep"
          className="
            h-40
            sm:h-32
            md:h-44
            lg:h-45
            object-contain rounded-xl
          "
        />
      </div>

      {/* TEXT CONTENT */}
      <div className="mt-8 flex flex-col items-center text-center">
        <h1
          className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            font-bold
          "
        >
          Hi, I'm Jaydeep
        </h1>

        <p
          className="
            mt-3
            text-bold
            sm:text-base
            md:text-lg
            text-[#777B84]
            max-w-lg
            md:max-w-xl
            lg:max-w-xl
          "
        >
          I’m a developer and creator who builds seamless digital experiences.
          With expertise in React, Node.js, Express, and MongoDB, I craft
          full-stack applications that are both functional and engaging. My
          front-end skills in JavaScript, Tailwind CSS, and Bootstrap help me
          design interfaces that feel clean, intuitive, and responsive.
        </p>
      </div>
    </section>
  );
};

export default Home;
