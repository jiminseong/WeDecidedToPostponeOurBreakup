'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageWrapper from '@/widgets/wrapper/PageWrapper';
import { Ownglyph } from '@/app/fonts/font';

const steps = [
    {
        backgroundColor: '#132663',
        fullText: '우리는 \n 이별을 미루기로 했다.',
    },
    {
        backgroundColor: '#ffffff',
        fullText: '우리는 선',
        staticText: '우리는 ',
        dynamicText: '선',
    },
    {
        backgroundColor: '#FFD0D0',
        fullText: '우리는 \n 지구를 지키기로 했다.',
    },
];

const SplashPage = () => {
    const [stepIndex, setStepIndex] = useState(0);
    const [typedText, setTypedText] = useState('');
    const [charIndex, setCharIndex] = useState(0);
    const [showText, setShowText] = useState(true);

    useEffect(() => {
        const currentStep = steps[stepIndex];

        // STEP 1 & 3: 전체 문장 타이핑
        if (stepIndex !== 1) {
            if (charIndex < currentStep.fullText.length) {
                const timeout = setTimeout(() => {
                    setTypedText((prev) => prev + currentStep.fullText[charIndex]);
                    setCharIndex((prev) => prev + 1);
                }, 100);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    if (stepIndex < steps.length - 1) {
                        setStepIndex((prev) => prev + 1);
                        setTypedText('');
                        setCharIndex(0);
                    }
                }, 1500);
                return () => clearTimeout(timeout);
            }
        }

        // STEP 2: 두 번째 줄만 등장했다 사라지게
        else {
            const timeout = setTimeout(() => {
                setShowText((prev) => !prev);
                // show → hide → 다음 단계
                if (showText === false) {
                    setStepIndex((prev) => prev + 1);
                    setTypedText('');
                    setCharIndex(0);
                }
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [charIndex, stepIndex, showText]);

    const currentStep = steps[stepIndex];

    return (
        <PageWrapper paddingX="0">
            <AnimatePresence mode="wait">
                <motion.div
                    key={stepIndex}
                    initial={{ opacity: 0 }}
                    animate={{ backgroundColor: currentStep.backgroundColor, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className={`${Ownglyph.className} ] flex h-screen items-center justify-center text-[35px]`}
                >
                    {stepIndex === 1 ? (
                        <p className={`${Ownglyph.className} whitespace-pre-wrap text-center`}>
                            {currentStep.staticText}
                            <motion.span
                                key={showText ? 'visible' : 'hidden'}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: showText ? 1 : 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {currentStep.dynamicText}
                            </motion.span>
                        </p>
                    ) : (
                        <p className="whitespace-pre-wrap text-center text-[35px]" style={{ fontFamily: 'inherit' }}>
                            {typedText}
                        </p>
                    )}
                </motion.div>
            </AnimatePresence>
        </PageWrapper>
    );
};

export default SplashPage;
