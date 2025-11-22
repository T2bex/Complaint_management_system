import React, { useState } from 'react';
import { FaBars, FaUser, FaBell } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Navbar = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className='bg-green-800 px-4 py-3 flex justify-between items-center'>
      <div className='flex items-center text-xl'>
        <FaBars className='text-white cursor-pointer me-4' onClick={toggleSidebar} />
        <span className='text-white font-semibold'>Complaint System</span>
      </div>

      <div className='flex items-center gap-x-5'>
        <div className='text-white'><FaBell className='w-6 h-6' /></div>

        <div className='relative'>
          <button 
            className='text-white focus:outline-none flex items-center' 
            onClick={toggleDropdown}
          >
            <FaUser className='w-6 h-6 mt-1' />
          </button>

          {dropdownOpen && (
            <div className='z-10 absolute rounded-lg shadow w-32 bg-white text-black top-full right-0'>
              <ul>
                <li><Link to="#" className='px-3 py-1 block hover:bg-gray-200'>Profile</Link></li>
                <li><Link to="#" className='px-3 py-1 block hover:bg-gray-200'>Logout</Link></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
