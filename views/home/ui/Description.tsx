'use client';
import React, { useState } from 'react';
import fingerIconUrl from '@/public/icons/fingerIcon.svg';
import bottomArrowUrl from '@/public/icons/bottomArrow.svg';
import mateCharacterUrl from '@/public/icons/mateCharacter.svg';
import Image from 'next/image';

const Description = () => {
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(true);

    const handleDescription = () => {
        setIsDescriptionVisible(false);
    };

    return (
        <>
            {isDescriptionVisible && (
                <div
                    onClick={handleDescription}
                    className="fixed inset-0 z-[210] mx-auto flex min-h-screen w-full min-w-[320px] max-w-[var(--max-width)] bg-black/[0.78]"
                >
                    <Image className="absolute left-4 top-[20%]" src={fingerIconUrl} alt="스크롤 설명" />
                    <div className="absolute top-[25%] flex w-full justify-center">
                        <div className="w absolute top-[25%] flex flex-col justify-center gap-2">
                            <div className="rounded-[20px] border border-white bg-transparent px-[17px] py-[10px] font-semibold text-white">
                                콘텐츠 즐기기
                            </div>
                            <p className="text-center font-semibold text-white">
                                화면을 위아래로
                                <br />
                                이동할 수 있습니다!
                            </p>
                        </div>
                    </div>

                    <div className="absolute bottom-4 flex w-full flex-col items-center">
                        <div className="flex flex-col items-center gap-2">
                            <div className="rounded-[20px] border border-white bg-transparent px-[17px] py-[10px] font-semibold text-white">
                                제천 메이트와 대화하기
                            </div>
                            <p className="text-center font-semibold text-white">
                                여기를 눌러 AI 제천 메이트에게
                                <br />
                                조언을 구해보세요!
                            </p>
                            <Image src={bottomArrowUrl} alt="하단 버튼 화살표" />
                            <Image className="mt-4" src={mateCharacterUrl} alt="메이트 버튼" />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Description;
