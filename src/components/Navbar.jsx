import user from "../assets/icons/user.svg";
import notification from "../assets/icons/notification.svg";
import logout from "../assets/icons/logout.svg"
import SunriseLogo from "../assets/sunrise-logo.svg";
const Navbar = () => {
 

  return (
    <div className="bg-[#292221] text-white h-[80px]">
      <div className="px-3 py-3 flex justify-between items-center">
        <div className="flex items-center ">
          <div className="text-[#FFC235]  space-x-[90px]">
            <img src={SunriseLogo} alt="logo" className="h-[50px] w-[70px]" />
            <span className="absolute top-6 text-xl font-extralight font-montserrat tracking-[0.15em]">
              COMPASS SCOPE
            </span>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-12 pr-6">
          <img
            src={notification}
            alt="icon"
            className="w-5 h-[24px] cursor-pointer opacity-40  hover:opacity-100  hover:brightness-100 transition-all duration-200"
          />
          <img
            src={user}
            alt="icon"
            className="w-10 h-10 cursor-pointer opacity-40  hover:opacity-100  hover:brightness-100 transition-all duration-200"
          />
          <img
            src={logout}
            alt="icon"
            className="w-[27px] h-[24px] cursor-pointer opacity-40  hover:opacity-100  hover:brightness-100 transition-all duration-200"
          />
        </div>
      </div>

      
    </div>
  );
};

export default Navbar;
