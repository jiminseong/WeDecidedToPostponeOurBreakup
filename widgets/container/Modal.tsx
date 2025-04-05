import Image from 'next/image';
import React from 'react';
import crossIconUrl from '@/public/icons/crossIcon.svg';

interface ModalProps {
    onClick?: () => void;
    msgLine1?: string;
    msgLine2?: string;
}

const Modal: React.FC<ModalProps> = ({ onClick, msgLine1, msgLine2 }) => {
    return (
        <div className="fixed inset-0 left-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div
                style={{ boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.2)' }}
                className="relative flex flex-col items-center gap-4 rounded-lg bg-white px-6 py-6 text-center text-black"
            >
                <button className="absolute right-3 top-3 text-gray-500 hover:text-gray-800" onClick={onClick}>
                    <Image src={crossIconUrl} width={20} height={20} alt="닫기 버튼" />
                </button>

                <p className="text-lg font-semibold text-gray-800">{msgLine1 ? msgLine1 : '준비중인 기능입니다'}</p>
                <p className="text-sm text-gray-500">
                    {msgLine2 ? msgLine2 : '곧 제공될 예정이니 조금만 기다려주세요!'}
                </p>

                <button
                    onClick={onClick}
                    className="mt-4 w-full rounded-md bg-jgreen px-4 py-2 font-semibold text-white"
                >
                    확인
                </button>
            </div>
        </div>
    );
};

export default Modal;
