import { useContext, useEffect, useState } from 'react';
import { AuthContext, serverURL } from '../../Auth/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageFood = () => {

    const { user } = useContext(AuthContext)

    const [foods, setFoods] = useState([])
    console.log(foods)


    useEffect(() => {
        fetch(`${serverURL}/managefood?email=${user.email}`)
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [user.email])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Confirm Delete?",
            showCancelButton: true,
            confirmButtonText: "Delete",
            denyButtonText: `Cancel`
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${serverURL}/deletefood/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire("Deleted!", "", "success");
                        navigate('/availablefood');
                    });
            }
        });
    }

    return (
        <div className="p-6 min-h-screen bg-white rounded shadow-md max-w-7xl mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Your added Foods </h1>

            {/* Table for medium+ screens */}
            <div className="hidden md:block">
                <table className="min-w-full border border-gray-300 divide-y divide-gray-200 shadow-md rounded-lg">
                    <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
                        <tr>
                            <th className="py-3 px-4 text-left">Photo</th>
                            <th className="py-3 px-4 text-left">Name</th>
                            <th className="py-3 px-4 text-left">Notes</th>
                            <th className="py-3 px-4 text-left">Pickup Location</th>
                            <th className="py-3 px-4 text-left">expired DateTime</th>
                            <th className="py-3 px-4 text-center">Actions</th>
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
                                    <td className="py-3 px-4">{food.foodName}</td>
                                    <td className="py-3 px-4 max-w-xs truncate">{food.
                                        additionalNotes
                                    }</td>
                                    <td className="py-3 px-4">{food.pickupLocation}</td>
                                    <td className="py-3 px-4 whitespace-nowrap">
                                        {new Date(food.expiredDateTime).toLocaleString('en-US', {
                                            dateStyle: 'medium',
                                            timeStyle: 'short',
                                        })}
                                    </td>

                                    <td className="py-3 px-4 whitespace-nowrap">
                                        <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
                                            <Link to={`/updatefood/${food._id}`}><button className="bg-blue-500 text-white px-4 py-1.5 rounded hover:bg-blue-600 transition">
                                                Update
                                            </button></Link>
                                            <button onClick={() => handleDelete(food._id)} className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600 transition">
                                                Delete
                                            </button>
                                        </div>
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
                                <h2 className="text-lg font-semibold">{food.foodName}</h2>
                                <p className="text-sm text-gray-600">{food.additionalNotes}</p>
                            </div>
                        </div>
                        <div className="text-sm text-gray-700">
                            <p><strong>Pickup:</strong> {food.pickupLocation}</p>

                            <p>
                                <strong>Expires:</strong>{' '}
                                {new Date(food.expiredDateTime).toLocaleString('en-US', {
                                    dateStyle: 'medium',
                                    timeStyle: 'short',
                                })}
                            </p>
                        </div>
                        <div className="flex justify-between gap-3 pt-2">
                            <Link to="/updatefood"><button className="bg-blue-500 text-white px-4 py-1.5 rounded hover:bg-blue-600 transition">
                                Update
                            </button></Link>
                            <Link><button className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600 transition">
                                Delete
                            </button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    );
};

export default ManageFood;
