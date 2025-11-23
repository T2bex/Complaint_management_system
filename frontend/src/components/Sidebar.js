import React from 'react';
import { Link } from "react-router-dom";
import { FaHome, FaExclamationCircle, FaHourglassHalf } from 'react-icons/fa';

const Sidebar = ({ sidebarOpen }) => {
  return (
    <div className={`fixed top-0 left-0 h-full w-64 bg-purple-800 px-4 py-2 transition-transform duration-300
      ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      
      <div className='my-2 mb-4'>
        <h1 className='text-2xl text-white text-center font-semibold'>Tobechukwu</h1>
      </div>
      <hr />
      <ul className='mt-3 text-white font-bold'>
        <li className='mb-2 rounded hover:shadow hover:bg-purple-500 py-2'>
          <Link to="/dashboard" className='px-3 flex items-center'>
            <FaHome className='w-6 h-6 mr-2' /> Home
          </Link>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-purple-500 py-2'>
          <Link to="/user_complaint" className='px-3 flex items-center'>
            <FaExclamationCircle className='w-6 h-6 mr-2' /> Register Problem
          </Link>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-purple-500 py-2'>
          <Link to="/problem_tracking" className='px-3 flex items-center'>
            <FaHourglassHalf className='w-6 h-6 mr-2' /> Track Problem
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;
