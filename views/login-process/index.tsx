'use client';
import Button from '@/widgets/button/Button';
import PageWrapper from '@/widgets/wrapper/PageWrapper';
import React, { useState, ChangeEvent, useEffect } from 'react';
import leftArrow from '@/public/icons/leftArrow.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import LineInput from '@/widgets/input/LineInput';

interface LoginProcessPageProps {}

const LoginProcessPage: React.FC<LoginProcessPageProps> = ({}) => {
    const router = useRouter();
    const [label, setLabel] = useState('다음');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentInput, setCurrentInput] = useState('');

    const questions = [
        '이름을 입력해주세요',
        '나이를 입력해주세요',
        '음식 취향을 입력해주세요',
        '여행 취향을 입력해주세요',
        '건강 유의사항을 알려주세요',
        '아이디를 입력해주세요',
        '비밀번호를 입력해주세요',
    ];

    const descriptions = [
        '',
        '',
        '추후 여행 정보 추천에 활용됩니다.',
        '추후 여행 정보 추천에 활용됩니다.',
        '추후 맞춤 정보 추천에 활용됩니다.',
        '',
        '',
    ];

    const placeholders = [
        '지민성',
        '24',
        '고기를 좋아하고, 돈까스를..',
        '경치가 좋은 곳이 좋아요, 그리고.. ',
        '건강이 안좋은 곳은 없어요, 같이 다니는 부모님이.. ',
        'jiminseong011201',
        '임시 비밀번호(숫자 4자리)',
    ];

    const storageKeys = [
        'name',
        'age',
        'foodPreference',
        'travelPreference',
        'healthInformation',
        'username',
        'password',
    ];

    // 클라이언트에서만 로컬 스토리지에 접근
    useEffect(() => {
        setCurrentInput(localStorage.getItem(storageKeys[currentQuestionIndex]) || '');
    }, [currentQuestionIndex]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentInput(e.target.value);
    };

    const handleNextClick = () => {
        // 로컬 스토리지에 현재 질문에 대한 데이터를 저장
        localStorage.setItem(storageKeys[currentQuestionIndex], currentInput);

        if (currentQuestionIndex < questions.length - 2) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else if (currentQuestionIndex < questions.length - 1) {
            setLabel('가입 완료');
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            console.log(
                'Final Signup Data:',
                storageKeys.map((key) => localStorage.getItem(key)),
            );
            router.push('/home');
        }
    };

    return (
        <PageWrapper paddingX="2em">
            <div className="center h-[80%] w-full flex-col">
                <Image
                    src={leftArrow}
                    alt="왼쪽 뒤로가기"
                    onClick={() => router.push('/login')}
                    className="absolute top-8"
                />
                <div className="mb-[1em] flex flex-col justify-start gap-[1em]">
                    <p className="mt-[3em] text-[28px] font-bold text-black">{questions[currentQuestionIndex]}</p>
                    <p className="mb-[5em] text-[14px] font-bold text-black">{descriptions[currentQuestionIndex]}</p>
                    <LineInput
                        placeholder={placeholders[currentQuestionIndex]}
                        style="text-[1.25em] font-semibold"
                        value={currentInput}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <Button size="medium" variant="primary" onClick={handleNextClick}>
                {label}
            </Button>
        </PageWrapper>
    );
};

export default LoginProcessPage;
