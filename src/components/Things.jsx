import React from "react";
import arrow from "../image/Arrow.svg";

const Things = (props) => {
  return (
    <div
      className="
        w-full
        max-w-6xl
        bg-black
        flex flex-col
        px-10
        sm:px-5
        sm:py-3
      "
    >
      <h1 className="things text-base sm:text-lg font-bold">
        {props.name}
      </h1>

      <img
        src={arrow}
        alt=""
        className="
        
          w-70
          px-30
          sm:w-70
          sm:px-30
          md:w-70
          md:px-30
        "
      />
    </div>
  );
};

export default Things;
