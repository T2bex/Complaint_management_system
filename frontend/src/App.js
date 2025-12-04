import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import ConsumerDashboard from "./pages/consumer/Dashboard";
import HDADashboard from "./pages/helpdesk_assistant/Dashboard";
import AdminDashboard from "./pages/system_admin/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import LogComplaint from "./pages/consumer/LogComplaint";
import Tracking from "./pages/consumer/Tracking";
import PublicRoute from "./context/PublicRoute";
import AssignTask from "./pages/helpdesk_assistant/AssignTask";
import TrackTask from "./pages/helpdesk_assistant/TrackTask";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoute>
          <Home />
        </PublicRoute>} />
        <Route path="/login" element={<PublicRoute>
              <Login />
            </PublicRoute>} />
        <Route path="/userdashboard" element={<ProtectedRoute allowedRoles={["consumer"]}>
          <ConsumerDashboard />
        </ProtectedRoute>} />
        <Route path="/help_desk_dashboard" element={<ProtectedRoute allowedRoles={["helpdesk_assistant"]}>
          <HDADashboard />
        </ProtectedRoute>} />
        <Route path="/user_complaint" element={<LogComplaint />} />
        <Route path="/problem_tracking" element={<Tracking />} />
        <Route path="/admin_dashboard" element={<ProtectedRoute allowedRoles={["admin"]}>
          <AdminDashboard />
        </ProtectedRoute>} />
        <Route path="/assign_task" element={<AssignTask />} />
        <Route path="/track_task" element={<TrackTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
