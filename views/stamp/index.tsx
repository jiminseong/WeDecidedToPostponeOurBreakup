import Image from 'next/image';
import Link from 'next/link';
import leftArrowUrl from '@/public/icons/leftArrow.svg';
import exampleMapImageUrl from '@/public/images/exampleMapImage.webp';
import React from 'react';
import QrLink from './ui/QrLink';
import CurrentLocation from './ui/CurrentLocation';

interface StampPageProps {}

const StampPage: React.FC<StampPageProps> = ({}) => {
    return (
        <div className="relative h-[100vh] w-full overflow-hidden pb-[20%]">
            <div className="absolute flex h-[6em] w-full items-center gap-[1em] bg-jwhite px-[1em] pt-[1.5em]">
                <Link className="flex" href="/home">
                    <Image src={leftArrowUrl} alt="되돌아가기아이콘" />
                </Link>
                <p className="text-[28px] font-bold text-black">스탬프 투어</p>
            </div>
            <Image className="aboslute" src={exampleMapImageUrl} alt="지도예시이미지" />
            <QrLink />
            <CurrentLocation />
        </div>
    );
};

export default StampPage;
