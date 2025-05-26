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
            <div className="ml-[7rem] mt-4">
              <Honeycomb />
            </div>
            <div className="bg-[#fef3c7] w-[40rem] h-[36rem] rounded-2xl px-8 py-6 font-sans text-[14px] leading-relaxed text-center mx-auto space-y-2">
              <p className="font-bold text-[16px]">3-Month outlook</p>

              <p className="text-gray-700">
                As of mid-May 2025, the next three months under the Trump
                administration's tariff policies are projected to significantly
                influence the U.S. and global economies. Here's an outlook based
                on current analyses:
              </p>

              <div className="text-gray-800 space-y-2">
                <p className="text-sm">
                  📉{" "}
                  <span className="font-semibold text-[#8a4b00]">
                    Economic Growth Projections
                  </span>
                </p>
                <p>
                  U.S. GDP Growth: The OECD forecasts a slowdown to 2.2% in
                  2025, down from previous estimates of 2.4%, with further
                  deceleration to 1.6% in 2026.
                  <br />
                  <span className="text-xs">
                    CNN
                    <br />
                    +1
                    <br />
                    NBC New York
                    <br />
                    +1
                  </span>
                </p>

                <p>
                  Global Growth: Anticipated to decrease from 3.2% in 2024 to
                  3.1% in 2025 and 3.0% in 2026, primarily due to escalating
                  trade tensions.
                  <br />
                  <span className="text-xs">NBC New York</span>
                </p>
              </div>

              <div className="text-gray-800 space-y-2">
                <p className="text-sm">
                  💰{" "}
                  <span className="font-semibold text-[#8a4b00]">
                    Inflationary Pressures
                  </span>
                </p>
                <p>
                  U.S. Inflation: The OECD projects a rise to 2.8% in 2025,
                  influenced by increased tariffs on imports.
                  <br />
                  <span className="text-xs">CNN</span>
                </p>

                <p>
                  Consumer Prices: Retailers like Walmart have indicated that
                  higher prices are imminent due to tariffs, with noticeable
                  increases expected in May and June.
                  <br />
                  <span className="text-xs">Business Insider</span>
                  <br />
                  <span className="text-xs">
                    Economic stability could be further challenged if trade
                    disputes intensify.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Report;
