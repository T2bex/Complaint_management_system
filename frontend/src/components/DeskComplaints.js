import React, {useEffect, useState} from 'react'
import axios from 'axios';

function DeskComplaints() {
    function getStatusColor(status) {
    if (status === "Open") return "text-red-600 font-semibold";
    if (status === "Resolved") return "text-green-600 font-semibold";
    return "text-gray-600";
  }
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) return;

        async function getComplaints() {
            try {
            const response = await axios.get(
                `http://localhost:8000/api/complaints/organisation/${user.organisations_id}`
            );
            setComplaints(response.data.complaints);
            } catch (err) {
            console.error(err);
            }
        }

        getComplaints();
        }, []);

  return (
    <div className='flex flex-col justify-center items-center  space-y-4  mt-8 mb-8'>
        {complaints.map((complaint) => (
            <div key={complaint._id} className='w-[500px] p-6 shadow-lg bg-purple-100 rounded-md'>
            <p className='text-xs mb-2 font-light'>Organisation: {complaint.organisations_id ? complaint.organisations_id.name : 'Not existing'}</p>
            <h2 className="text-center font-semibold mb-2 text-lg">{complaint.title}</h2>
            <h3 className="text-center font-semibold text-sm mb-4">{complaint.description}</h3>
            <div className='flex md:space-x-3 text-xs font-light justify-center'>
                <p>Date: {new Date(complaint.createdAt).toLocaleDateString()}</p>
                <p className={`ml-2 ${getStatusColor(complaint.status)}`}>
              {complaint.status}
            </p>
            </div>
        </div>
        ))}
    </div>
  )
}

export default DeskComplaints
