import React from 'react';

const ReviewSection = () => {
    return (
        <div>
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

export default ReviewSection;