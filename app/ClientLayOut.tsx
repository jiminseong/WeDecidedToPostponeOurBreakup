'use client';
import React from 'react';
import { Pretendard } from './fonts/font';

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div
            className={`${Pretendard.className} bg-jbackground} inset-0 z-[210] mx-auto min-h-screen w-full min-w-[320px] max-w-[var(--max-width)]`}
        >
            {children}
        </div>
    );
};

export default ClientLayout;
