import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ComplaintInput() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return alert("You must be logged in");

    try {
      const result = await axios.post("http://localhost:8000/api/complaint", {
        title,
        description,
        email: user.email, // Send consumer email from localStorage
      });

      if (result.data.message === "Complaint has been logged") {
        alert("Complaint submitted successfully!");
        navigate("/userdashboard"); // Go back to dashboard
      }

    } catch (error) {
      console.error(error);
      alert("Complaint submission failed");
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl text-center font-semibold mb-3">
        Insert your complaints here
      </h1>

      <div className="w-96 p-6 shadow-lg bg-purple-100 rounded-md mx-auto">
        <form className="mt-3" onSubmit={handleSubmit}>
          <label className="block text-base mb-2">Title</label>
          <input
            type="text"
            className="border w-full text-base px-2 mb-3 py-1 rounded-md"
            placeholder="Input problem title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />

          <label className="block text-base mb-2">Description</label>
          <textarea
            className="border w-full text-base px-2 py-1 rounded-md"
            placeholder="Describe the problem"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />

          <div className="mt-5">
            <button
              type="submit"
              className="border-2 hover:bg-purple-700 border-purple-300 bg-purple-400 text-white py-2 px-7 rounded-md mx-auto block"
            >
              Submit Complaint
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ComplaintInput;
