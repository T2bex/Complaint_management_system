import React, { useEffect, useState } from "react";
import axios from "axios";
import DeskComplaints from "./DeskComplaints";

function DeskDashboard() {
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

  // Calculate counts
  const openCount = complaints.filter(c => c.status === "Open").length;
  const resolvedCount = complaints.filter(c => c.status === "Resolved").length;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-3">Welcome</h1>

      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4 space-y-4 md:space-y-0 mt-8 mb-8">
        
        {/* Open */}
        <div className="w-96 p-6 shadow-lg bg-red-100 border border-red-300 rounded-md">
          <h3 className="text-center font-semibold text-red-700">
            {openCount} Open Complaint(s)
          </h3>
        </div>

        {/* Resolved */}
        <div className="w-96 p-6 shadow-lg bg-green-100 border border-green-300 rounded-md">
          <h3 className="text-center font-semibold text-green-700">
            {resolvedCount} Resolved Complaint(s)
          </h3>
        </div>

      </div>

      <h2 className="font-semibold mb-3">Complaint List</h2>
      <DeskComplaints complaints={complaints} />
    </div>
  );
}

export default DeskDashboard;
