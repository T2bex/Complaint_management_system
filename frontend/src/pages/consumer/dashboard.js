import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import UserDashboardContent from '../../components/UserDashboardContent';

export default function ConsumerDashboard() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
  const user = localStorage.getItem("user");
  if (!user) navigate("/login", { replace: true });

  
}, []);




  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <div className="flex h-screen">
      
      <Sidebar sidebarOpen={sidebarOpen} />

      
      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <Navbar toggleSidebar={toggleSidebar} />
        <main className='flex-1 overflow-auto'>
          <UserDashboardContent/>
        </main>
        <Footer/>
      </div>
    </div>
  )
}
