'use client';
import Button from '@/widgets/button/Button';
import BottomNavigationBar from '@/widgets/navigation/BottomNavigationBar';
import React from 'react';
import exampleImageUrl from '@/public/images/jecheonImage.webp';
import leftArrowIconUrl from '@/public/icons/leftArrow.svg';
import Image from 'next/image';
import Link from 'next/link';
import { imageUrlState } from '@/app/atom/imageAtom';
import { snsResultState } from '@/app/atom/snsResultAtom';
import { useAtom } from 'jotai';
import { resultShareHandler } from './api/kakaoShare';
interface SnsResultPageProps {}

const SnsResultPage: React.FC<SnsResultPageProps> = ({}) => {
    const [image] = useAtom(imageUrlState);
    const [snsResult] = useAtom(snsResultState);
    return (
        <div className="relative h-[100vh] w-full overflow-hidden pb-[20%]">
            <Link href="/home" className="absolute left-4 top-4 z-10">
                <Image src={leftArrowIconUrl} alt="되돌아가기아이콘" />
            </Link>
            <div className="flex h-full w-full flex-col gap-[1em] overflow-x-hidden overflow-y-scroll">
                <div className="relative h-full w-full">
                    <Image src={image || exampleImageUrl} alt="예시이미지" layout="fill" objectFit="cover" />
                </div>
                <div className="flex w-full flex-col gap-4 bg-[#FFF] px-8 py-8">
                    <p className="text-[1.25em] font-semibold text-black">제목 : {snsResult.snsTitle}</p>

                    <p className="text-[1em] font-semibold text-[#848484]">
                        {snsResult.snsContent.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                </div>
                <div className="mt-4 px-4">
                    <Button size="full" variant="primary" onClick={resultShareHandler}>
                        SNS 공유하기
                    </Button>
                </div>
            </div>
            <BottomNavigationBar />
        </div>
    );
};

export default SnsResultPage;
