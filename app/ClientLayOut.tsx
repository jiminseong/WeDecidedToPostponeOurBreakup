'use client';
import React from 'react';
import { Pretendard } from './fonts/font';

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div
            className={`${Pretendard.className} inset-0 z-[210] mx-auto min-h-screen w-full min-w-[320px] max-w-[var(--max-width)] bg-white`}
        >
            {children}
        </div>
    );
};

export default ClientLayout;
