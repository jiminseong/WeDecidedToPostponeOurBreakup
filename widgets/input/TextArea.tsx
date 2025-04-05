import React from 'react';

interface TextAreaProps {
    className: string;
    placeholder?: string;
    name: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>; // 변경된 부분
}

const TextArea: React.FC<TextAreaProps> = ({ onChange, name, className, placeholder, value }) => {
    return (
        <textarea
            name={name}
            value={value}
            className={`${className} box-border flex h-[200px] resize-none rounded-[30px] border border-jgreen bg-jwhite px-4 py-4 text-start font-light text-black placeholder-grey focus:outline-none disabled:text-opacity-50`}
            placeholder={placeholder}
            onChange={onChange}
        ></textarea>
    );
};

export default TextArea;
