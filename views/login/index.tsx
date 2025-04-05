'use client';
import Button from '@/widgets/button/Button';
import PageWrapper from '@/widgets/wrapper/PageWrapper';
import React, { useEffect, useState } from 'react';
import leftArrow from '@/public/icons/leftArrow.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Modal from '../../widgets/container/Modal';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = ({}) => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState(false);

    const handleModal = () => {
        setModalOpen(!modalOpen);
    };

    useEffect(() => {
        localStorage.clear();
    }, []);

    const handleNextClick = () => {
        router.push('/login/process');
    };

    return (
        <PageWrapper paddingX="2em" className="pt-16">
            <Image src={leftArrow} alt="왼쪽 뒤로가기" className="" />
            <div className="relative h-[80%] w-full flex-col">
                <div className="mb-[1em] flex flex-col justify-start gap-[1em]">
                    <div className="h-full">
                        <p className="text-[28px] font-bold text-black">가장 편한 방법으로</p>
                        <p className="text-[28px] font-bold text-black">시작해 보세요!</p>
                    </div>
                    <p className="text-sm font-semibold">
                        <span className="text-center text-sm font-semibold text-[#77b72d]">1분</span>
                        <span className="text-center text-sm font-semibold text-[#c1c1c1]">
                            이면 회원가입이 가능해요
                        </span>
                    </p>
                </div>

                <Button size="medium" variant="primary" onClick={handleNextClick}>
                    다음
                </Button>

                <div className="h-100 mb-[2.5em] mt-[2.5em] flex w-full items-center justify-center gap-[9px]">
                    <div className="h-1 w-full bg-[#EEF7E3]" />
                    <p className="w-[20%] text-center text-[1em] font-semibold text-black">또는</p>
                    <div className="h-1 w-full bg-[#EEF7E3]" />
                </div>

                <div onClick={handleModal} className="relative flex w-full flex-col gap-[1em]">
                    {modalOpen && <Modal onClick={handleModal} />}
                    <div className="flex w-full items-center justify-center rounded-[16px] border-0 bg-[#FDE502] py-[1.25em] font-semibold">
                        카카오로 계속하기
                    </div>
                    <div className="flex w-full items-center justify-center rounded-[16px] border-0 bg-[#03C53B] py-[1.25em] font-semibold text-white">
                        네이버로 계속하기
                    </div>

                    <div className="flex w-full items-center justify-center rounded-[16px] border-[0.5px] border-[#848484] bg-[#fefffe] py-[1.25em] font-semibold text-[#000000]">
                        Google로 계속하기
                    </div>

                    <div className="flex w-full items-center justify-center rounded-[16px] border-0 bg-[#000000] py-[1.25em] font-semibold text-white">
                        Apple로 계속하기
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default LoginPage;
