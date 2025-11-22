import React from 'react'

export default function login() {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='w-96 p-6 shadow-lg bg-purple-100 rounded-md'>
        <h1>Login</h1>
        <hr className='mt-3'/>
        <form className='mt-3'>
          <label form='email' className='block text-base mb-2'>Email</label>
          <input type='email' id='email' className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-grey-600 rounded-md' placeholder='Input email...'/>
        </form>
      </div>

    </div>
  )
}
