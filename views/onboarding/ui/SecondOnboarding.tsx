import Image from 'next/image';
import React from 'react';
import familyImage from '/public/images/familyImage.svg';
import heartImage from '/public/images/heartImage.svg';

interface SecondOnboardingProps {}

const SecondOnboarding: React.FC<SecondOnboardingProps> = ({}) => {
    return (
        <div className="flex h-[70%] w-[100%] flex-col items-start justify-start gap-[1em] pl-[2em]">
            <div className="text-jblue flex gap-[1rem] text-[3em] font-bold">
                우리 함께
                <Image src={familyImage} alt="가족 이미지" width={48} />
            </div>
            <div className="text-jorange flex gap-[1rem] text-[3em] font-bold">
                <Image src={heartImage} alt="하트 이미지" width={48} />
                즐기는 제천
            </div>
        </div>
    );
};

export default SecondOnboarding;
