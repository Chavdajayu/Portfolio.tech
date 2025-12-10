import React, { useEffect, useState } from "react";

const menu = [
  { label: "Home", id: "home" },
  { label: "Work", id: "work" },
  { label: "Qualification", id: "qualification" },
  { label: "Skill", id: "skill" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
 ];

const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    menu.forEach((item) => {
      const sec = document.getElementById(item.id);
      if (sec) observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-[16%] w-full text-white flex items-center justify-evenly fixed bg-transparent z-50">
      <div className="flex px-5 py-2  border-1 border-[#191A1C] text-center fixed gap-3 bg-transparent backdrop-blur-md mt-3">

        {/* MENU ITEMS */}
        {menu.map((item) => (
          <div key={item.id} className="relative flex flex-col items-center ">
            <a
              href={`#${item.id}`}
              className={`scale-85 transition-all ${
                active === item.id ? "opacity-100" : "opacity-60"
              }`}
            >
              {item.label}
            </a>

            {/* 🔴 Red Dot Under Active Item */}
            {active === item.id && (
              <span className="w-[10%] h-[20%] bg-red-500 rounded-full absolute -bottom-1 transition-all"></span>
            )}
          </div>
        ))}

        {/* ICON (unchanged) */}
        <h1 className="scale-80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-disc3"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M6 12c0-1.7.7-3.2 1.8-4.2"></path>
            <circle cx="12" cy="12" r="2"></circle>
            <path d="M18 12c0 1.7-.7 3.2-1.8 4.2"></path>
          </svg>
        </h1>

      </div>
    </div>
  );
};

export default Navbar;
