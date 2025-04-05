import { ChangeEvent } from 'react';

interface Props {
    placeholder: string;
    style?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function LineInput({ placeholder, style, value, onChange }: Props) {
    return (
        <input
            className={`${style} bg-transperent type="text" box-border border-b-2 border-jgreen px-1 font-light text-black placeholder-lightgrey focus:outline-none`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}
