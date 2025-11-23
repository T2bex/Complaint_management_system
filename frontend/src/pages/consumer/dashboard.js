import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import { useLocation } from 'react-router-dom';

export default function ConsumerDashboard() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <div className="flex h-screen">
      
      <Sidebar sidebarOpen={sidebarOpen} />

      
      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="p-4">
          <h1 className="text-2xl font-bold">Welcome to your Dashboard</h1>
          <p>Think about your life</p>
        </div>
      </div>
    </div>
  )
}
