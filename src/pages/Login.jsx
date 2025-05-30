import SunriseLogo from "../assets/sunrise-logo.svg";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlineIcon from "@mui/icons-material/LockOutline";
import bg from "../assets/bg.svg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Login() {
  return (
    <div
      className=" min-h-screen bg-cover bg-center flex items-center justify-center px-4 bg-[#292221] font-montserra"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-md w-full text-center space-y-6">
        <div className="absolute top-6 left-6 flex items-center space-x-2">
          <img src={SunriseLogo} alt="logo" className="h-10" />
          <span className="font-bold text-sm text-[#ffc235]">
            SUNRISE INTELLIGENCE
          </span>
        </div>

        <h1 className="text-[22px] font-montserrat tracking-[0.15em] font-medium text-[#ffc235]">
          COMPASS SCOPE
        </h1>
        <p className="text-white text-[16px] font-thin italic">
          View the world from Compass scope
          <br /> designed by business experts
        </p>

        <div className="bg-[#FFFFFF] bg-opacity-[4%] py-[40px] px-[20px] rounded-xl max-w-sm mx-auto  boder-[#575757]">
          <form className="space-y-4">
            <div className="flex items-center bg-[#433E3E] rounded-md px-4 py-2">
              <EmailOutlinedIcon className="text-yellow-500 mr-3" />
              <input
                type="text"
                placeholder="Username"
                className="bg-transparent text-white font-light w-full outline-none"
              />
            </div>

            <div className="flex items-center bg-[#433E3E] rounded-md px-4 py-2">
              <LockOutlineIcon className="text-yellow-500 mr-3" />
              <input
                type="password"
                placeholder="Password"
                className="bg-transparent text-white font-light w-full outline-none"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full font-montserrat bg-[#FFC235] hover:bg-yellow-500 text-black py-2 font-bold rounded-md"
            >
              Login
            </button>
          </form>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-400" />
            <span className="mx-2 text-gray-400">OR</span>
            <hr className="flex-grow border-gray-400" />
          </div>

          <button className="w-full flex items-center justify-center bg-[#5BA8FF] hover:bg-[#00669c] text-white py-2 rounded-md space-x-2">
            <LinkedInIcon />
            <span className="font-semibold">Login with Linkedin</span>
          </button>
        </div>

        <p className="text-[16] font-light text-yellow-300">
          <a href="/register" className="underline">
            Click here to register and get exclusive access
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
