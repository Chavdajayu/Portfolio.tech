
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="
        w-full
        border border-[#171819]
        rounded-xl
        flex flex-col
        lg:flex-row
        overflow-hidden
        mb-8
      "
    >
      {/* WRITTEN CONTENT */}
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
        <div>
          <div className="flex items-center gap-2 text-xl sm:text-2xl font-semibold">
            <img src={project.logo} alt="logo" className="w-7 h-7" />
            <h1>{project.title}</h1>
          </div>

          <p className="mt-4 text-sm sm:text-base text-[#C5C5C5] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* TECH STACK */}
        <div className="mt-6 flex flex-wrap gap-4">
          {project.technologies.map((tech, index) => (
            <img key={index} src={tech.icon} className="w-7" alt={tech.name} title={tech.name} />
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-6">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
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

      {/* IMAGE SCROLLER */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
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
              animate-autoscroll
            "
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
