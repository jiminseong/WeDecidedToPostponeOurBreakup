import BottomNavigationBar from '@/widgets/navigation/BottomNavigationBar';
import Image from 'next/image';
import React from 'react';
import leftArrow2Url from '@/public/icons/leftArrow2.svg';
import CautionMessage from './ui/CautionMessage';
import Conversaition from './ui/Conversaition';
import Link from 'next/link';

interface AIPageProps {}

const AIPage: React.FC<AIPageProps> = ({}) => {
    return (
        <div className="relative h-[100vh] w-full overflow-hidden px-[1em] pb-[15%] pt-[35%] md:pt-[25%]">
            <div className="absolute top-[54px] flex w-full gap-[1em]">
                <Link className="flex" href="/home">
                    <Image src={leftArrow2Url} alt="되돌아가기아이콘" />
                </Link>
                <p className="text-[28px] font-bold">
                    <span className="text-black">제천</span>
                    <span className="text-[#ec6a24]">메</span>
                    <span className="text-jblue">이</span>
                    <span className="text-jgreen">트</span>
                </p>
            </div>

            <div className="flex h-full w-full flex-col gap-[1em] overflow-scroll">
                <CautionMessage />
                <Conversaition />
            </div>
            <BottomNavigationBar />
        </div>
    );
};

export default AIPage;
