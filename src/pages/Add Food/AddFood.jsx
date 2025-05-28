import  { useContext } from "react";
import Heading from "../../components/Heading";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Auth/AuthProvider";
import { serverURL } from "../../Auth/AuthProvider";

const AddFood = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    console.log(user)
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const foodName = form.foodName.value
        const foodImg = form.foodImage.value
        const foodQuantity = form.quantity.value
        const pickupLocation = form.location.value
        const expiredDateTime = form.expiredAt.value
        const additionalNotes = form.notes.value
        const foodStatus = form.status.value
        const userName = user.displayName
        const userEmail = user.email
        const photo = user.photoURL

        const donator = {
            name: userName,
            email: userEmail,
            photo
        }

        const food = {
            foodName,
            foodImg,
            foodQuantity,
            pickupLocation,
            expiredDateTime,
            additionalNotes,
            foodStatus,
            donator
        }

        fetch(`${serverURL}/foods`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(food)
        })
            .then(data => data.json())
            .then(result => {
                Swal.fire({
                    icon: 'success',
                    title: 'Food added Successfully',
                    text: 'welcome',
                });
                navigate('/availablefood')
                
            })
    }

    return (
        <div>
            <Heading title={"Share a Meal, Spread a Smile"} para={"Got extra food? Don’t let it go to waste! Share it with your community by adding the details below. Every shared meal can make someone’s day a little better."}></Heading>
            <div className="max-w-3xl mx-auto p-6 bg-white my-5 rounded-lg shadow-2xl">
                <h2 className="text-2xl font-bold mb-4 text-center">Add Food</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block font-medium">Food Name</label>
                        <input
                            type="text"
                            name="foodName"
                            required
                            className="w-full border p-2 rounded"
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Food Image URL</label>
                        <input
                            type="url"
                            name="foodImage"

                            required
                            className="w-full border p-2 rounded"
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Food Quantity</label>
                        <input
                            type="text"
                            name="quantity"

                            required
                            className="w-full border p-2 rounded"
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Pickup Location</label>
                        <input
                            type="text"
                            name="location"

                            required
                            className="w-full border p-2 rounded"
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Expired Date</label>
                        <input
                            type="date"
                            name="expiredAt"

                            required
                            className="w-full border p-2 rounded"
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Additional Notes</label>
                        <textarea
                            name="notes"
                            className="w-full border p-2 rounded"
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Food Status</label>
                        <input
                            type="text"
                            name="status"
                            value={'Available'}
                            readOnly
                            className="w-full border p-2 rounded bg-gray-100"
                        />
                    </div>

                    <div className="border-t pt-4">
                        <h3 className="font-semibold mb-2">Donator Info</h3>
                        <div className="flex items-center space-x-4">
                            <img
                                src={user?.photoURL}
                                alt="Donator"
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <p className="font-medium">{user?.name}</p>
                                <p className="text-sm text-gray-600">{user?.email}</p>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                    >
                        Add Food
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddFood;
