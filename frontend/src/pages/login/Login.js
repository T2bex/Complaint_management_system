import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import redirectByRole from "../../context/RedirectByRole";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    

    try {
      const result = await axios.post("http://localhost:8000/api/login/", {
        email,
        password
      });

      

      if (result.data.message === "Login successful") {
        localStorage.setItem("user", JSON.stringify(result.data.user));

        if (result.data.user.role === "consumer") {
          navigate('/userdashboard');
        } else if (result.data.user.role === "admin") {
          navigate('/admin_dashboard');
        } else if (result.data.user.role === "helpdesk_assistant") {
          navigate('/help_desk_dashboard');
        }
      } else {
        alert("Invalid credentials");
      }

    } catch (error) {
      console.log(error);
      alert("Login failed");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-3xl mb-4 font-bold">ABC Limited</h1>

      <div className="w-96 p-6 shadow-lg bg-purple-100 rounded-md">
        <h1 className="text-3xl text-center font-semibold">Login</h1>
        <hr className="mt-3" />

        <form className="mt-3" onSubmit={handleSubmit}>
          <label htmlFor="email" className="block text-base mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border w-full text-base px-2 mb-3 py-1 rounded-md"
            placeholder="Input email..."
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <label htmlFor="password" className="block text-base mt-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border w-full text-base px-2 py-1 rounded-md"
            placeholder="Input password..."
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <div className="mt-5">
            <button
              type="submit"
              className="border-2 hover:shadow hover:bg-purple-700 border-purple-300 bg-purple-400 text-white py-2 px-7 rounded-md mx-auto block"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
