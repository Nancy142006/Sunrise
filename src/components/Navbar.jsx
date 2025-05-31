import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SunriseLogo from "../assets/sunrise-logo.svg";

const Navbar = () => {
  return (
    <div className="bg-[#292221] text-white h-auto w-full py-3">
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 space-y-2 sm:space-y-0">
        {/* Logo and title */}
        <div className="flex items-center space-x-3">
          <img
            src={SunriseLogo}
            alt="logo"
            className="h-10 w-[60px] sm:h-[50px] sm:w-[70px]"
          />
          <span className="text-[#FFC235] text-base sm:text-lg font-medium tracking-[0.15em]">
            COMPASS SCOPE
          </span>
        </div>

            <div className="flex items-center space-x-4 text-sm">
          <NotificationsOutlinedIcon className="w-5 h-5 cursor-pointer text-[#FFC235]" />
          <div className="flex items-center space-x-2">
            <div className="bg-[#FFC235] text-[#292221] font-bold rounded-full w-8 h-8 flex items-center justify-center">
              RK
            </div>
            <span className="hidden sm:inline text-white">Ritesh Kumar</span>
            <svg
              className="w-3 h-3 text-white hidden sm:inline"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
