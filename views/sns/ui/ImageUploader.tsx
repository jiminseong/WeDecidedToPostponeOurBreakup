'use client';
import Container from '@/widgets/container/Container';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import uploadIconUrl from '@/public/icons/uploadIcon.svg';
import { useAtom } from 'jotai';
import { modalState } from '@/app/atom/modalAtom';
import { imageUrlState } from '@/app/atom/imageAtom'; // 이미지 상태 추가
import { snsState } from '@/app/atom/snsAtom';

interface ImageUploaderProps {}

const ImageUploader: React.FC<ImageUploaderProps> = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startPosition, setStartPosition] = useState(0);
    const [translate, setTranslate] = useState(0);
    const [modalOpen, setModalOpen] = useAtom(modalState);
    const [image, setImage] = useAtom(imageUrlState);
    const [snsData, setSnsData] = useAtom(snsState);

    const containerRef = useRef<HTMLDivElement>(null);

    const handleModal = () => {
        setModalOpen(!modalOpen);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setImage(previewUrl); // 전역 상태에 이미지 미리보기 URL 저장
        }
    };
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSnsData({ ...snsData, imageName: event.target.value });
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSnsData({ ...snsData, imageDescription: event.target.value });
    };

    const images = [
        {
            id: 0,
            content: (
                <Container className="flex h-[180px] w-[199px] flex-col gap-[0.25em]">
                    <div className="display relative flex h-[80%] w-full cursor-pointer items-center justify-center rounded-tl-2xl rounded-tr-2xl bg-[#009fe0]/[0.12]">
                        <input className="absolute h-full w-full opacity-0" type="file" onChange={handleFileChange} />
                        {image ? (
                            <Image
                                className="absolute h-full w-full rounded-tl-2xl rounded-tr-2xl"
                                src={image}
                                alt="업로드 미리보기"
                                fill
                            />
                        ) : (
                            <Image src={uploadIconUrl} alt="이미지 업로드 아이콘" />
                        )}
                    </div>
                    <input
                        value={snsData.imageName}
                        placeholder="사진 이름"
                        onChange={handleNameChange}
                        className="px-4 pt-1 text-[1em] text-black outline-none"
                    />
                    <input
                        value={snsData.imageDescription}
                        placeholder="사진 설명"
                        onChange={handleDescriptionChange}
                        className="px-4 pb-4 text-[0.8125em] text-[#848484] outline-none"
                    />
                </Container>
            ),
        },
        {
            id: 1,
            content: (
                <Container className="flex h-[180px] w-[199px] flex-col gap-[0.25em]">
                    <div
                        onClick={handleModal}
                        className="display flex h-[80%] w-full cursor-pointer items-center justify-center rounded-tl-2xl rounded-tr-2xl bg-[#009fe0]/[0.12]"
                    >
                        <Image src={uploadIconUrl} alt="이미지 업로드" />
                    </div>
                    <p className="px-4 pt-1 text-[1em] text-black">사진 이름2</p>
                    <p className="px-4 pb-4 text-[0.8125em] text-[#848484]">사진에 대한 설명 2</p>
                </Container>
            ),
        },
        {
            id: 2,
            content: (
                <Container className="flex h-[180px] w-[199px] flex-col gap-[0.25em]">
                    <div
                        onClick={handleModal}
                        className="display flex h-[80%] w-full cursor-pointer items-center justify-center rounded-tl-2xl rounded-tr-2xl bg-[#009fe0]/[0.12]"
                    >
                        <Image src={uploadIconUrl} alt="이미지 업로드" />
                    </div>
                    <p className="px-4 pt-1 text-[1em] text-black">사진 이름3</p>
                    <p className="px-4 pb-4 text-[0.8125em] text-[#848484]">사진에 대한 설명 3</p>
                </Container>
            ),
        },
        {
            id: 3,
            content: (
                <Container className="flex h-[180px] w-[199px] flex-col gap-[0.25em]">
                    <div
                        onClick={handleModal}
                        className="display flex h-[80%] w-full cursor-pointer items-center justify-center rounded-tl-2xl rounded-tr-2xl bg-[#009fe0]/[0.12]"
                    >
                        <Image src={uploadIconUrl} alt="이미지 업로드" />
                    </div>
                    <p className="px-4 pt-1 text-[1em] text-black">사진 이름4</p>
                    <p className="px-4 pb-4 text-[0.8125em] text-[#848484]">사진에 대한 설명 4</p>
                </Container>
            ),
        },
        {
            id: 4,
            content: (
                <Container className="flex h-[180px] w-[199px] flex-col gap-[0.25em]">
                    <div
                        onClick={handleModal}
                        className="display flex h-[80%] w-full cursor-pointer items-center justify-center rounded-tl-2xl rounded-tr-2xl bg-[#009fe0]/[0.12]"
                    >
                        <Image src={uploadIconUrl} alt="이미지 업로드" />
                    </div>
                    <p className="px-4 pt-1 text-[1em] text-black">사진 이름5</p>
                    <p className="px-4 pb-4 text-[0.8125em] text-[#848484]">사진에 대한 설명 </p>
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
            setCurrentIndex(currentIndex - 1); // 왼쪽으로 이동
        } else if (translate < -50 && currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1); // 오른쪽으로 이동
        }
        setTranslate(0); // 초기화
    };

    return (
        <div
            className="box-border flex w-full gap-[1em] p-4"
            ref={containerRef}
            onMouseDown={(e) => handleDragStart(e.clientX)}
            onMouseMove={(e) => handleDragMove(e.clientX)}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={(e) => handleDragStart(e.touches[0].clientX)} // 터치 이벤트
            onTouchMove={(e) => handleDragMove(e.touches[0].clientX)} // 터치 이벤트
            onTouchEnd={handleDragEnd} // 터치 이벤트
        >
            {images.map((image) => (
                <div
                    className="flex transition-transform duration-200"
                    style={{
                        transform: `translateX(calc(-${currentIndex * 100}% + ${translate}px))`,
                    }}
                    key={image.id}
                >
                    {image.content}
                </div>
            ))}
        </div>
    );
};

export default ImageUploader;
