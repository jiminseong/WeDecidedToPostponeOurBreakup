'use client';
import BottomNavigationBar from '@/widgets/navigation/BottomNavigationBar';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import leftArrow2Url from '@/public/icons/leftArrow2.svg';
import Input from '@/widgets/input/Input';
import TextArea from '@/widgets/input/TextArea';
import ImageUploader from './ui/ImageUploader';
import SelectSnsPlatform from './ui/SelectSnsPlatform';
import Button from '@/widgets/button/Button';
import { useRouter } from 'next/navigation';
import { snsState } from '@/app/atom/snsAtom';
import { useAtom } from 'jotai';
import { snsResultState } from '@/app/atom/snsResultAtom';
import Modal from '@/widgets/container/Modal';
import { modalState } from '@/app/atom/modalAtom';
import postSnsChatGpt from './api/postChatGpt';
import Loading from './ui/Loading';

interface SnsPageProps {}

const SnsPage: React.FC<SnsPageProps> = ({}) => {
    const router = useRouter();
    const [snsData, setSnsData] = useAtom(snsState);
    const [modalOpen, setModalOpen] = useAtom(modalState);
    const [isLoading, setIsLoading] = useState(false);
    const [_, setSnsResult] = useAtom(snsResultState);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setSnsData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleModal = () => {
        setModalOpen(!modalOpen);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const response = await postSnsChatGpt(
                snsData.location,
                snsData.date,
                snsData.content,
                snsData.imageName,
                snsData.imageDescription,
            );

            setSnsResult({
                snsTitle: response.snsTitle,
                snsContent: response.snsContent,
            });
            router.push('/sns/result');
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsLoading(false); // 로딩 종료
        }
    };

    return (
        <>
            {isLoading && <Loading />}
            {modalOpen && <Modal onClick={handleModal} msgLine2="공유는 카카오톡을 택해주세요!" />}
            <form
                onSubmit={handleSubmit}
                className="relative h-[100vh] w-full overflow-hidden px-[1em] pb-[20%] pt-[35%] md:pt-[25%]"
            >
                <div className="absolute left-0 top-[54px] flex w-full items-center justify-between px-[1em]">
                    <div className="flex gap-[1em]">
                        <Link className="flex" href="/home">
                            <Image src={leftArrow2Url} alt="되돌아가기아이콘" />
                        </Link>
                        <p className="text-[28px] font-bold text-black">SNS 공유하기</p>
                    </div>
                    <button
                        type="button"
                        className="box-border rounded-[12.14px] bg-jorange px-[0.5em] py-[0.125em] text-center text-[0.8125em] font-semibold text-white"
                    >
                        임시 저장
                    </button>
                </div>

                {/* 스크롤 가능한 메인 콘텐츠 영역 */}
                <div className="flex h-full w-full flex-col gap-[1em] overflow-x-hidden overflow-y-scroll">
                    <div className="w-full">
                        <Input
                            className="w-full"
                            placeholder="장소"
                            name="location"
                            value={snsData.location}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="w-full">
                        <Input
                            className="w-full"
                            placeholder="일시"
                            name="date"
                            value={snsData.date}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="w-full">
                        <TextArea
                            className="w-full"
                            placeholder="내용"
                            name="content"
                            value={snsData.content}
                            onChange={handleInputChange}
                        />
                    </div>
                    <ImageUploader />
                    <SelectSnsPlatform />
                    <Button size="full" variant="primary" type="submit">
                        SNS 템플릿 만들기
                    </Button>
                </div>
                <BottomNavigationBar />
            </form>
        </>
    );
};

export default SnsPage;
