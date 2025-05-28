import React, { useEffect, useState } from 'react';
import FoodCard from '../../components/FoodCard';
import { Link } from 'react-router-dom';
import Heading from '../../components/Heading';
import { serverURL } from './../../Auth/AuthProvider';


const FeatureFood = () => {
    const [food, setFoods] = useState([])
    useEffect(() => {
        fetch(`${serverURL}/foods`)
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
 
    return (
        <div className="w-11/12 mx-auto py-2 lg:py-8">
            <div>
                <Heading title={"Featured Delights of the Day"} para={"Handpicked and highly requested—these special food items are loved by our community. Grab them before they’re gone and enjoy a tasty surprise shared with care!"}></Heading>
                {
                    food?.length ? <div className="grid w-full mx-auto lg:grid-cols-3 gap-5">
                        {
                            food?.sort((a, b) => b.foodQuantity - a.foodQuantity)
                                .slice(0, 6)
                                .map(food => <FoodCard key={food._id} food={food} />)
                        }
                    </div> : <p className="my-40 text-5xl w-full flex justify-center items-center text-red-500">No foods Available</p>
                }

                {
                    food?.length && <button className="btn bg-slate-200 block mx-auto mt-10"><Link to="/availablefood">See all foods</Link></button>

                }
            </div>
        </div>
    );
};

export default FeatureFood;