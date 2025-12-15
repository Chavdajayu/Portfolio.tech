import React from "react";
import Things from "../components/Things";
import WorkWritten from "../components/WorkWritten";
import WorkImageScroller from "../components/WorkImageScroller";

const Work = () => {
  return (
    <section
      id="work"
      className="w-full bg-black flex flex-col items-center justify-start  px-4"
    >
      <Things name="Things I’ve Built" />

      <div className="w-full max-w-6xl mt-8">
        <div
          className="
            w-full
            border border-[#171819]
            rounded-xl
            flex flex-col
            lg:flex-row
            overflow-hidden
          "
        >
          <WorkWritten />
          <WorkImageScroller />
        </div>
      </div>
    </section>
  );
};

export default Work;
