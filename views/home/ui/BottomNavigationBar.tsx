'use client';

import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';
// import postChatGpt from '../api/postChatGpt';
import { useSetAtom } from 'jotai';
import { imageUrlState } from '@/app/atom/imageAtom';
import { resultState } from '@/app/atom/resultAtom';
// import { uploadImageToS3 } from '../api/uploadImageToS3';
import { ddayState } from '@/app/atom/ddayAtom';
import { pointState } from '@/app/atom/pointAtom';

const BottomNavigationBar = () => {
    const router = useRouter();
    const setImageUrl = useSetAtom(imageUrlState);
    const setResult = useSetAtom(resultState);
    const setPoint = useSetAtom(pointState);
    const setDday = useSetAtom(ddayState);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            // const imageUrl = await uploadImageToS3(file); // ✅ S3 업로드
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                const base64 = reader.result as string;
                setImageUrl(base64);
            };

            // const result = await postChatGpt(imageUrl); // GPT 전송
            if (file) {
                setResult(true);
                setPoint((prev) => prev + 20);
                setDday((prev) => prev + 10);

                router.push('/result');
            } else {
            }
        } catch (err) {
            console.error('업로드 중 오류:', err);
            alert('이미지 업로드 실패');
        }
    };

    return (
        <>
            <div className="flex w-full justify-center gap-4">
                <div
                    onClick={() => fileInputRef.current?.click()}
                    className="flex w-[50%] cursor-pointer flex-col rounded-[22px] bg-white p-[2.0125em] text-center text-[22px] font-semibold shadow-custom"
                >
                    <p className="text-[18px] font-semibold md:text-[20px]">환경 보호</p>
                    <p className="font-bold">인증 하기</p>
                    📷<p className="text-[14px] text-[#929292]">이별 미루기</p>
                </div>

                <div
                    onClick={() => router.push('/list')}
                    className="flex w-[50%] cursor-pointer flex-col rounded-[22px] bg-white p-[2.0125em] text-center text-[22px] font-semibold shadow-custom"
                >
                    <p className="text-[18px] font-semibold md:text-[20px]">우리아지트</p>
                    <p className="font-bold">방 꾸미기</p>
                    🎀<p className="text-[14px] text-[#929292]">쇼핑하기</p>
                </div>
            </div>

            {/* 숨겨진 파일 업로더 */}
            <input
                type="file"
                accept="image/*"
                capture="environment" // 모바일 카메라 촬영도 가능하게 함
                ref={fileInputRef}
                onChange={handleImageUpload}
                className="absolute bottom-0 h-0 w-0 opacity-0"
            />
        </>
    );
};

export default BottomNavigationBar;
