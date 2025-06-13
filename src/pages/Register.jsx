import SunriseLogo from "../assets/sunrise-logo.svg";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlineIcon from "@mui/icons-material/LockOutline";
import bg from "../assets/bg.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.ok) {
      alert("Registration successful! You can now log in.");
      navigate("/");
    } else {
      alert(data.message || "Registration failed");
    }
  };
  return (
    <div
      className=" min-h-screen bg-cover bg-center flex items-center justify-center px-4 font-montserra"
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
          Nice to meet you {"{name}"}, let's start by signing you up
        </p>

        <div className="bg-[#FFFFFF] bg-opacity-[4%] py-[40px] px-[20px] rounded-xl max-w-sm mx-auto  boder-[#575757]">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex items-center bg-[#433E3E] rounded-md px-4 py-2">
              <EmailOutlinedIcon className="text-yellow-500 mr-3" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="bg-transparent text-white font-light w-full outline-none"
              />
            </div>

            <div className="flex items-center bg-[#433E3E] rounded-md px-4 py-2">
              <LockOutlineIcon className="text-yellow-500 mr-3" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="bg-transparent text-white font-light w-full outline-none"
              />
            </div>
            <div className="flex items-center bg-[#433E3E] rounded-md px-4 py-2">
              <LockOutlineIcon className="text-yellow-500 mr-3" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="bg-transparent text-white font-light w-full outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full font-montserrat bg-[#FFC235] hover:bg-yellow-500 text-black py-2 font-bold rounded-md"
            >
              Next
            </button>
          </form>
        </div>

        <p className="text-[16] font-light text-white underline">
          I am already a member!{" "}
          <Link to="/" className="text-[#FFC235]">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
