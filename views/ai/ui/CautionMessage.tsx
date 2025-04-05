import React from 'react';

interface CautionMessageProps {}

const CautionMessage: React.FC<CautionMessageProps> = ({}) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
    return (
        <div className="flex w-full flex-col items-center justify-center gap-[0.8125em]">
            <div className="flex items-center justify-center rounded-lg bg-[#f0ffd1]/[0.43] px-[0.8125em] py-[0.8125em]">
                <p className="text-center font-semibold text-[#4a6f1e]">
                    <span className="text-center text-[0.8125em] font-semibold text-[#4a6f1e]">
                        제천에 관한 인공지능 제천 메이트입니다!
                    </span>
                    <br />
                    <span className="text-center text-[0.8125em] font-semibold text-[#4a6f1e]">
                        여러분의 여행 취향을 편하게 작성해주세요
                    </span>
                </p>
            </div>
            <div className="h-6 rounded-lg bg-[#f0ffd1]/[0.43] px-[0.8125em]">
                <span className="text-center text-[0.8125em] font-semibold text-[#4a6f1e]">{formattedDate}</span>
            </div>
        </div>
    );
};

export default CautionMessage;
