import React from "react";
import Things from "../components/Things";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Work = () => {
  return (
    <section
      id="work"
      className="w-full bg-black flex flex-col items-center justify-start px-4"
    >
      <Things name="Things I’ve Built" />

      <div className="w-full max-w-6xl mt-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Work;
