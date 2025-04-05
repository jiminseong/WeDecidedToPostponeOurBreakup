import React from 'react';
import roomImageUrl from '@/public/images/room.png';
import prettyRoomImageUrl from '@/public/images/room-pretty.png';
import Image from 'next/image';

type MyRoomProps = {
    pretty: boolean;
};

const MyRoom = ({ pretty }: MyRoomProps) => {
    const imageSrc = pretty ? prettyRoomImageUrl : roomImageUrl;
    return (
        <div className="relative mx-auto mt-[64px] h-[390px] w-[346px]">
            <Image src={imageSrc} alt="방꾸미기" fill className="rounded-xl object-cover" priority />
        </div>
    );
};

export default MyRoom;
