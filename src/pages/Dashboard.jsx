import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Mininavbar from "../components/Mininavbar";

function Dashboard() {

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 overflow-hidden bg-[#f4efe5]">
            <Mininavbar/>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
