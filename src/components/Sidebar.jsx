
import home from "../assets/icons/home.svg"
import risk from "../assets/icons/risk.svg"
import report from "../assets/icons/report.svg";
import scheduling from "../assets/icons/scheduling.svg";
import toggle from "../assets/icons/toggle.svg";
import settings from "../assets/icons/settings.svg"
const Sidebar = () => {
  return (
    <aside className="px-7 bg-[#292221] text-[#ffc235] flex flex-col py-2 items-center fixed top-[80px] left-0 h-[calc(100vh-80px)]">
      {/* Top Icons */}
      <div className="flex flex-col items-center space-y-16">
        <img
          src={home}
          alt="icon"
          className="w-10 h-10 mt-3 cursor-pointer opacity-60 hover:opacity-100 hover:brightness-120 transition-all duration-200"
        />
        <img
          src={risk}
          alt="icon"
          className="w-10 h-[32px] cursor-pointer opacity-60 hover:opacity-100 hover:brightness-120 transition-all duration-200"
        />
        <img
          src={report}
          alt="icon"
          className="w-10 h-10 cursor-pointer opacity-60 hover:opacity-100 hover:brightness-120 transition-all duration-200"
        />
        <img
          src={scheduling}
          alt="icon"
          className="w-10 h-10 cursor-pointer opacity-60 hover:opacity-100 hover:brightness-120 transition-all duration-200"
        />
      </div>

      <div className="mt-auto mb-6">
        <img
          src={settings}
          alt="settings"
          className="w-10 h-10 cursor-pointer opacity-60 hover:opacity-100 hover:brightness-120 transition-all duration-200"
        />
      </div>

      <button className="absolute right-[-23px] top-[75px] w-[40px] h-[40px] rounded-full bg-[#292221] border-4 border-[#f4efe5] flex items-center justify-center hover:brightness-125 transition-all duration-200">
        <img src={toggle} alt="toggle" className="w-4 h-4" />
      </button>
    </aside>
  );
};

export default Sidebar;
