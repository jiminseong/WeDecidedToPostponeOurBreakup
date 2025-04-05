'use client';
import PageWrapper from '@/widgets/wrapper/PageWrapper';
import React from 'react';
import TopNavigationBar from './ui/TopNavigationBar';
import BottomNavigationBar from './ui/BottomNavigationBar';
import MyRoom from './ui/MyRoom';

type HomePageProps = {
    pretty?: boolean;
};

const HomePage = ({ pretty }: HomePageProps) => {
    return (
        <>
            <PageWrapper>
                <TopNavigationBar />
                <MyRoom pretty={pretty} />
                <BottomNavigationBar />
            </PageWrapper>
        </>
    );
};

export default HomePage;
