import React from 'react'

function UserDashboardContent() {
  return (
    <div className="p-4">
        <h1 className="text-2xl font-bold mb-3">Welcome</h1>
        <div className='flex flex-col md:flex-row justify-center items-center md:space-x-4 space-y-4 md:space-y-0 mt-8'>
            <div className='w-96 p-6 shadow-lg bg-purple-100 rounded-md'>
                <h3 className="text-center font-semibold">You currently have 3 complaint(s)</h3>
            </div>
            <div className='w-96 p-6 shadow-lg bg-purple-100 rounded-md'>
                <h3 className="text-center font-semibold">You currently have 0 resolved complaint(s)</h3>
            </div>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default UserDashboardContent
