import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import ConsumerDashboard from "./pages/consumer/Dashboard";
import HDADashboard from "./pages/helpdesk_assistant/Dashboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userdashboard" element={<ConsumerDashboard />} />
        <Route path="/hdadashboard" element={<HDADashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
