import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginAdmin from "./pages/LoginAdmin";
import LoginUser from "./pages/LoginUser";
import Dashboard from "./pages/LoginUser/Dashboard";
import AdminDashboard from "./pages/LoginAdmin/Dashboard";
import History from "./pages/LoginUser/History";
import TrackingKeys from "./pages/LoginUser/TrackingKey";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/admin" element={<LoginAdmin />} />
          <Route path="/login/user" element={<LoginUser />} />
          <Route path="/login/user/keys" element={<TrackingKeys />} />
          <Route path="/user/dashboard" element={<Dashboard />} />
          <Route path="/user/dashboard/history" element={<History />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
