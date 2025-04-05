'use client';
import PageWrapper from '@/widgets/wrapper/PageWrapper';
import React from 'react';
import TopNavigationBar from './ui/TopNavigationBar';
import BottomNavigationBar from './ui/BottomNavigationBar';
import MyRoom from './ui/MyRoom';
import { useSearchParams } from 'next/navigation';

const HomePage = () => {
    const searchParams = useSearchParams();
    const success = searchParams.get('success') === 'true';

    return (
        <>
            <PageWrapper>
                <TopNavigationBar />
                <MyRoom pretty={success} />
                <BottomNavigationBar />
            </PageWrapper>
        </>
    );
};

export default HomePage;
