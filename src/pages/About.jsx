import React from "react";
import Things from "../components/Things";
import Last from "../components/Last";

const About = () => {
  return (
    <section
      id="about"
      className="
        w-full
        bg-black
        flex flex-col
        items-center
        py-16
        px-4
      "
    >
      <Things name="Life Behind the Pixels" />

      <div className="w-full mt-10">
        <Last />
      </div>
    </section>
  );
};

export default About;
