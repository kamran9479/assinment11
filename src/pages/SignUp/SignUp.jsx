import React, { useContext, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import lottieLogin from "../../lottie/login.json";
import Lottie from 'lottie-react';
import { AuthContext } from '../../Auth/authProvider';

const SignUp = () => {

    const { createUser } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(!showPassword);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const password = e.target.password.value
        const email = e.target.email.value
        const confirmPassword = e.target.confirmPassword.value
        console.log(name, password, email, confirmPassword)
        if(password !== confirmPassword){
            return
        }

        createUser(email, password)
            .then(result => {
                alert('done')
                console.log(result.user)
            })
            .then(error => {
                console.log(error)
            })
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="bg-white bg-gradient-to-br from-pink-100 to-indigo-200 shadow-xl rounded-2xl w-full max-w-md p-8">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Create Account</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
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
                        <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
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
                    <div>
                        <label htmlFor="confirmPassword" className="block text-gray-700 mb-1">Confirm Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="confirmPassword"
                            id="confirmPassword"
                            required
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white py-2 rounded-xl hover:bg-indigo-600 transition duration-300"
                    >
                        Register
                    </button>
                </form>
                <p className="mt-4 text-sm text-center text-gray-500">
                    Already have an account? <a href="#" className="text-indigo-500 hover:underline">Login</a>
                </p>
            </div>
            <div className="w-96">
                <Lottie animationData={lottieLogin} loop={true}></Lottie>
            </div>
        </div>
    );
};

export default SignUp;