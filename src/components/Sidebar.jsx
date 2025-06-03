import { useState } from "react";
import home from "../assets/icons/home.svg";
import risk from "../assets/icons/risk.svg";
import graph from "../assets/icons/graph.svg";
import calendar from "../assets/icons/calendar.svg";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional: install lucide-react

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
      className={`${
        expanded ? "w-56" : "w-[78x]"
      } h-[34rem] bg-[#433E3E] rounded-md flex flex-col justify-between py-6 transition-all duration-300`}
    >
      <div className="flex flex-col items-start space-y-6 px-2.5">
        {icons.map((icon) => (
          <div
            key={icon.id}
            onClick={() => setSelected(icon.id)}
            className={`flex items-center gap-4 w-full h-[3rem] p-4 rounded-xl cursor-pointer transition ${
              selected === icon.id ? "bg-[#FFC235]" : "hover:bg-yellow-300"
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
              <span className="text-white text-sm font-medium">{icon.label}</span>
            )}
          </div>
        ))}
      </div>

      <div
        className="flex justify-end pr-2"
        onClick={() => setExpanded((prev) => !prev)}
      >
        <button className="bg-[#2e2b2b] p-2 rounded-full text-white hover:bg-[#1f1d1d] transition">
          {expanded ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
