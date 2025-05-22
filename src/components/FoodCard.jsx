
import { Link } from 'react-router-dom';

const FoodCard = ({ food }) => {
    console.log(food)

    return (
        <div className=" bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition">
            <img src={food.foodImg} alt={food.foodName} className="w-full h-48 object-cover" />

            <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">{food.foodName}</h2>
                <p className="text-sm text-gray-600 mb-2"><strong>Quantity</strong>: {food.foodQuantity} • Expires: {new Date(food.expiredDateTime).toLocaleString()}</p>
                <p className="text-sm text-gray-700 mb-2">📍 {food.pickupLocation}</p>
                {food.additionalNotes && (
                    <p className="text-sm text-gray-500 mb-3 italic">📝 {food.additionalNotes}</p>
                )}
                <div className="flex items-center gap-3 mt-4">
                    <img src={food?.donator?.image} alt={food?.donator?.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                        <p className="text-sm font-medium text-gray-800">{food.donator?.name}</p>
                        <p className="text-xs text-gray-500">{food.donator?.email}</p>
                    </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${food.foodStatus == 'Available' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {food.foodStatus}
                    </span>
                    <Link to={`/foods/${food._id}`}><button className="bg-blue-500 text-white px-4 py-1.5 rounded-lg hover:bg-blue-600 transition text-sm font-medium">
                        View Details
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
