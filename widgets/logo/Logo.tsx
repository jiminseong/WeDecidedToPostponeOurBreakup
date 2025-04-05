import React from 'react';
import Image from 'next/image';

interface LogoProps {
    width?: number;
    size?: 'small' | 'medium' | 'large';
}

const Logo: React.FC<LogoProps> = ({ width, size }) => {
    const getSize = () => {
        switch (size) {
            case 'small':
                return 50;
            case 'medium':
                return 100;
            case 'large':
                return 150;
            default:
                return width || 100; // 기본값을 width로 설정, width가 없으면 100으로 설정
        }
    };

    return <Image src="/images/jecheonLogo.svg" alt="Logo" width={getSize()} height={getSize()} />;
};

export default Logo;
