'use client';
import React from 'react';

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="inset-0 z-[210] mx-auto min-h-screen w-full min-w-[320px] max-w-[var(--max-width)] bg-jbackground">
            {children}
        </div>
    );
};

export default ClientLayout;
