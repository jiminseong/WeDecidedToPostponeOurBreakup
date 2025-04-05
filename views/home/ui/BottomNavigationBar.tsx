'use client';

import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';
import postChatGpt from '../api/postChatGpt';
import { useSetAtom } from 'jotai';
import { imageUrlState } from '@/app/atom/imageAtom';
import { resultState } from '@/app/atom/resultAtom';

const BottomNavigationBar = () => {
    const router = useRouter();
    const setImageUrl = useSetAtom(imageUrlState);
    const setResult = useSetAtom(resultState);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const imageUrl = URL.createObjectURL(file);

        setImageUrl(imageUrl);

        const result = await postChatGpt(imageUrl);
        if (result) {
            setResult(result);
            router.push('/result');
        } else {
            alert('GPT 응답 실패');
        }
    };

    return (
        <>
            <div className="flex w-full justify-center gap-4">
                <div className="flex w-[50%] cursor-pointer flex-col rounded-[22px] bg-white p-[2.0125em] text-center text-[22px] font-semibold shadow-custom">
                    <p className="text-[18px] md:text-[20px]">환경 퀴즈</p>
                    <p>같이 풀기</p>
                    ✏️<p className="text-[14px] text-[#929292]">하루 1문제</p>
                </div>

                <div
                    onClick={() => fileInputRef.current?.click()}
                    className="flex w-[50%] cursor-pointer flex-col rounded-[22px] bg-white p-[2.0125em] text-center text-[22px] font-semibold shadow-custom"
                >
                    <p className="text-[18px] md:text-[20px]">환경 보호</p>
                    <p>인증 하기</p>
                    📷<p className="text-[14px] text-[#929292]">오늘 한 데이트</p>
                </div>
            </div>

            {/* 숨겨진 파일 업로더 */}
            <input
                type="file"
                accept="image/*"
                capture="environment" // 모바일 카메라 촬영도 가능하게 함
                ref={fileInputRef}
                onChange={handleImageUpload}
                className="absolute h-0 w-0 opacity-0"
            />
        </>
    );
};

export default BottomNavigationBar;
