import React from 'react';

const Home = () => {
    return (
        <div className="space-y-12">
            {/* Banner / Slider */}
            <section className="relative h-[400px] bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092')] flex items-center justify-center text-white text-center">
                <div className="bg-black bg-opacity-50 p-6 rounded-xl">
                    <h1 className="text-4xl md:text-5xl font-bold">Delicious Moments Await 🍽️</h1>
                    <p className="text-lg mt-2">Discover mouth-watering meals crafted with love</p>
                </div>
            </section>

            {/* Featured Foods */}
            <section className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-semibold mb-6 text-center">🍕 Featured Foods</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                        { name: "Cheesy Margherita Pizza", img: "https://source.unsplash.com/400x300/?pizza" },
                        { name: "Spicy Ramen Bowl", img: "https://source.unsplash.com/400x300/?ramen" },
                        { name: "Grilled Chicken Tacos", img: "https://source.unsplash.com/400x300/?tacos" },
                        { name: "Butter Garlic Shrimp", img: "https://source.unsplash.com/400x300/?shrimp" },
                        { name: "Classic Cheeseburger", img: "https://source.unsplash.com/400x300/?burger" },
                        { name: "Strawberry Cheesecake", img: "https://source.unsplash.com/400x300/?cheesecake" },
                    ].map((food, i) => (
                        <div key={i} className="rounded-xl overflow-hidden shadow-lg bg-white">
                            <img src={food.img} alt={food.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="font-bold text-lg">{food.name}</h3>
                                <p className="text-sm text-gray-600 mt-1">Tasty and freshly made, just for you!</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-6">
                    <a href="/available-foods">
                        <button className="text-white bg-red-500 hover:bg-red-600 px-6 py-2 text-lg rounded-full">
                            Show All
                        </button>
                    </a>
                </div>
            </section>

            {/* Extra Section 1: Customer Testimonials */}
            <section className="bg-yellow-50 py-10">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-semibold mb-4">❤️ What Our Customers Say</h2>
                    <p className="text-gray-700 italic">“Absolutely love the flavors! Every bite tastes like home.” – Sarah K.</p>
                    <p className="text-gray-700 italic mt-2">“Quick delivery, amazing taste, and friendly service!” – James A.</p>
                </div>
            </section>

            {/* Extra Section 2: Why Choose Us */}
            <section className="bg-white py-10">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 border rounded-xl shadow-md hover:shadow-lg transition">
                        <h3 className="text-xl font-bold mb-2">🥇 Premium Quality</h3>
                        <p className="text-gray-600">Only the freshest ingredients go into our meals.</p>
                    </div>
                    <div className="p-6 border rounded-xl shadow-md hover:shadow-lg transition">
                        <h3 className="text-xl font-bold mb-2">🚚 Fast Delivery</h3>
                        <p className="text-gray-600">Get your food hot and fresh, every time.</p>
                    </div>
                    <div className="p-6 border rounded-xl shadow-md hover:shadow-lg transition">
                        <h3 className="text-xl font-bold mb-2">💰 Affordable Prices</h3>
                        <p className="text-gray-600">Tasty doesn’t have to be pricey. Enjoy more, pay less.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;