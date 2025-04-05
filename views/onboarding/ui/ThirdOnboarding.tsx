import Image from 'next/image';
import React from 'react';
import smaileImage from '/public/images/smaileImage.svg';
import familyImage from '/public/images/familyImage.svg';
import heartImage from '/public/images/heartImage.svg';
import mateImage from '/public/images/mateImage.svg';

interface ThirdOnboardingProps {}

const ThirdOnboarding: React.FC<ThirdOnboardingProps> = ({}) => {
    return (
        <div className="flex h-[70%] w-[100%] flex-col items-start justify-start gap-[1em] pl-[2em]">
            <div className="text-jblue flex gap-[1rem] text-[3em] font-bold">
                우리 함께
                <Image src={familyImage} alt="가족 이미지" width={48} />
            </div>
            <div className="text-jorange flex gap-[1rem] text-[3em] font-bold">
                <Image src={heartImage} alt="가족 이미지" width={48} />
                즐기는 제천
            </div>
            <div className="text-jgreen flex gap-[1rem] text-[3em] font-bold">
                메이트와! <Image src={mateImage} alt="가족 이미지" width={48} />
            </div>
            <Image className="absolute right-[1em] top-[40%]" src={smaileImage} alt="스마일 아이콘" width={150} />
        </div>
    );
};

export default ThirdOnboarding;
