'use client';
import PageWrapper from '@/widgets/wrapper/PageWrapper';
import React from 'react';
import TopNavigationBar from './ui/TopNavigationBar';
import BottomNavigationBar from './ui/BottomNavigationBar';
import MyRoom from './ui/MyRoom';

const HomePage = () => {
    return (
        <>
            <PageWrapper>
                <TopNavigationBar />
                <MyRoom />
                <BottomNavigationBar />
            </PageWrapper>
        </>
    );
};

export default HomePage;
