import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Risk from "./pages/Risk";
import Section1 from "./pages/Section1";
import Section2 from "./pages/Section2";
import Section3 from "./pages/Section3";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/risk-indicators" element={<Risk />} />
        <Route path="/section-1" element={<Section1 />} />
        <Route path="/section-2" element={<Section2 />} />
        <Route path="/section-3" element={<Section3 />} />
      </Routes>
    </Router>
  );
}

export default App;
