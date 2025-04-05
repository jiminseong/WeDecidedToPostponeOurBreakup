import React from 'react';

interface Props {
    paddingX?: string; // 좌우 패딩을 위한 새로운 props
    children: React.ReactNode;
    className?: string;
}

const PageWrapper = ({ paddingX = '16px', children, className, ...props }: Props) => {
    return (
        <div
            className={`relative flex h-full flex-col gap-4 ${className}`}
            style={{ paddingLeft: paddingX, paddingRight: paddingX }} // 좌우 패딩만 적용
            {...props}
        >
            {children}
        </div>
    );
};

export default PageWrapper;
