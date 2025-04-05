import React from 'react';
import heartUrl from '@/public/icons/Heart.svg';
import Image from 'next/image';

const TopNavigationBar = () => {
    //TODO : 추후 데이터 전역으로 관리
    const count = 100;
    const point = 0;

    return (
        <div className="mt-6 flex h-[60px] justify-between md:h-[72px]">
            <div className="text-[26px] font-semibold">우.이.미</div>
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                    <div className="bg-wpuple flex h-[28px] w-[52px] items-center justify-center rounded-full font-[600] text-white">
                        이별
                    </div>
                    <div className="text-wpuple font-semibold">D-{count}</div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="bg-lpink flex h-[28px] w-[52px] items-center justify-center rounded-full text-white">
                        <Image src={heartUrl} width={18} height={18} alt="포인트" />
                    </div>
                    <div className="text-llpink font-semibold">{point}</div>
                </div>
            </div>
        </div>
    );
};

export default TopNavigationBar;
