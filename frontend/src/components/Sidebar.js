import React from 'react';
import { Link } from "react-router-dom";
import {FaHome, FaExclamationCircle, FaHourglassHalf} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className='w-64 bg-green-800 fixed h-full px-4 py-2'>
      <div className='my-2 mb-4'>
        <h1 className='text-2x text-white font-bold'> User dashboard</h1>
      </div>
      <hr/>
      <ul className='mt-3 text-white font-bold'>
        <li className='mb-2 rounded hover:shadow hover: bg-green-500 py-2'>
          <Link to="/dashboard" className='px-3'><FaHome className='inline-block w-6 h-6 mr-2 -mt-2'/>Home</Link>
        </li>
        <li className='mb-2 rounded hover:shadow hover: bg-green-500 py-2'>
          <Link to="/dashboard" className='px-3'><FaExclamationCircle className='inline-block w-6 h-6 mr-2 -mt-2'/>Register problem</Link>
          
        </li>
        <li className='mb-2 rounded hover:shadow hover: bg-green-500 py-2'>
          <Link to="/dashboard" className='px-3'><FaHourglassHalf className='inline-block w-6 h-6 mr-2 -mt-2'/>Track problem</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
