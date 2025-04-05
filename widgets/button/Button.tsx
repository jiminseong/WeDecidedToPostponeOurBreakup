import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    size: 'medium' | 'full';
    variant: 'primary' | 'secondary';
    children: React.ReactNode;
}

const SIZE_MAP: { [k in Props['size']]: string } = {
    medium: 'w-full py-[1.25em]  font-semibold',
    full: 'w-full py-[1em] font-semibold', // 올바르게 변경
};

const VARIANT_MAP: { [k in Props['variant']]: string } = {
    primary: 'bg-jgreen text-white base ',
    secondary: 'bg-lightGreen text-white',
};

export default function Button({ size, variant, children, ...rest }: Props) {
    return (
        <button
            className={`flex items-center justify-center rounded-[16px] border-0 ${SIZE_MAP[size]} ${VARIANT_MAP[variant]}`}
            {...rest}
        >
            {children}
        </button>
    );
}
