import React, { useContext, useEffect, useState } from 'react';
import { AuthContext, serverURL } from '../../Auth/AuthProvider';

const MyFoodReq = () => {
    const { user } = useContext(AuthContext)

    const [foods, setFoods] = useState([])
    console.log(foods)


    useEffect(() => {
        fetch(`${serverURL}/foodreq?email=${user.email}`)
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [user.email])
    return (
        <div className="p-6 min-h-screen bg-white rounded shadow-md max-w-7xl mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Your all requested item</h1>

            {/* Table for medium+ screens */}
            <div className="hidden md:block">
                <table className="min-w-full border border-gray-300 divide-y divide-gray-200 shadow-md rounded-lg">
                    <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
                        <tr>
                            <th className="py-3 px-4 text-left">Photo</th>
                            <th className="py-3 px-4 text-left">Donar Name</th>
                            <th className="py-3 px-4 text-left">Pickup Location</th>
                            <th className="py-3 px-4 text-left">Expire Date</th>
                            <th className="py-3 px-4 text-left">Request Date</th>

                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {foods ?
                            foods.map((food, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition">
                                    <td className="py-3 px-4">
                                        <img
                                            src={food.foodImg}
                                            alt="food"
                                            className="w-32 h-24 object-cover rounded-md border"
                                        />
                                    </td>
                                    <td className="py-3 px-4">{food.donatorName}</td>

                                    <td className="py-3 px-4">{food.pickupLocation}</td>
                                    <td className="py-3 px-4 whitespace-nowrap">
                                        {new Date(food.expiredDateTime).toLocaleString('en-US', {
                                            dateStyle: 'medium',
                                            timeStyle: 'short',
                                        })}
                                    </td>
                                    <td className="py-3 px-4 whitespace-nowrap">
                                        {new Date(food.requestDate).toLocaleString('en-US', {
                                            dateStyle: 'medium',
                                            timeStyle: 'short',
                                        })}
                                    </td>


                                </tr>
                            )) : <p className="my-40 text-5xl w-full flex justify-center items-center text-red-500">No Movie Available</p>}
                    </tbody>
                </table>
            </div>

            {/* Card view for small screens */}
            <div className="md:hidden space-y-6">
                {foods.map((food, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 rounded-lg shadow-sm p-4 space-y-3"
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={food.foodImg}
                                alt="food"
                                className="w-24 h-20 object-cover rounded-md border"
                            />
                            <div>
                                <h2 className="text-lg font-semibold">{food.donatorName}</h2>
                                
                            </div>
                        </div>
                        <div className="text-sm text-gray-700">
                            <p><strong>Pickup:</strong> {food.pickupLocation}</p>
                            <p>
                                <strong>expire Date:</strong>{' '}
                                {new Date(food.expiredDateTime).toLocaleString('en-US', {
                                    dateStyle: 'medium',
                                    timeStyle: 'short',
                                })}
                            </p>
                            <p>
                                <strong>request Date:</strong>{' '}
                                {new Date(food.requestDate).toLocaleString('en-US', {
                                    dateStyle: 'medium',
                                    timeStyle: 'short',
                                })}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyFoodReq;