import Navbar from "../components/Navbar";
import Mininavbar from "../components/Mininavbar";
import Honeycomb from "../components/Honeycomb";
import Slider from "../components/Slider";
// import SwitchToggle from "../components/SwitchToggle";
import { useState } from "react";

const Report = () => {
  const [sliderValue, setSliderValue] = useState(1);
  const [selectedOption, setSelectedOption] = useState("Option 1");

  return (
    <div className="bg-[#f9f3e8] min-h-screen">
      <Navbar />
      <div className="ml-[-110px]">
        <Mininavbar />
      </div>
      <div className="font-bold font-montserrat text-[24px] mt-6 ml-[7rem]">
        <h1>REPORT:</h1>
        <h1>COMPASS MEXICO</h1>
      </div>
      <div className="flex ml-[50px] flex-col space-y-10">
        <div>
          <p className="font-semibold ml-[4rem] mt-8 text-lg">
            Risk Honey Comb
          </p>
          <div className="flex space-x-[2rem] items-start space-y-[-30px]">
            <div className="ml-[7rem]git --version mt-4">
              <Honeycomb />
            </div>
           </div>
           </div>
      </div>
    </div>
  );
};

export default Report;
