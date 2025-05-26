
import Lottie from "lottie-react";
import React, { useContext, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import lottieLogin from "../../lottie/login.json";
import { AuthContext } from "../../Auth/authProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false);
  const [error, showError] = useState('')
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
      .catch(error => {
        showError('Invalid E-mail or password')

      })
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        Swal.fire({
          icon: 'success',
          title: 'Login Successfully',
          text: 'welcome',
        });
        navigate(from)
      })
      .catch(error => showError('google login failed'))

  }

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
            <label className='text-red-700 p-2 '>{error}</label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="mt-4">
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition duration-300 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.3 32 29.1 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.7 0 5.2 1 7.1 2.7l5.7-5.7C33.4 7.1 28.9 5 24 5 13.5 5 5 13.5 5 24s8.5 19 19 19c9.8 0 18.1-7.3 18.1-19 0-1.2-.1-2.1-.5-3.5z" />
              <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.4 15.6 18.9 13 24 13c2.7 0 5.2 1 7.1 2.7l5.7-5.7C33.4 7.1 28.9 5 24 5c-7.8 0-14.5 4.4-18 10.9z" />
              <path fill="#4CAF50" d="M24 43c4.9 0 9.4-1.9 12.8-5.1l-6-4.9C28.9 35.5 26.5 36.5 24 36.5c-5.1 0-9.3-3-11.3-7.3l-6.6 5.1C9.4 38.6 16.1 43 24 43z" />
              <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3C34.7 32 30.5 35 25.5 35c-5.1 0-9.3-3-11.3-7.3l-6.6 5.1C9.4 38.6 16.1 43 24 43c9.8 0 18.1-7.3 18.1-19 0-1.2-.1-2.1-.5-3.5z" />
            </svg>
            Sign in with Google
          </button>
        </div>
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