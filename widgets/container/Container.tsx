import React from 'react';

interface ContainerProps {
    children?: React.ReactNode;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({ className = '', children }) => {
    return (
        <div
            className={`rounded-2xl bg-[#FFFFFF] ${className}`}
            style={{ boxShadow: '0px 2px 20px 0 rgba(119,183,45,0.1)' }}
        >
            {children}
        </div>
    );
};

export default Container;
