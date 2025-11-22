import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import ConsumerDashboard from "./pages/consumer/Dashboard";
import HDADashboard from "./pages/helpdesk_assistant/Dashboard";
import Track from "./pages/user_track/Track";
import Register from "./pages/register_problem/Register";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userdashboard" element={<ConsumerDashboard />} />
        <Route path="/hdadashboard" element={<HDADashboard />} />
        <Route path="/user_complaint" element={<Register />} />
        <Route path="/problem_tracking" element={<Track />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
