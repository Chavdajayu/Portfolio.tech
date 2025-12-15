import Things from "../components/Things";
import SkillCards from "../components/SkillCards";
import { Frontend, Backend } from "../Skills";

const Skill = () => {
  return (
    <section
      id="skill"
      className="
        w-full
        bg-black
        flex flex-col
        items-center
        py-16
        px-4
      "
    >
      <Things name="Things I’m Good At" />

      {/* SKILL CONTAINERS */}
      <div
        className="
          w-full
          max-w-6xl
          mt-10
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
        "
      >
        {/* FRONTEND */}
        <div
          className="
            border border-[#1A1A1A]
            rounded-xl
            bg-black
            p-6
            flex flex-col
          "
        >
          <div className="flex flex-col items-center mb-6">
            <p className="font-semibold text-lg sm:text-xl">Frontend</p>
            <span className="mt-2 h-[2px] w-10 bg-[#EC1D24] rounded-full"></span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {Frontend.map((elem, idx) => (
              <SkillCards key={idx} elem={elem} />
            ))}
          </div>
        </div>

        {/* BACKEND */}
        <div
          className="
            border border-[#1A1A1A]
            rounded-xl
            bg-black
            p-6
            flex flex-col
          "
        >
          <div className="flex flex-col items-center mb-6">
            <p className="font-semibold text-lg sm:text-xl">Backend</p>
            <span className="mt-2 h-[2px] w-10 bg-[#EC1D24] rounded-full"></span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {Backend.map((elem, idx) => (
              <SkillCards key={idx} elem={elem} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
