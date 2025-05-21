// import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Main content */}
      <div className="flex flex-col flex-1 bg-[#f4efe5] text-black">
        <Navbar />
        <main className="flex-1 p-4 overflow-auto">
          {/* We’ll add RiskIndicators, ReportSection, and InfoBoxGrid here later */}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
