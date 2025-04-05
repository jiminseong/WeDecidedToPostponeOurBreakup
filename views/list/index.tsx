'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import backIcon from '@/public/icons/icon/back.svg';
import heartUrl from '@/public/icons/Heart.svg';
import celndarUrl from '@/public/icons/Iconex/Filled/Calendar.svg';
const items = [
    { id: 1, name: '핑크벽지', days: 5, price: 1000, img: 'images/smallRoom.png' },
    { id: 2, name: '기본 침대', days: 7, price: 1000, img: 'images/whiteBead.png' },
    { id: 3, name: '봄 이불', days: 14, price: 1500, img: 'images/spring.png' },

    { id: 4, name: '핑크벽지', days: 5, price: 1000, img: 'images/smallRoom.png' },
    { id: 5, name: '기본 침대', days: 7, price: 1000, img: 'images/whiteBead.png' },
    { id: 6, name: '봄 이불', days: 14, price: 1500, img: 'images/spring.png' },

    { id: 7, name: '핑크벽지', days: 5, price: 1000, img: 'images/smallRoom.png' },
    { id: 8, name: '기본 침대', days: 7, price: 1000, img: 'images/whiteBead.png' },
    { id: 9, name: '봄 이불', days: 14, price: 1500, img: 'images/spring.png' },

    { id: 10, name: '핑크벽지', days: 5, price: 1000, img: 'images/smallRoom.png' },
    { id: 11, name: '기본 침대', days: 7, price: 1000, img: 'images/whiteBead.png' },
    { id: 12, name: '봄 이불', days: 14, price: 1500, img: 'images/spring.png' },
];

const ListPage = () => {
    const router = useRouter();

    const handleHome = () => {
        router.push('/home');
    };

    const handleChange = () => {
        router.push('/home/success');
    };

    return (
        <div className="flex min-h-screen flex-col bg-white px-4 py-6 text-black">
            <div className="mb-4 flex items-center justify-between text-[18px] font-semibold">
                <Image className="cursor-pointer" onClick={handleHome} src={backIcon} width={24} alt="홈으로 가기" />
                <span>아지트 아이템</span>
                <div className="w-[24px]" />
            </div>

            <div className="grid grid-cols-3 gap-4">
                {items.map((item) => {
                    const isLocked = item.id >= 4;

                    return (
                        <div
                            key={item.id}
                            className="flex flex-col items-center"
                            onClick={item.id < 3 ? handleChange : () => {}}
                        >
                            <div
                                className={`flex w-full flex-col items-center rounded-xl border border-[#EAEAEA] py-4 ${
                                    isLocked ? 'bg-gray-300 opacity-30' : 'cursor-pointer'
                                }`}
                            >
                                <div className={`relative h-16 w-16 ${isLocked ? 'blur-xs' : ''}`}>
                                    <Image src={item.img} alt={item.name} fill className="object-contain" />
                                </div>
                                <span className={`mt-2 text-sm font-medium ${isLocked ? 'blur-xs' : ''}`}>
                                    {item.name}
                                </span>
                            </div>

                            <div className="ml-1 mt-1 flex w-full items-center gap-2 font-semibold">
                                <Image width={16} src={celndarUrl} alt="사용되는 연장일" />
                                {item.days}
                            </div>
                            <div className="ml-1 mt-1 flex w-full items-center gap-2 font-semibold">
                                <Image width={16} src={heartUrl} alt="사용되는 포인트" />
                                {item.price.toLocaleString()}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ListPage;
