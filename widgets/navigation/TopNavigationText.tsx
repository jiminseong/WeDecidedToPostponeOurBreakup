import Link from 'next/link';
import React from 'react';

interface TopNavigationTextProps {}

const TopNavigationText: React.FC<TopNavigationTextProps> = ({}) => {
    return (
        <div className="absolute left-0 top-0 flex h-[10%] w-[100%] items-center gap-[1em] bg-jwhite px-[1em] pt-[2em] text-left text-[28px] font-bold text-black">
            <Link href="/home">
                <p className="cursor-pointer">홈</p>
            </Link>
            <Link href="/home">
                <p className="cursor-pointer text-lightgrey">맞춤 정보</p>
            </Link>
        </div>
    );
};

export default TopNavigationText;
