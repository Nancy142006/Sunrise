import { useState } from "react";
import home from "../assets/icons/home.svg";
import risk from "../assets/icons/risk.svg";
import graph from "../assets/icons/graph.svg";
import calendar from "../assets/icons/calendar.svg";
import toggle from "../assets/icons/toggle.svg";

const icons = [
  { id: "home", src: home, label: "Home" },
  { id: "risk", src: risk, label: "Risk" },
  { id: "graph", src: graph, label: "Task" },
  { id: "calendar", src: calendar, label: "Calendar" },
];

const Sidebar = () => {
  const [selected, setSelected] = useState("home");
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`${expanded ? "w-56" : "w-[78px]"} 
                  relative h-[34rem] bg-[#433E3E] rounded-md 
                  flex flex-col justify-between py-6
                  transition-all duration-300`}
    >
      <div className="flex flex-col items-start space-y-8 px-2.5">
        {icons.map((icon) => (
          <div
            key={icon.id}
            onClick={() => setSelected(icon.id)}
            className={`flex items-center gap-4 w-full h-[3rem] p-4 rounded-xl cursor-pointer
                        transition ${
                          selected === icon.id
                            ? "bg-[#FFC235]"
                            : "hover:bg-yellow-300"
                        }`}
          >
            <img
              src={icon.src}
              alt={`${icon.id}-icon`}
              className={`transition ${
                selected === icon.id ? "invert" : "invert brightness-0"
              }`}
            />
            {expanded && (
              <span className="text-white text-sm font-medium">
                {icon.label}
              </span>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={() => setExpanded((prev) => !prev)}
        className={`absolute top-[5.4rem] right-0 -translate-y-1/2 translate-x-1/2
                    bg-[#433E3E] border-[0.3rem] border-[#292221] rounded-full p-2
                    transition-transform duration-300
                    ${expanded ? "rotate-180" : ""}`}
      >
        <img src={toggle} alt="toggle-button" className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Sidebar;
