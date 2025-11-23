import React, {useState} from  "react";
import axios from "axios"


export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(email, password)

        try{
          await axios.post("http://localhost:3000/login/", {
            email,password
          })
        }
        catch(e){
          console.log(e);
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
            className="border w-full text-base px-2 mb-3 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
            placeholder="Input email..." onChange={(e) => setEmail(e.target.value)} value={email}
          />

          <label htmlFor="password" className="block text-base mt-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
            placeholder="Input password..." onChange={(e) => setPassword(e.target.value)} value={password}
          />
          <div className="mt-5">
            <button onClick={handleSubmit} type="submit" className="border-2 hover:shadow hover:bg-purple-700 border-purple-300 bg-purple-400 text-white py-2 px-7 rounded-md mx-auto block">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
