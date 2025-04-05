'use client';
import React, { useState, useRef } from 'react';
import Container from '@/widgets/container/Container';
import Modal from '@/widgets/container/Modal';
import Image from 'next/image';
import { useAtom } from 'jotai';
import { modalState } from '@/app/atom/modalAtom';

// 이미지 임포트 없이 직접 경로 지정
const RestaurantSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startPosition, setStartPosition] = useState(0);
    const [translate, setTranslate] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [modalOpen, setModalOpen] = useAtom(modalState);

    const handleModal = () => {
        setModalOpen(!modalOpen);
    };

    const slides = [
        {
            id: 0,
            content: (
                <Container className="flex h-[180px] w-[199px] flex-col gap-[0.25em] p-[1em]">
                    <Image width={180} height={144} className="rounded-lg" src="/images/deongSil.webp" alt="덩실분식" />
                    <p className="mt-2">덩실분식</p>
                    <p className="text-xs text-left text-[#848484]">200m</p>
                </Container>
            ),
        },
        {
            id: 1,
            content: (
                <Container className="flex h-[180px] w-[199px] flex-col gap-[0.25em] p-[1em]">
                    <Image width={180} height={144} className="rounded-lg" src="/images/boRyung.webp" alt="보령식당" />
                    <p className="mt-2">보령식당</p>
                    <p className="text-xs text-left text-[#848484]">1.2km</p>
                </Container>
            ),
        },
        {
            id: 2,
            content: (
                <Container className="flex h-[180px] w-[199px] flex-col gap-[0.25em] p-[1em]">
                    <Image width={180} height={144} className="rounded-lg" src="/images/buSeong.webp" alt="부성당" />
                    <p className="mt-2">부성당</p>
                    <p className="text-xs text-left text-[#848484]">800m</p>
                </Container>
            ),
        },
        {
            id: 3,
            content: (
                <Container className="flex h-[180px] w-[199px] flex-col gap-[0.25em] p-[1em]">
                    <Image
                        width={180}
                        height={144}
                        className="rounded-lg"
                        src="/images/jangWon.webp"
                        alt="장원 순대국"
                    />
                    <p className="mt-2">장원 순대국</p>
                    <p className="text-xs text-left text-[#848484]">850m</p>
                </Container>
            ),
        },
        {
            id: 4,
            content: (
                <Container className="flex h-[180px] w-[199px] flex-col gap-[0.25em] p-[1em]">
                    <Image
                        width={180}
                        height={144}
                        className="rounded-lg"
                        src="/images/dukkeoBi.webp"
                        alt="두꺼비 식당"
                    />
                    <p className="mt-2">두꺼비 식당</p>
                    <p className="text-xs text-left text-[#848484]">500m</p>
                </Container>
            ),
        },
    ];

    const handleDragStart = (position: number) => {
        setIsDragging(true);
        setStartPosition(position);
    };

    const handleDragMove = (position: number) => {
        if (!isDragging) return;
        setTranslate(position - startPosition);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
        if (translate > 50 && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else if (translate < -50 && currentIndex < slides.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
        setTranslate(0);
    };

    return (
        <div className="flex flex-col gap-[0.5em]">
            <p className="text-left text-[1.125em] font-bold text-jgreen">제천 추천 맛집</p>
            <div
                className="flex w-[100%] gap-[1em] overflow-hidden"
                ref={containerRef}
                onMouseDown={(e) => handleDragStart(e.clientX)}
                onMouseMove={(e) => handleDragMove(e.clientX)}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
                onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
                onTouchEnd={handleDragEnd}
            >
                {modalOpen && <Modal onClick={handleModal} />}
                {slides.map((slide) => (
                    <div
                        onClick={handleModal}
                        className="flex transition-transform duration-200"
                        style={{
                            transform: `translateX(calc(-${currentIndex * 100}% + ${translate}px))`,
                        }}
                        key={slide.id}
                    >
                        {slide.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RestaurantSection;
