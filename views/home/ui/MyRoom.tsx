import React from 'react';
import roomImageUrl from '@/public/images/room.png';
import Image from 'next/image';

const MyRoom = () => {
    return (
        <div className="relative mx-auto mt-[64px] h-[395px] w-[346px]">
            <Image src={roomImageUrl} alt="방꾸미기" fill className="rounded-xl object-cover" priority />
        </div>
    );
};

export default MyRoom;
