import React from 'react'

function UserDashboardContent() {
  return (
    <div className="p-4">
        <h1 className="text-2xl font-bold mb-3">Welcome</h1>
        <div className='flex flex-col md:flex-row justify-center items-center md:space-x-4 space-y-4 md:space-y-0 mt-8 mb-8'>
            <div className='w-96 p-6 shadow-lg bg-purple-100 rounded-md'>
                <h3 className="text-center font-semibold">You currently have 3 complaint(s)</h3>
            </div>
            <div className='w-96 p-6 shadow-lg bg-purple-100 rounded-md'>
                <h3 className="text-center font-semibold">You currently have 0 resolved complaint(s)</h3>
            </div>
        </div>
        <h2 className='font-semibold mb-3'>Complaint List</h2>
        <div className='flex flex-col justify-center items-center md:space-x-4 space-y-4 md:space-y-0 mt-8 mb-8'>
            <div className='w-[500px] p-6 shadow-lg bg-purple-100 rounded-md'>
                <p className='text-xs mb-2 font-light'>Organisation: Lloyds bank</p>
                <h2 className="text-center font-semibold mb-2 text-lg">Log in issue</h2>
                <h3 className="text-center font-semibold text-sm mb-4">I am unable to log into my application</h3>
                <div className='flex md:space-x-3 text-xs font-light justify-center'>
                    <p>Orgainisation: Lloyds bank</p>
                    <p>Date: 2025-11-24</p>
                    <p>Progress: Open</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserDashboardContent
