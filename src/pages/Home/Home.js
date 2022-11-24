import React from 'react';
import HomeSlider from './HomeSlider';
import ResaleProducts from './ResaleProducts';
import WhyMobileBechi from './WhyMobileBechi';

const Home = () => {
    return (
        <section>
            <HomeSlider></HomeSlider>
            <ResaleProducts></ResaleProducts>
            <WhyMobileBechi></WhyMobileBechi>
        </section>
    );
};

export default Home;