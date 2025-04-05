'use client';
import BottomNavigationBar from '@/widgets/navigation/BottomNavigationBar';
import TopNavigationText from '@/widgets/navigation/TopNavigationText';

import React from 'react';
import MyWallet from './ui/MyWallet';
import RestaurantSection from './ui/RestaurantSection';
import CategoryList from './ui/CategoryList';
import FeatureNavigation from './ui/FeatureNavigation';
import Description from './ui/Description';

const HomePage = () => {
    return (
        <>
            <Description />
            <div className="relative h-[100vh] w-full overflow-hidden px-[1em] pb-[20%] pt-[35%] md:pb-[20%] md:pt-[15%]">
                <TopNavigationText />
                <div className="flex h-full w-full flex-col gap-[1em] overflow-scroll">
                    <MyWallet />
                    <CategoryList />
                    <FeatureNavigation />
                    <RestaurantSection />
                </div>
                <BottomNavigationBar />
            </div>
        </>
    );
};

export default HomePage;
