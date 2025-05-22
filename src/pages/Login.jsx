import SunriseLogo from "../assets/sunrise-logo.svg";
import LinkedIn from "../assets/linkedin-signin.svg"

function Login(){
  return (
    <div className=" min-h-screen  flex items-center justify-center px-4  font-montserra">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="absolute top-6 left-6 flex items-center space-x-2">
          <img src={SunriseLogo} alt="logo" className="h-10" />
          <span className="font-bold text-sm text-[#ffc235]">
            SUNRISE INTELLIGENCE
          </span>
        </div>

        <h1 className="text-[32px] font-extralight  tracking-[0.15em] font-medium text-[#ffc235]">
          COMPASS SCOPE
        </h1>
        <p className="text-white text-[16px] font-thin italic">
          View the world from Compass scope designed by business experts
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 bg-gray-700 text-white font-extralight rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 bg-gray-700 text-white font-extralight rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-2 font-light rounded-md"
          >
            LOGIN
          </button>
        </form>

        <div className="text-gray-400">OR</div>

        <button className="w-full flex items-center justify-center  py-1 border border-yellow-500 rounded-md ">
          <img src={LinkedIn} alt="LinkedIn" />
        </button>

        <p className="text-[16] font-light text-yellow-300">
          <a href="/register" className="underline">
            Click here to register and get exclusive access
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
