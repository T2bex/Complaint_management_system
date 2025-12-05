import React, { useEffect, useState } from "react";
import axios from "axios";

function HDAssign() {
  function getStatusColor(status) {
    if (status === "Open") return "text-red-600 font-semibold";
    if (status === "Resolved") return "text-green-600 font-semibold";
    if (status === "In Progress") return "text-yellow-600 font-semibold";
    return "text-gray-600";
  }

  const [complaints, setComplaints] = useState([]);
  const [supportPeople, setSupportPeople] = useState([]);

  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [priority, setPriority] = useState("");
  const [assignedUser, setAssignedUser] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    async function fetchData() {
      try {
        const complaintRes = await axios.get(
          `http://localhost:8000/api/complaints/organisation/${user.organisations_id}`
        );
        setComplaints(complaintRes.data.complaints);

        const usersRes = await axios.get(
          `http://localhost:8000/api/users/support/${user.organisations_id}`
        );
        setSupportPeople(usersRes.data.users);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  // Assign Task Function
  async function assignTask() {
    if (!priority || !assignedUser) {
      alert("Please select priority and user.");
      return;
    }

    try {
      await axios.put(
        `http://localhost:8000/api/complaints/assign/${selectedComplaint._id}`,
        {
          assigned_to: assignedUser,
          priority,
          status: "In Progress",
        }
      );

      // Refresh complaints
      const user = JSON.parse(localStorage.getItem("user"));
      const res = await axios.get(
        `http://localhost:8000/api/complaints/organisation/${user.organisations_id}`
      );
      setComplaints(res.data.complaints);

      setSelectedComplaint(null);
      setPriority("");
      setAssignedUser("");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center space-y-4 mt-8 mb-8">
      <h2 className="font-semibold mb-3">Complaint List</h2>

      {complaints.map((complaint) => (
        <div
          key={complaint._id}
          className="w-[500px] p-6 shadow-lg bg-purple-100 rounded-md"
        >
          <p className="text-xs mb-2 font-light">
            Organisation:{" "}
            {complaint.organisations_id
              ? complaint.organisations_id.name
              : "Not existing"}
          </p>

          <h2 className="text-center font-semibold mb-2 text-lg">
            {complaint.title}
          </h2>

          <h3 className="text-center font-semibold text-sm mb-4">
            {complaint.description}
          </h3>

          <div className="flex md:space-x-3 text-xs font-light justify-center">
            <p>Date: {new Date(complaint.createdAt).toLocaleDateString()}</p>
            <p className={`ml-2 ${getStatusColor(complaint.status)}`}>
              {complaint.status}
            </p>
          </div>

          <button
            className="border-2 hover:shadow hover:bg-purple-700 border-purple-300 bg-purple-400 text-white py-2 px-7 rounded-md mx-auto block"
            onClick={() => setSelectedComplaint(complaint)}
          >
            Assign Task
          </button>
        </div>
      ))}

      {/* --- Modal Popup --- */}
      {selectedComplaint && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-[350px] shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-center">
              Assign Complaint
            </h3>

            <label className="block text-sm font-light">Select Priority:</label>
            <select
              className="w-full p-2 border rounded mb-3"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="">Choose Priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>

            <label className="block text-sm font-light">Assign To:</label>
            <select
              className="w-full p-2 border rounded mb-3"
              value={assignedUser}
              onChange={(e) => setAssignedUser(e.target.value)}
            >
              <option value="">Select Support Person</option>
              {supportPeople.map((user) => (
                <option key={user._id} value={user._id}>
                  {user.firstname} {user.lastname}
                </option>
              ))}
            </select>

            <div className="flex justify-between mt-4">
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => setSelectedComplaint(null)}
              >
                Cancel
              </button>

              <button
                className="bg-purple-600 text-white px-4 py-2 rounded"
                onClick={assignTask}
              >
                Assign
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HDAssign;
