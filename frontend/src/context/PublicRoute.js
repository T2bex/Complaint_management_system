
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  // If user already logged in 
  if (user) {
    if (user.role === "consumer") return <Navigate to="/userdashboard" replace />;
    if (user.role === "admin") return <Navigate to="/admin_dashboard" replace />;
    if (user.role === "helpdesk_assistant") return <Navigate to="/help_desk_dashboard" replace />;
  }

  return children;
}
