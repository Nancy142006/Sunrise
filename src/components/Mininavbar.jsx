import { Menu } from "lucide-react";
import { useState } from "react";

const Mininavbar = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const tabs = [
    "Home",
    "Risk Indicators",
    "Section 1",
    "Section 2",
    "Section 3",
  ];

  return (
    <div className="w-full h-[50px] bg-[#292221] text-white border border-[#414141]">
      <div className="flex items-center px-6 h-full shadow-[0_6px_9px_rgba(0,0,0,0.3)]">
        <div className="cursor-pointer mr-[40px]">
          <Menu className="w-6 h-6 text-white" />
        </div>

        <div className="flex space-x-10 text-sm font-montserrat relative">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative transition-all duration-200 ${
                activeTab === tab ? "text-white font-semibold" : "text-gray-400"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute left-0 bottom-[-12px] h-[3px] w-full bg-[#FFC235] rounded-full"></span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mininavbar;
