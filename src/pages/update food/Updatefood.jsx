import { useLoaderData, useNavigate } from "react-router-dom";
import Heading from "../../components/Heading";
import { useState } from "react";
import Swal from "sweetalert2";


const Updatefood = () => {
    const food = useLoaderData()
    const navigate = useNavigate()
    console.log(food)
    const [foodName,setFoodName] = useState(food.foodName)
    const [foodImages,setfoodImage] = useState(food.foodImg)
    const [foodQuantity,setfoodQuantity] = useState(food.foodQuantity)
    const [pickupLocation,setpickupLocation] = useState(food.pickupLocation)
    const [expiredDateTime,setexpiredDateTime] = useState(food.expiredDateTime)
    const [additionalNotes,setadditionalNotes] = useState(food.additionalNotes)

    const handleSubmit = (e) => {

        const data = {
            foodName,
            foodImages,
            foodQuantity,
            pickupLocation,
            expiredDateTime,
            additionalNotes

        }
        e.preventDefault()
        fetch(`http://localhost:3000/updatefood/${food._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    title: "Updated!",
                    icon: "success",
                    draggable: true
                });
                navigate(`/foods/${food._id}`)

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
                            onChange={(e) => setFoodName(e.target.value)}
                            value={foodName}
                            required
                            className="w-full border p-2 rounded"
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Food Image URL</label>
                        <input
                            type="url"
                            name="foodImage"
                            onChange={(e) => {
                                setfoodImage(e.target.value)
                                console.log(e.target)
                            }}
                            value={foodImages}
                            required
                            className="w-full border p-2 rounded"
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Food Quantity</label>
                        <input
                            type="text"
                            name="quantity"
                            onChange={(e) => setfoodQuantity(e.target.value)}
                            value={foodQuantity}
                            required
                            className="w-full border p-2 rounded"
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Pickup Location</label>
                        <input
                            type="text"
                            name="location"
                            onChange={(e) => setpickupLocation(e.target.value)}
                            value={pickupLocation}
                            required
                            className="w-full border p-2 rounded"
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Expired Date</label>
                        <input
                            type="date"
                            name="expiredAt"
                            onChange={(e) => setexpiredDateTime(e.target.value)}
                            value={expiredDateTime}
                            required
                            className="w-full border p-2 rounded"
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Additional Notes</label>
                        <textarea
                            name="notes"
                            onChange={(e) => setadditionalNotes(e.target.value)}
                            value={additionalNotes}
                            className="w-full border p-2 rounded"
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Food Status</label>
                        <input
                            type="text"
                            name="status"
                            value={'Available'}
                            className="w-full border p-2 rounded bg-gray-100"
                        />
                    </div>


                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                    >
                        Update Food
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Updatefood;