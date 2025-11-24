import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import ConsumerDashboard from "./pages/consumer/Dashboard";
import HDADashboard from "./pages/helpdesk_assistant/Dashboard";
import AdminDashboard from "./pages/system_admin/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import LogComplaint from "./pages/consumer/LogComplaint";
import Tracking from "./pages/consumer/Tracking";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userdashboard" element={<ProtectedRoute allowedRoles={["consumer"]}>
          <ConsumerDashboard />
        </ProtectedRoute>} />
        <Route path="/help_desk_dashboard" element={<ProtectedRoute allowedRoles={["help_desk_assistant"]}>
          <HDADashboard />
        </ProtectedRoute>} />
        <Route path="/user_complaint" element={<LogComplaint />} />
        <Route path="/problem_tracking" element={<Tracking />} />
        <Route path="/admin_dashboard" element={<ProtectedRoute allowedRoles={["admin"]}>
          <AdminDashboard />
        </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
