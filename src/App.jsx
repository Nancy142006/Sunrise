import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Report from "./pages/Report";
import Register from "./pages/Register";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/report" element={<Report/>}/>
      </Routes>
    </Router>
  );
}

export default App;
