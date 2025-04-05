'use client';

import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAtomValue, useSetAtom } from 'jotai';
import { imageUrlState } from '@/app/atom/imageAtom';
import { resultState } from '@/app/atom/resultAtom';
import browserIcon from '@/public/icons/Browser.svg';
import locationIcon from '@/public/icons/Location.svg';
import backIcon from '@/public/icons/Back.svg';
import Image from 'next/image';
import html2canvas from 'html2canvas';

const ResultPage = () => {
    const router = useRouter();
    const image = useAtomValue(imageUrlState);
    const imageRef = useRef(null);
    const result = useAtomValue(resultState);
    const setImage = useSetAtom(imageUrlState);
    const setResult = useSetAtom(resultState);
    const [isImageLoaded, setIsImageLoaded] = React.useState(false);

    useEffect(() => {
        if (result === false) {
            setImage(null);
            setResult(false);
            router.push('/home');
        }
    }, [result]);

    const downloadImage = () => {
        if (imageRef.current && isImageLoaded) {
            html2canvas(imageRef.current, {
                backgroundColor: null,
                useCORS: true,
            })
                .then((canvas) => {
                    const link = document.createElement('a');
                    link.download = '우이미기록.png';
                    link.href = canvas.toDataURL('image/png');
                    link.click();
                })
                .catch((error) => {
                    console.error('html2canvas 오류:', error);
                });
        } else {
            console.log('이미지가 로드되지 않았거나 ref가 없습니다.');
        }
    };

    const handleHome = async () => {
        setImage(null);
        setResult(false);
        await router.push('/home');
    };
    if (!image) return null;

    return (
        <div className="flex min-h-screen flex-col bg-black px-4 py-6 text-white">
            <div className="mb-4 flex items-center justify-between text-[18px] font-semibold">
                <Image className="cursor-pointer" onClick={handleHome} src={backIcon} width={24} alt="홈으로 가기" />
                <span>공유하기</span>
                <span className="cursor-pointer text-pink-300" onClick={downloadImage}>
                    저장
                </span>
            </div>

            <div ref={imageRef} className="relative mb-4 h-[400px] w-full overflow-hidden rounded-2xl">
                <Image
                    width={300}
                    height={300}
                    src={image}
                    alt="업로드 이미지"
                    className="h-full w-full object-cover"
                    onLoad={() => setIsImageLoaded(true)}
                />
                <div className="absolute bottom-4 left-4 z-10 space-y-2 text-[16px]">
                    <div className="flex items-center gap-2">
                        <Image src={locationIcon} width={24} alt="위치" />
                        <span className="text-[16px] font-semibold">스타벅스 화성봉담점</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src={browserIcon} width={24} alt="날짜" />
                        <span className="text-[16px] font-semibold">2025.04.06 일요일</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultPage;
