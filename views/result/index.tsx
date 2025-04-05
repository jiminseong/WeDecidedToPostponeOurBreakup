'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAtomValue, useSetAtom } from 'jotai';
import { imageUrlState } from '@/app/atom/imageAtom';
import { resultState } from '@/app/atom/resultAtom';

const ResultPage = () => {
    const router = useRouter();
    const image = useAtomValue(imageUrlState);
    const result = useAtomValue(resultState);
    const setImage = useSetAtom(imageUrlState);
    const setResult = useSetAtom(resultState);

    useEffect(() => {
        try {
            const parsed = typeof result === 'string' ? JSON.parse(result) : result;
            if (!parsed?.isSuccess) {
                alert('텀블러 인증이 실패했어요. 다시 시도해주세요.');
                setImage(null);
                setResult(null);
                router.push('/home');
            }
        } catch (e) {
            console.warn('GPT 응답 파싱 실패');
            setImage(null);
            setResult(null);
            router.push('/home');
        }
    }, []);

    if (!image) return null;

    return (
        <div className="flex min-h-screen flex-col bg-black px-4 py-6 text-white">
            <div className="mb-4 flex items-center justify-between text-[18px] font-semibold">
                <span>공유하기</span>
                <span className="text-pink-300">저장</span>
            </div>

            <div className="relative mb-4 h-[400px] w-full overflow-hidden rounded-2xl">
                <img src={image} alt="업로드 이미지" className="h-full w-full object-cover" />
            </div>

            <div className="space-y-2 text-[16px]">
                <div className="flex items-center gap-2">
                    <span>📍</span>
                    <span>스타벅스 화성봉담점</span>
                </div>
                <div className="flex items-center gap-2">
                    <span>📅</span>
                    <span>2025.04.06 일요일</span>
                </div>
            </div>
        </div>
    );
};

export default ResultPage;
