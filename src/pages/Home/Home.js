import React from 'react';
import AdvertiseProducts from './AdvertiseProducts';
import HomeSlider from './HomeSlider';
import ResaleProducts from './ResaleProducts';
import WhyMobileBechi from './WhyMobileBechi';

const Home = () => {
    return (
        <section>
            <HomeSlider></HomeSlider>
            <ResaleProducts></ResaleProducts>
            <AdvertiseProducts></AdvertiseProducts>
            <WhyMobileBechi></WhyMobileBechi>
        </section>
    );
};

export default Home;