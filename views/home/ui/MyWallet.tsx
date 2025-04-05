'use client';
import Button from '@/widgets/button/Button';
import Container from '@/widgets/container/Container';
import Image from 'next/image';
import React from 'react';
import rightIconUrl from '@/public/icons/rightArrow.svg';
import Modal from '@/widgets/container/Modal';
import { modalState } from '@/app/atom/modalAtom';
import { useAtom } from 'jotai';

interface MyWalletProps {}

const MyWallet: React.FC<MyWalletProps> = ({}) => {
    const [modalOpen, setModalOpen] = useAtom(modalState);

    const handleModal = () => {
        setModalOpen(!modalOpen);
    };
    return (
        <Container className="w-[100%] px-[22px] py-[29px]">
            <div className="flex flex-col gap-[3em]">
                <div className="flex justify-between">
                    <p className="text-left text-xl font-semibold text-black">내 지갑</p>
                    <div className="flex items-center justify-center">
                        <p className="text-[15px] font-semibold text-grey">이용 내역</p>
                        <Image src={rightIconUrl} alt="이용 내용 버튼" />
                    </div>
                </div>
                <div className="flex flex-col gap-[1em]">
                    <div className="flex justify-between">
                        <p className="font-semibold">포인트</p>
                        <p className="font-semibold">20,000P</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-semibold">머니</p>
                        <p className="font-semibold">5,000원</p>
                    </div>
                </div>
                <div className="relative">{modalOpen && <Modal onClick={handleModal} />}</div>

                <Button variant="primary" size="full" onClick={handleModal}>
                    제천 머니 충전하기
                </Button>
            </div>
        </Container>
    );
};

export default MyWallet;
