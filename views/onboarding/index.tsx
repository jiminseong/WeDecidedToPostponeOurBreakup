'use client';
import React, { useEffect, useState } from 'react';
import Button from '@/widgets/button/Button';
import PageWrapper from '@/widgets/wrapper/PageWrapper';
import FirstOnboarding from './ui/FirstOnboarding';
import SecondOnboarding from './ui/SecondOnboarding';
import { useRouter } from 'next/navigation';
import ProgressCircle from './ui/ProgressCircle';
import ThirdOnboarding from './ui/ThirdOnboarding';

interface BeforeInstallPromptEvent extends Event {
    prompt: () => void;
    userChoice: Promise<{ outcome: string }>;
}

const OnboardingPage: React.FC = () => {
    const [page, setPages] = useState(0);
    const [label, setLabel] = useState('다음');
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const router = useRouter();

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleBeforeInstallPrompt = (event: Event) => {
        event.preventDefault();
        setDeferredPrompt(event as BeforeInstallPromptEvent);
    };

    const handlePage = () => {
        switch (page) {
            case 0:
                setPages(1);
                setLabel('다음');
                break;
            case 1:
                setPages(2);
                setLabel('제천메이트와 시작하기');
                break;
            case 2:
                if (deferredPrompt) {
                    deferredPrompt.prompt();
                    deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
                        if (choiceResult.outcome === 'accepted') {
                            console.log('사용자가 설치 프롬프트에 동의했습니다.');
                        } else {
                            console.log('사용자가 설치 프롬프트를 무시했습니다.');
                        }
                        setDeferredPrompt(null);
                        router.push('/login');
                    });
                } else {
                    router.push('/login');
                }
                break;
        }
    };

    return (
        <PageWrapper paddingX="2em">
            <div className="relative h-[100vh] pt-4">
                {page === 0 && <FirstOnboarding />}
                {page === 1 && <SecondOnboarding />}
                {page === 2 && <ThirdOnboarding />}
                <div className="absolute bottom-4 flex w-full flex-col items-center gap-4">
                    <ProgressCircle page={page} />

                    <Button size="medium" variant="primary" onClick={() => handlePage()}>
                        {label}
                    </Button>
                </div>
            </div>
        </PageWrapper>
    );
};

export default OnboardingPage;
