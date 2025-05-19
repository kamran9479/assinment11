
import Lottie from "lottie-react";
import React, { useContext, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import lottieLogin from "../../lottie/login.json";
import { AuthContext } from "../../Auth/authProvider";
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const { signIn } = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);
  const location = useLocation()
  const from = location.state || "/";
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    signIn(email, password)
      .then(result => {
        console.log(result.user)
        navigate(from)
      })
      .then(error =>console.log(error)
      )
  };

  return (
    <div className="min-h-screen -mt-10 flex items-center justify-center p-4">

      <div className="bg-white w-full max-w-md shadow-xl rounded-2xl p-8 bg-gradient-to-br from-blue-300 to-purple-400">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-5 ">
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              required
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-10 text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-500">
          Don’t have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
        </p>
      </div>
      <div className="w-96">
        <Lottie animationData={lottieLogin} loop={true}></Lottie>

      </div>

    </div>
  );
};




export default Login;