import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Mininavbar from "../components/Mininavbar";
import RiskIndicator from "../components/RiskIndicator";
import Honeycomb from "../components/Honeycomb";
import ReportCard from "../components/Report";

function Dashboard() {
  return (
    <div className="h-screen text-white overflow-hidden">
      <div className="fixed top-0 left-0 w-full z-40">
        <Navbar />
      </div>

      <div className="fixed  top-[68px] left-0 w-full z-40">
        <Mininavbar />
      </div>

      <div className="fixed top-[130px] left-5 w-[80px] z-30">
        <Sidebar />
      </div>

      <main className="pt-[112px] pl-[100px] h-full overflow-y-auto">
        <div className="px-12 py-4">
          <div className="font-montserrat text-white flex items-center justify-between px-4 py-2">
            <span className="font-bold text-[16px]">Dashboard</span>
            <button className="bg-[#E6A740] hover:bg-yellow-600 text-black py-2 px-4 rounded">
              Change Indicators
            </button>
          </div>
          <div className="flex flex-col mt-8 gap-8">
            <div className="flex gap-14">
              <RiskIndicator
                title="Liquidity Ratio"
                value={30}
                description="Measures the ability to meet short-term obligations."
              />
              <RiskIndicator
                title="Cash Flow Variability"
                value={50}
                description="Flags inconsistency in income and expenses."
              />
              <RiskIndicator
                title="Debt-to-Equity Ratio"
                value={70}
                description="Assesses the level of financial leverage."
              />
            </div>

            <div className="flex flex-col md:flex-row gap-[30px]">
              <div className="">
                <ReportCard />
              </div>
              <div>
                <Honeycomb width={400} height={380} radius={60} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
