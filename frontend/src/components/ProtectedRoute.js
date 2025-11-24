import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRoles }) {
  const user = JSON.parse(localStorage.getItem("user"));

  // No user? redirect
  if (!user) return <Navigate to="/login" replace />;

  // No allowedRoles passed? Allow access
  if (!allowedRoles || !Array.isArray(allowedRoles)) {
    return children;
  }

  // If user.role doesn't exist, block access
  if (!user.role) return <Navigate to="/login" replace />;

  // Check allowed roles safely
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}
