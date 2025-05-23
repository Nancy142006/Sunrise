import { Menu } from "lucide-react";
import { useState } from "react";

const Mininavbar = () => {
  const [activeTab, setActiveTab] = useState("Introduction");

  const tabs = ["Introduction", "What Next?", "Trump 2.0"];
  return (
    <div className=" ml-[96px] border-black border-l-2 border-t-2">
      <div className="bg-[#292221] text-white flex items-center px-16 py-2 shadow-[0_6px_9px_rgba(0,0,0,0.3)]">
        <div className="p-2 cursor-pointer ">
          <Menu className="w-6 h-6 text-white" />
        </div>

        <div className="flex space-x-20 ml-20 relative font-inter text-[12px]">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`py-1 relative ${
                activeTab === tab ? "text-white font-medium" : "text-gray-400"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-[-14px] left-[-16px] right-0 h-1 w-[90px] bg-[#FFC235]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Mininavbar;
