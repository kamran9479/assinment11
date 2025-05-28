import React, { useContext, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import lottieLogin from "../../lottie/login.json";
import Lottie from 'lottie-react';
import { AuthContext } from '../../Auth/authProvider';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const SignUp = () => {

    const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const [error, showError] = useState('')
    const togglePassword = () => setShowPassword(!showPassword);
    const location = useLocation()
    const from = location.state || "/";

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const photourl = e.target.photourl.value
        const password = e.target.password.value
        const email = e.target.email.value
        const confirmPassword = e.target.confirmPassword.value
        console.log(name, password, email, confirmPassword)
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const isLongEnough = password.length >= 6;
        if (password !== confirmPassword) {
            showError("Password doesn't matche");
            return false
        }
        if (!hasUpperCase) {
            showError("Password must include an uppercase letter.");
            return false;
        }

        if (!hasLowerCase) {
            showError("Password must include a lowercase letter.");
            return false;
        }

        if (!isLongEnough) {
            showError("Password must be at least 6 characters.");
            return false;
        }

        createUser(email, password)
            .then(result => {

                updateUserProfile({
                    displayName: name,
                    photoURL: photourl
                })
                Swal.fire({
                    icon: 'success',
                    title: 'Registered Successfully',
                    text: 'welcome',
                });
                navigate(from)

            })
            .catch(error => {
                console.log(error)
            })
    };
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                Swal.fire({
                    icon: 'success',
                    title: 'Registered Successfully',
                    text: 'welcome',
                });
                navigate(from)
            })
            .catch(error => showError('google login failed'))
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="bg-white bg-gradient-to-br from-pink-100 to-indigo-200 shadow-xl rounded-2xl w-full max-w-md p-8">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Create Account</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-gray-700 mb-1">Photo URL</label>
                        <input
                            type="url"
                            name="photourl"
                            id="photourl"
                            required
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            id="password"
                            required
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                        <button
                            type="button"
                            onClick={togglePassword}
                            className="absolute right-3 top-10 text-gray-500"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label htmlFor="confirmPassword" className="block text-gray-700 mb-1">Confirm Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="confirmPassword"
                            id="confirmPassword"
                            required
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                        <label className='text-red-400'>{error}</label>
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white py-2 rounded-xl hover:bg-indigo-600 transition duration-300"
                    >
                        Register
                    </button>
                </form>

                {/* 🔵 Google Sign-In Button */}
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

                {/* Link to Login */}
                <p className="mt-4 text-sm text-center text-gray-500">
                    Already have an account? <Link to="/login">login</Link>
                </p>
            </div>

            {/* Right Side Animation */}
            <div className="w-96">
                <Lottie animationData={lottieLogin} loop={true} />
            </div>
        </div>

    );
};

export default SignUp;