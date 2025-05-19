import React from 'react';
import Banner from './Banner';
import ReviewSection from './ReviewSection';
import FeatureFood from './FeatureFood';

const Home = () => {
    return (

        <div className="">
            {/* Banner / Slider */}
            <Banner></Banner>
            <FeatureFood></FeatureFood>
            <ReviewSection></ReviewSection>

            
            

        </div>
       
    );
};

export default Home;