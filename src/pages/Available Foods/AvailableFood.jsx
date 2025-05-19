import { useEffect, useState } from "react";
import FoodCard from "../../components/FoodCard";
import Heading from "../../components/Heading";


const AvailableFood = () => {
    const [food, setFoods] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    console.log(food)
    return (
        <div className="w-11/12 mx-auto py-2 lg:py-8">
            <Heading data={food} para={"Discover freshly cooked meals, extra groceries, and homemade delights shared by your community. Reduce food waste and make someone's day—one meal at a time."} title={"Explore Shared Foods Around You"}></Heading>
            <div>
                {
                    food?.length ? <div className="grid w-full mx-auto lg:grid-cols-3 gap-5">
                        {
                            food?.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                        }
                    </div> : <p className="my-40 text-5xl w-full flex justify-center items-center text-red-500">No Movie Available</p>
                }
            </div>
        </div>
    );
};

export default AvailableFood;