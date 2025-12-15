import React from "react";
import project from "../image/project.png";

const WorkImageScroller = () => {
  return (
    <a
      href="https://actionverse-sand.vercel.app/"
      className="
        w-full
        lg:w-[60%]

        flex items-center justify-center
        p-4
      "
    >
      <div
        className="
          relative
          w-full
          max-w-lg
          lg:max-w-none
          h-[260px]
          sm:h-[320px]
          md:h-[380px]
          lg:h-[320px]
          border border-[#171819]
          rounded-xl
          overflow-hidden
          bg-black
          "
          >
        <div
          className="
          h-full w-full
        
            overflow-y-scroll
            no-scrollbar
            animate-[autoscroll_3s_linear_infinite_alternate]
          "
        >
          <img
            src={project}
            alt="project"
            className="w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes autoscroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-12%); }
        }
      `}</style>
    </a>
  );
};

export default WorkImageScroller;
