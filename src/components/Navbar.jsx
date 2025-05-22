import user from "../assets/icons/user.svg";
import notification from "../assets/icons/notification.svg";
import { Menu } from "lucide-react";
import { useState } from "react";
import SunriseLogo from "../assets/sunrise-logo.svg";
const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Introduction");

  const tabs = ["Introduction", "What Next?", "Trump 2.0"];

  return (
    <div className="bg-[#292221] text-white ">
      {/* Top navbar */}
      <div className="px-4 py-4 flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-8">
          <div className="text-[#FFC235] font-extralight font-montserrat text-[16] space-x-5">
            <img src={SunriseLogo} alt="logo" className="h-10" />
            <span className="absolute top-6 left-20 tracking-[0.15em]">
              COMPASS SCOPE
            </span>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-10 ">
          <img src={notification} alt="icon" className="w-4 h-4" />
          <img src={user} alt="icon" className="w-6 h-6" />
        </div>
      </div>

      <div className="w-full bg-[#292221] text-white flex items-center px-16 ml-20 border-t-2 border-l-2 border-black">
        {/* Hamburger Menu */}
        <div className="p-2 cursor-pointer">
          <Menu className="w-6 h-6 text-white" />
        </div>

        {/* Tabs */}
        <div className="flex space-x-20 ml-20 relative font-inter ">
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
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-yellow-500" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
