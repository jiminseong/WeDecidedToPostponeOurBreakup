'use client';
import React, { useState, useRef } from 'react';
import Container from '@/widgets/container/Container';
import localIconUrl from '@/public/icons/localIcon.svg';
import slowIconUrl from '@/public/icons/slowIcon.svg';
import natureIconUrl from '@/public/icons/natureIcon.svg';
import activityIconUrl from '@/public/icons/activityIcon.svg';
import medicineIconUrl from '@/public/icons/medicineIcon.svg';
import Image from 'next/image';
import Modal from '@/widgets/container/Modal';
import { useAtom } from 'jotai';
import { modalState } from '@/app/atom/modalAtom';

interface PopularCategoryProps {}

const CategoryList: React.FC<PopularCategoryProps> = ({}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isDragging = useRef(false);
    const startPosition = useRef(0);
    const translate = useRef(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const [modalOpen, setModalOpen] = useAtom(modalState);

    const handleModal = () => {
        setModalOpen(!modalOpen);
    };

    const categories = [
        {
            id: 0,
            content: (
                <div className="flex h-[88px] w-[64px] flex-col items-center justify-center gap-[0.25em]">
                    <Container className="flex h-[100%] w-[100%] items-center justify-center">
                        <Image src={localIconUrl} alt="현지인" />
                    </Container>
                    <p>현지인</p>
                </div>
            ),
        },
        {
            id: 1,
            content: (
                <div className="flex h-[88px] w-[64px] flex-col items-center justify-center gap-[0.25em]">
                    <Container className="flex h-[100%] w-[100%] items-center justify-center">
                        <Image src={activityIconUrl} alt="액티비티" />
                    </Container>
                    <p>액티비티</p>
                </div>
            ),
        },
        {
            id: 2,
            content: (
                <div className="flex h-[88px] w-[64px] flex-col items-center justify-center gap-[0.25em]">
                    <Container className="flex h-[100%] w-[100%] items-center justify-center">
                        <Image src={medicineIconUrl} alt="한방" />
                    </Container>
                    <p>한방</p>
                </div>
            ),
        },
        {
            id: 3,
            content: (
                <div className="flex h-[88px] w-[64px] flex-col items-center justify-center gap-[0.25em]">
                    <Container className="flex h-[100%] w-[100%] items-center justify-center">
                        <Image src={natureIconUrl} alt="자연" />
                    </Container>
                    <p>자연</p>
                </div>
            ),
        },
        {
            id: 4,
            content: (
                <div className="flex h-[88px] w-[64px] flex-col items-center justify-center gap-[0.25em]">
                    <Container className="flex h-[100%] w-[100%] items-center justify-center">
                        <Image src={slowIconUrl} alt="슬로시티" />
                    </Container>
                    <p>슬로시티</p>
                </div>
            ),
        },
        {
            id: 5,
            content: (
                <div className="flex h-[88px] w-[64px] flex-col items-center justify-center gap-[0.25em]">
                    <Container className="flex h-[100%] w-[100%] items-center justify-center">
                        <p className="font-bold">?</p>
                    </Container>
                    <p>준비중</p>
                </div>
            ),
        },
        {
            id: 6,
            content: (
                <div className="flex h-[88px] w-[64px] flex-col items-center justify-center gap-[0.25em]">
                    <Container className="flex h-[100%] w-[100%] items-center justify-center">
                        <p className="font-bold">?</p>
                    </Container>
                    <p>준비중</p>
                </div>
            ),
        },
    ];

    const handleDragStart = (position: number) => {
        isDragging.current = true;
        startPosition.current = position;
    };

    const handleDragMove = (position: number) => {
        if (!isDragging.current) return;
        translate.current = position - startPosition.current;
    };

    const handleDragEnd = () => {
        isDragging.current = false;
        if (translate.current > 50 && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1); // 왼쪽으로 이동
        } else if (translate.current < -50 && currentIndex < categories.length - 1) {
            setCurrentIndex(currentIndex + 1); // 오른쪽으로 이동
        }
        translate.current = 0; // 초기화
    };

    return (
        <div className="flex flex-col gap-[0.5em]">
            {modalOpen && <Modal onClick={handleModal} />}
            <p className="text-left text-[1.125em] font-bold text-jblue">인기 카테고리</p>
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
                {categories.map((category) => (
                    <div
                        onClick={handleModal}
                        className="flex transition-transform duration-200"
                        style={{
                            transform: `translateX(calc(-${currentIndex * 100}% + ${translate.current}px))`,
                        }}
                        key={category.id}
                    >
                        {category.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
