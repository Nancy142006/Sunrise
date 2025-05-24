import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Mininavbar from "../components/Mininavbar";
import RiskIndicator from "../components/RiskIndicator";
function Dashboard() {

  return (
    <div className="flex h-screen  overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 overflow-auto bg-[#f4efe5]">
          <Mininavbar />
          <div className="flex gap-[169px] mt-2 ml-[210px] ">
            <RiskIndicator />
            <RiskIndicator />
            <RiskIndicator />
          </div>
          <section></section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;

