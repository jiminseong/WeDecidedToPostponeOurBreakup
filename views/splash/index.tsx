'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageWrapper from '@/widgets/wrapper/PageWrapper';
import { Ownglyph } from '@/app/fonts/font';
import { useRouter } from 'next/navigation';

const dynamicTexts = ['우리는\n이별을 미루기로 했다.', '우리는\n지구를 지키기로 했다.'];

const steps = [
    { backgroundColor: '#132663', color: '#ffffff' }, // 네이비 배경, 흰색 글자
    { backgroundColor: '#FFD0D0', color: '#000000' }, // 분홍 배경, 검정 글자
];

const SplashPage = () => {
    const router = useRouter();
    const [stepIndex, setStepIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [typedText, setTypedText] = useState('');

    const currentStep = steps[stepIndex];
    const prevStep = steps[stepIndex - 1] || currentStep;
    const fullText = dynamicTexts[stepIndex];

    useEffect(() => {
        if (charIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setTypedText((prev) => prev + fullText[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 200);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                if (stepIndex < steps.length - 1) {
                    setStepIndex((prev) => prev + 1);
                    setTypedText('');
                    setCharIndex(0);
                    setTimeout(() => {
                        setTypedText('');
                        setCharIndex(0);
                    }, 1000); // 배경 전환 후 0.3초 기다림
                } else {
                    router.push('/home');
                }
            }, 1500);

            return () => clearTimeout(timeout);
        }
    }, [charIndex, stepIndex]);

    return (
        <PageWrapper paddingX="0">
            <AnimatePresence mode="wait">
                <motion.div
                    key={stepIndex}
                    initial={{ opacity: 0 }}
                    animate={{
                        backgroundColor: currentStep.backgroundColor,
                        opacity: 1,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className={`${Ownglyph.className} flex h-screen items-center justify-center text-[35px]`}
                >
                    <motion.p
                        initial={{ color: prevStep.color }}
                        animate={{ color: currentStep.color }}
                        transition={{ duration: 1 }}
                        className="whitespace-pre-wrap text-center"
                    >
                        {typedText}
                    </motion.p>
                </motion.div>
            </AnimatePresence>
        </PageWrapper>
    );
};

export default SplashPage;
