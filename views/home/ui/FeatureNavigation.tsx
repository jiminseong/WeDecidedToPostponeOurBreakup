import Container from '@/widgets/container/Container';
import React from 'react';
import worldIconUrl from '@/public/icons/worldIcon.svg';
import stampIconUrl from '@/public/icons/stampIcon.svg';
import navigationIconUrl from '@/public/icons/navigationIcon.svg';
import Image from 'next/image';
import Link from 'next/link';
interface FeatureNavigationProps {}

const FeatureNavigation: React.FC<FeatureNavigationProps> = ({}) => {
    // const [modalOpen, setModalOpen] = useAtom(modalState);

    return (
        <div className="flex h-[100%] w-[100%] gap-[0.5em] px-[0.25em] py-[1.25em]">
            <Link className="w-full" href="/stamp">
                <Container className="flex h-[120px] w-[100%] cursor-pointer flex-col items-center justify-center gap-[0.5em]">
                    <Image src={stampIconUrl} alt="스탬프아이콘" />
                    <p className="text-[0.8125em] font-bold text-jorange">스탬프 투어</p>
                </Container>
            </Link>
            <Link className="w-full" href="/sns">
                <Container className="flex h-[120px] w-[100%] cursor-pointer flex-col items-center justify-center gap-[0.5em]">
                    <Image src={navigationIconUrl} alt="공유아이콘" />
                    <p className="text-[0.8125em] font-bold text-jgreen">SNS 공유하기</p>
                </Container>
            </Link>
            <Container className="flex h-[120px] w-[100%] cursor-pointer flex-col items-center justify-center gap-[0.5em]">
                <Image src={worldIconUrl} alt="언어변경아이콘" />
                <p className="text-[0.8125em] font-bold text-jblue">언어/Language</p>
            </Container>
        </div>
    );
};

export default FeatureNavigation;
