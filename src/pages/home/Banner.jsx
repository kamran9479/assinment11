import React from 'react';
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";



const Banner = () => {
    const images = [
        "https://i.ibb.co.com/sdWVKHKM/medium-shot-roommates-kitchen.jpg",
        "https://i.ibb.co.com/35HbQBNf/istockphoto-1343561122-1024x1024.jpg",
        "https://i.ibb.co.com/rGvMzD2w/istockphoto-1281314486-1024x1024.jpg",
        "https://i.ibb.co.com/GvKLDxdL/istockphoto-536665840-1024x1024.jpg",
        "https://i.ibb.co.com/sdWVKHKM/medium-shot-roommates-kitchen.jpg",
    ];


    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [current]);
    return (
        <div className="relative h-[700px] overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                style={{ backgroundImage: `url('${images[current]}')` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center px-4">
                <div className="p-6 rounded-xl max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold">Food for everyone 🍽️</h1>
                    <p className="text-lg mt-2">Discover mouth-watering meals crafted with love</p>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-6 transform -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 p-2 rounded-full"
            >
                <ChevronLeft size={32} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-6 transform -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 p-2 rounded-full"
            >
                <ChevronRight size={32} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${current === index ? "bg-white" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Banner;