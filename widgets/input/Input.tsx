interface Props {
    placeholder?: string;
    type?: string;
    value?: string;
    name?: string;
    className?: string;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ placeholder, className, type, name, value, onChange, disabled }: Props) {
    return (
        <input
            className={`${className} family box-border h-[51px] rounded-[30px] border border-[#9bbc74] bg-jwhite px-4 font-light text-black placeholder-grey focus:outline-none disabled:text-opacity-50`}
            placeholder={placeholder}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
        />
    );
}
