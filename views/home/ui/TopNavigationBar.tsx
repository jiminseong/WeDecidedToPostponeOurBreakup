import React from 'react';
import heartUrl from '@/public/icons/Heart.svg';
import Image from 'next/image';
import { useAtom } from 'jotai';
import { ddayState } from '@/app/atom/ddayAtom';
import { pointState } from '@/app/atom/pointAtom';

const TopNavigationBar = () => {
    const [dday] = useAtom(ddayState);
    const [point] = useAtom(pointState);

    return (
        <div className="mt-6 flex h-[60px] justify-between md:h-[72px]">
            <div className="text-[26px] font-bold">우.이.미</div>
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                    <div className="flex h-[28px] w-[52px] items-center justify-center rounded-full bg-wpuple font-[600] text-white">
                        이별
                    </div>
                    <div className="font-bold text-wpuple">D-{dday}</div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex h-[28px] w-[52px] items-center justify-center rounded-full bg-lpink text-white">
                        <Image src={heartUrl} width={18} height={18} alt="포인트" />
                    </div>
                    <div className="font-bold text-llpink">{point}</div>
                </div>
            </div>
        </div>
    );
};

export default TopNavigationBar;
