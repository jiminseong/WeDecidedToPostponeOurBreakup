'use client';
import Container from '@/widgets/container/Container';
import Image from 'next/image';
import React, { useState } from 'react';
import naverIconUrl from '@/public/icons/naverIcon.svg';
import youtubeIconUrl from '@/public/icons/youtubeIcon.svg';
import instarIconUrl from '@/public/icons/instarIcon.svg';
import kakaoIconUrl from '@/public/icons/kakaoIcon.svg';
import { useAtom } from 'jotai';
import { modalState } from '@/app/atom/modalAtom';

const SelectSnsPlatform = ({}) => {
    const [modalOpen, setModalOpen] = useAtom(modalState);
    const [activeIcon, setActiveIcon] = useState<string | null>();

    const handleModal = () => {
        setModalOpen(!modalOpen);
    };

    const handleIconClick = (iconName: string) => {
        setActiveIcon(iconName === activeIcon ? null : iconName);
    };

    return (
        <div>
            <style jsx>{`
                .icon {
                    cursor: pointer;
                    transition: filter 0.3s ease;
                }
                .icon:hover,
                .icon.active {
                    filter: invert(34%) sepia(40%) saturate(900%) hue-rotate(50deg) brightness(70%) contrast(80%);
                }
            `}</style>
            <Container className="flex h-[74px] w-full items-center justify-around">
                <div onClick={handleModal} className="icon">
                    <Image src={naverIconUrl} alt="네이버" />
                </div>

                <div onClick={handleModal} className="icon">
                    <Image src={youtubeIconUrl} alt="유튜브" />
                </div>

                <div onClick={handleModal} className="icon">
                    <Image src={instarIconUrl} alt="인스타" />
                </div>

                <div
                    onClick={() => handleIconClick('kakao')}
                    className={`icon ${activeIcon === 'kakao' ? 'active' : ''}`}
                >
                    <Image src={kakaoIconUrl} alt="카카오톡" />
                </div>
            </Container>
        </div>
    );
};

export default SelectSnsPlatform;
