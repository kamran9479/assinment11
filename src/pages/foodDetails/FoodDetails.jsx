
import { useContext, useState } from 'react';
import Modal from 'react-modal';
import { AuthContext } from '../../Auth/authProvider';
import { useLoaderData } from 'react-router-dom';
import Heading from '../../components/Heading';

Modal.setAppElement('#root'); // Required for accessibility

const DetailsPage = () => {
  const food = useLoaderData();
  console.log(food)

  const { user } = useContext(AuthContext)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notes, setNotes] = useState(food.additionalNotes);


  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleRequest = (e) => {
    e.preventDefault();

    const requestFoodData = {
      foodName: food.foodName,
      foodImage: food.foodImg,
      foodId: food._id,
      donatorEmail: food.donator.email,
      donatorName: food.donator.name,
      userEmail: user.email,
      requestDate: new Date().toISOString(),
      pickupLocation: food.pickupLocation,
      expireDate: new Date(food.expiredDateTime).toLocaleString(),
      notes,
      foodStatus : "Requested"
    };

    fetch('http://localhost:3000/foodreq', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(requestFoodData)
    })
      .then(data => data.json())
      .then(result => console.log(result))
    closeModal();
  };

  return (
    <div className="w-full md:p-6 max-w-7xl mx-auto border">
      <div className=" bg-gray-50 px-4">
        <Heading title={"Food Item Details"} para={"Get to know more about this shared food item—its ingredients, freshness, origin, and who’s offering it. If it suits your need, don’t hesitate to request and reduce food waste together."}></Heading>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-xl rounded-xl overflow-hidden border">
          {/* Food Image Section */}
          <div className="h-full">
            <img
              src={food.foodImg}
              alt={food.foodName}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Food Info Section */}
          <div className="flex flex-col justify-between p-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
                {food.foodName}
              </h2>

              {/* Donator Info */}
              <div className="mb-4">
                <p className="text-lg font-medium text-gray-700">
                  <strong>Donator:</strong> {food.donator?.name}
                </p>
                <p className="text-sm text-gray-500">{food.donator?.email}</p>
              </div>

              {/* Notes */}
              {food.additionalNotes && (
                <p className="text-sm italic text-gray-600 bg-gray-100 px-4 py-2 rounded mb-4 border-l-4 border-blue-400">
                  📝 {food.additionalNotes}
                </p>
              )}

              {/* Location and Quantity */}
              <div className="mb-4 space-y-1">
                <p className="text-gray-700">
                  <strong>Pickup Location:</strong> {food.pickupLocation}
                </p>
                <p className="text-gray-600"><strong>Quantity : </strong>{food.foodQuantity}</p>
              </div>

              {/* Expiry */}
              <p className="mb-6 text-sm text-gray-700">
                <strong>Expires on:</strong>{" "}
                {new Date(food.expiredDateTime).toLocaleString()}
              </p>

              {/* Status */}
              <span
                className={`inline-block px-4 py-1 text-sm font-semibold rounded-full ${food.foodStatus == "Available"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
                  }`}
              >
                {food.foodStatus}
              </span>
            </div>

            {/* Donator Profile */}
            <div className="flex items-center mt-6 gap-4 border-t pt-4">
              <img
                src={food?.donator?.image}
                alt={food?.donator?.name}
                className="w-12 h-12 object-cover rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-800">{food.donator?.name}</p>
                <p className="text-sm text-gray-500">{food.donator?.email}</p>
              </div>
            </div>

            {/* Request Button */}
            <button
              onClick={openModal}
              className="mt-8 w-full bg-blue-600 text-white text-lg py-2 rounded hover:bg-blue-700 transition-all duration-200"
            >
              Request This Food
            </button>
          </div>
        </div>
      </div>


      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="bg-white p-6 w-full max-w-2xl rounded-xl shadow-2xl outline-none max-h-[90vh] overflow-y-auto"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4"
      >


        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center border-b pb-2">
          🥗 Request This Food
        </h3>

        <form onSubmit={handleRequest} className="space-y-5 min-h-screen text-gray-700">
          {/* Food Name */}
          <div>
            <label className="block text-sm font-semibold mb-1">Food Name</label>
            <input
              type="text"
              value={food.foodName}
              readOnly
              className="w-full px-4 py-2 border rounded-md bg-gray-100"
            />
          </div>

          {/* Food Image */}
          <div>
            <label className="block text-sm font-semibold mb-1">Food Image</label>
            <img
              src={food.foodImg}
              alt="Food"
              className="w-full h-[200px] rounded-md border"
            />
          </div>

          {/* Grid for Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Food ID</label>
              <input
                type="text"
                value={food._id}
                readOnly
                className="w-full px-4 py-2 border rounded-md bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Pickup Location</label>
              <input
                type="text"
                value={food.pickupLocation}
                readOnly
                className="w-full px-4 py-2 border rounded-md bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Donator Name</label>
              <input
                type="text"
                value={food.donator?.name}
                readOnly
                className="w-full px-4 py-2 border rounded-md bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Donator Email</label>
              <input
                type="text"
                value={food.donator?.email}
                readOnly
                className="w-full px-4 py-2 border rounded-md bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Your Email</label>
              <input
                type="text"
                value={user?.email}
                readOnly
                className="w-full px-4 py-2 border rounded-md bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Request Date</label>
              <input
                type="text"
                value={new Date().toLocaleString()}
                readOnly
                className="w-full px-4 py-2 border rounded-md bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Expire Date</label>
              <input
                type="text"
                value={new Date(food.expiredDateTime).toLocaleString()}
                readOnly
                className="w-full px-4 py-2 border rounded-md bg-gray-100"
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-semibold mb-1">Additional Notes</label>
            <textarea
              className="w-full px-4 py-2 border rounded-md resize-none h-24 bg-white"
              placeholder="Write something (optional)..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-4 border-t mt-4">
            <button
              type="button"
              onClick={closeModal}
              className="px-5 py-2 bg-gray-300 rounded-md hover:bg-gray-400 text-gray-800 font-medium transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 font-medium transition"
            >
              Request
            </button>
          </div>
        </form>
      </Modal>


    </div>

  );

};

// Tailwind style helper (optional)
const inputStyle = `input-style`;

export default DetailsPage;
