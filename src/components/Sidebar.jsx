import { useState } from "react";
import home from "../assets/icons/home.svg";
import risk from "../assets/icons/risk.svg";
import graph from "../assets/icons/graph.svg";
import calendar from "../assets/icons/calendar.svg";

const icons = [
  { id: "home", src: home },
  { id: "risk", src: risk },
  { id: "graph", src: graph },
  { id: "calendar", src: calendar },
];

const Sidebar = () => {
  const [selected, setSelected] = useState("home");

  return (
    <div className="w-[78px] h-screen bg-[#433E3E] rounded-md flex flex-col justify-between items-center py-6">
      <div className="flex flex-col items-center space-y-6 mt-4">
        {icons.map((icon) => (
          <div
            key={icon.id}
            onClick={() => setSelected(icon.id)}
            className={`p-3 rounded-xl cursor-pointer transition ${
              selected === icon.id ? "bg-yellow-400 " : "hover:bg-yellow-300"
            }`}
          >
            <img src={icon.src} alt={`${icon.id}-icon`} className="w-6 h-6" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
