import { Menu } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Mininavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { label: "Home", path: "/dashboard" },
    { label: "Risk Indicators", path: "/risk-indicators" },
    { label: "Section 1", path: "/section-1" },
    { label: "Section 2", path: "/section-2" },
    { label: "Section 3", path: "/section-3" },
  ];

  const [activeTab, setActiveTab] = useState("/");

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  return (
    <div className="w-full h-[50px] bg-[#292221] text-white border border-[#414141]">
      <div className="flex items-center px-6 h-full shadow-[0_6px_9px_rgba(0,0,0,0.3)]">
        <div className="cursor-pointer mr-[40px]">
          <Menu className="w-6 h-6 text-white" />
        </div>

        <div className="flex space-x-10 text-sm font-montserrat relative">
          {tabs.map((tab) => (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className={`relative transition-all duration-200 ${
                activeTab === tab.path
                  ? "text-white font-semibold"
                  : "text-gray-400"
              }`}
            >
              {tab.label}
              {activeTab === tab.path && (
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
