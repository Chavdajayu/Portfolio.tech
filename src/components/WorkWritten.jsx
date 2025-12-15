import React from "react";
import poopcorn from "../image/popcorn.png";
import tailwind from "../image/tailwind.svg";
import mysql from "../image/mysql.svg";
import nodejs from "../image/nodejs.svg";
import react from "../image/react.svg";

const WorkWritten = () => {
  return (
    <div
      className="
        w-full
        lg:w-[40%]
        flex flex-col
        justify-center
        px-6 py-8
        text-white
      "
    >
      {/* TITLE */}
      <div>
        <div className="flex items-center gap-2 text-xl sm:text-2xl font-semibold">
          <img src={poopcorn} alt="logo" className="w-7 h-7" />
          <h1>ActionVerse</h1>
        </div>

        <p className="mt-4 text-sm sm:text-base text-[#C5C5C5] leading-relaxed">
          ActionVerse is a movie and series booking platform built with the MERN
          stack. It features a modern UI, smooth navigation, and a real-world
          ticket booking experience.
        </p>
      </div>

      {/* TECH STACK */}
      <div className="mt-6 flex flex-wrap gap-4">
        <img src={tailwind} className="w-7" alt="tailwind" />
        <img src={mysql} className="w-7" alt="mysql" />
        <img src={react} className="w-7" alt="react" />
        <img src={nodejs} className="w-7" alt="nodejs" />
      </div>

      {/* BUTTON */}
      <div className="mt-6">
        <a
          href="https://actionverse-sand.vercel.app/"
          className="
            inline-block
            border border-white
            px-6 py-2
            rounded-lg
            text-sm sm:text-base
            font-semibold
            hover:bg-white hover:text-black transition
          "
        >
          Visit Site
        </a>
      </div>
    </div>
  );
};

export default WorkWritten;
