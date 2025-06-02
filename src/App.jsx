import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
// import Report from "./pages/Report";
import Register from "./pages/Register";
import Risk from "./pages/Risk";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/risk-indicators" element={<Risk />} />
      </Routes>
    </Router>
  );
}

export default App;
