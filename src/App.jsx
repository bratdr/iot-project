import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginAdmin from "./pages/LoginAdmin";
import LoginUser from "./pages/LoginUser";
import Dashboard from "./pages/LoginUser/Dashboard";
import History from "./pages/LoginUser/History";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin_login" element={<LoginAdmin />} />
          <Route path="/user_login" element={<LoginUser />} />
          <Route path="/dashboard_user" element={<Dashboard />} />
          <Route path="/dashboard_user/history" element={<History />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
