import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Mininavbar from "../components/Mininavbar";
import RiskIndicator from "../components/RiskIndicator";

const riskData = [
  {
    title: "Cash Flow Variability",
    value: 50,
    description: "Flags inconsistency in income and expenses.",
  },
  {
    title: "Liquidity Ratio",
    value: 30,
    description: "Measures the ability to meet short-term obligations.",
  },
  {
    title: "Debt-to-Equity Ratio",
    value: 70,
    description: "Assesses the level of financial leverage.",
  },
  {
    title: "Cash Flow Variability",
    value: 50,
    description: "Flags inconsistency in income and expenses.",
  },
  {
    title: "Liquidity Ratio",
    value: 30,
    description: "Measures the ability to meet short-term obligations.",
  },
  {
    title: "Debt-to-Equity Ratio",
    value: 70,
    description: "Assesses the level of financial leverage.",
  },
];

function Risk() {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelect = (index) => {
    setSelectedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="h-screen text-white overflow-hidden">
      <div className="fixed top-0 left-0 w-full z-40">
        <Navbar />
      </div>

      <div className="fixed top-[68px] left-0 w-full z-40">
        <Mininavbar />
      </div>

      <div className="fixed top-[130px] left-5 w-[80px] z-30">
        <Sidebar />
      </div>

      <main className="pt-[130px] pl-[100px] h-full overflow-y-auto pr-8">
        <div className="px-12 py-4">
          {selectedItems.length > 0 && (
            <div className="bg-[#F5F0E6] bg-opacity-10 border border-[#5E5E5E] text-white px-4 py-2 rounded-md flex justify-between items-center mb-6">
              <span>{selectedItems.length} items selected</span>
              <div className="flex gap-8">
                <button
                  className="text-gray-300 hover:text-white"
                  onClick={() => setSelectedItems([])}
                >
                  Cancel
                </button>
                <button className="bg-[#FFC235] text-black font-semibold px-4 py-1 rounded-full hover:bg-yellow-300">
                  Save
                </button>
              </div>
            </div>
          )}

          <div className="grid grid-cols-3 gap-8">
            {riskData.map((data, index) => (
              <RiskIndicator
                key={index}
                {...data}
                selected={selectedItems.includes(index)}
                onSelect={() => toggleSelect(index)}
                selectable={true}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Risk;
