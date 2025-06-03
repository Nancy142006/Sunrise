import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Mininavbar from "../components/Mininavbar";
import Slider from "../components/Slider";
import SwitchToggle from "../components/SwitchToggle";
import Honeycomb from "../components/Honeycomb";
import Report1 from "../components/Report2";

function Section1() {
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState("Option 1");
  return (
    <div className="h-screen text-white overflow-hidden">
      <div className="fixed top-0 left-0 w-full ">
        <Navbar />
      </div>

      <div className="fixed  top-[68px] left-0 w-full ">
        <Mininavbar />
      </div>

      <div className="fixed top-[130px] left-5 w-[80px] z-30">
        <Sidebar />
      </div>

      <main className="pt-[80px] pl-[100px] h-full overflow-y-auto">
        <div className="px-12">
          <div className="flex flex-col mt-8 ">
            <div className="flex flex-col md:flex-row gap-[5rem]">
              <Report1 />
              <div className="mt-[2.5rem]">
                <Honeycomb width={520} height={530} radius={79} />
              </div>
            </div>
            <div className="flex flex-col md:flex-row  mt-[0.875rem] ml-[-1.5rem]">
              <div className="w-full md:w-1/2  p-6 rounded-lg ">
                <Slider value={value} onChange={setValue} />
              </div>

              <div className="w-full md:w-1/2 ml-[-3rem] p-6 rounded-lg ">
                <SwitchToggle selected={selected} onChange={setSelected} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Section1;
