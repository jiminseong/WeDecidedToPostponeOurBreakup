import Container from '@/widgets/container/Container';
import React from 'react';

interface CurrentLocationProps {}

const CurrentLocation: React.FC<CurrentLocationProps> = ({}) => {
    return (
        <div className="absolute bottom-4 z-20 h-[116px] w-full px-8">
            <Container className="h-full w-full px-4 py-[1.25em]">
                <div className="flex w-full items-center justify-between">
                    <p className="text-[2em] font-bold text-black">덩실 분식</p>
                    <div className="rounded-[0.8125em] bg-jorange px-2 py-0.5 font-semibold text-white">
                        카페/디저트
                    </div>
                </div>

                <div className="flex w-full items-center justify-between">
                    <p className="font-bold text-jgreen">11/14 오후 1시 30분</p>
                    <p className="font-bold text-jblue">적립 포인트 : 500P</p>
                </div>
            </Container>
        </div>
    );
};

export default CurrentLocation;
