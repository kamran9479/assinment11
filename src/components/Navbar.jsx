import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Auth/authProvider';

const Navbar = () => {
    const { user,signOutUser } = useContext(AuthContext)
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSignOut = ()=>{
        signOutUser()
        .then(result=>{
            console.log('logout success')
        }).then(error=>{
            console.log(error)
        })
    }

    return (
        <nav className="py-7 bg-gradient-to-br from-blue-600 to-purple-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="text-xl font-bold">FoodShare</div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        <NavLink to="/" className="hover:bg-green-700 px-3 py-2 rounded">Home</NavLink>
                        <NavLink to="/availablefood" className="hover:bg-green-700 px-3 py-2 rounded">Available-Food</NavLink>
                        <NavLink to="/addfood" className="hover:bg-green-700 px-3 py-2 rounded">Add-Food</NavLink>
                        <NavLink to="/foodrequest" className="hover:bg-green-700 px-3 py-2 rounded">Food-Request</NavLink>
                        <NavLink to="/managefood" className="hover:bg-green-700 px-3 py-2 rounded">Manage-Food</NavLink>

                        {/* Search */}
                        {/* <div>
                            <input
                                type="text"
                                placeholder="Search..."
                                className="px-2 py-1 rounded text-black focus:outline-none"
                            />
                            <button className='btn btn-neutral'>Search</button>

                        </div> */}
                    </div>
                    {
                        user ? <div className='hidden md:block'><div> <button className='btn' onClick={handleSignOut}>LogOut</button></div></div> : <><div className='space-x-3 font-semibold hidden md:block'>
                            {/* Auth Buttons */}

                            <Link to="/register">
                                <button className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-300">Register</button>
                            </Link>
                            <Link to="/login">
                                <button className="bg-white text-green-700 px-3 py-1 rounded hover:bg-gray-100">Login</button>
                            </Link>
                        </div></>
                    }

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-2 py-1 rounded text-black focus:outline-none"
                    />
                    <button className='btn btn-neutral'>Search</button>

                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-4">
                    <NavLink to="/" className="block py-2">Home</NavLink>
                    <NavLink to="/availablefood" className="block py-2">Available-Food</NavLink>
                    <NavLink to="/addfood" className="block py-2">Add-Food</NavLink>
                    <NavLink to="/foodrequest" className="block py-2">Food-Request</NavLink>
                    <NavLink to="/managefood" className="block py-2">Manage-Food</NavLink>
                    {/* <input
                        type="text"
                        placeholder="Search..."
                        className="w-full mt-2 px-2 py-1 rounded text-black"
                    /> */}
                    {
                        user ? <div><button className='btn' onClick={handleSignOut}>LogOut</button></div> : <div><div className="flex justify-evenly font-semibold mt-3 md:hidden">
                            <Link to="/register">
                                <button className="bg-yellow-400 w-44 text-black px-3 py-1 rounded hover:bg-yellow-300">Register</button>
                            </Link>
                            <Link to="/login">
                                <button className="bg-white w-44 text-green-700 px-3 py-1 rounded hover:bg-gray-100">Login</button>
                            </Link>
                        </div></div>
                    }
                </div>
            )}
        </nav>
    );
};

export default Navbar;
