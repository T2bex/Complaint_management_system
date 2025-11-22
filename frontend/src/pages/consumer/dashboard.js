
import React from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';


export default function ConsumerDashboard() {
  return (
    <div>
        <div className='flex'>
            <Navbar/>
            <Sidebar/>
        </div>
    </div>
    
  )
}
