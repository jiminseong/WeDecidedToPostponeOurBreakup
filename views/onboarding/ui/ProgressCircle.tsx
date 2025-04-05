import React from 'react';

interface ProgressCircleProps {
    page: number;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({ page }) => {
    return (
        <div>
            {page === 0 && (
                <div className="flex gap-[2rem]">
                    <div className="bg-jgreen h-[1em] w-[1em] rounded-full"></div>
                    <div className="h-[1em] w-[1em] rounded-full bg-[#E1F2CD]"></div>
                    <div className="h-[1em] w-[1em] rounded-full bg-[#E1F2CD]"></div>
                </div>
            )}
            {page === 1 && (
                <div className="flex gap-[2rem]">
                    <div className="h-[1em] w-[1em] rounded-full bg-[#E1F2CD]"></div>
                    <div className="bg-jgreen h-[1em] w-[1em] rounded-full"></div>
                    <div className="h-[1em] w-[1em] rounded-full bg-[#E1F2CD]"></div>
                </div>
            )}
            {page === 2 && (
                <div className="flex gap-[2rem]">
                    <div className="h-[1em] w-[1em] rounded-full bg-[#E1F2CD]"></div>
                    <div className="h-[1em] w-[1em] rounded-full bg-[#E1F2CD]"></div>
                    <div className="bg-jgreen h-[1em] w-[1em] rounded-full"></div>
                </div>
            )}
        </div>
    );
};

export default ProgressCircle;
