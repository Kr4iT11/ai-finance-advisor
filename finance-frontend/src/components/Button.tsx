import React from 'react';

interface ButtonProps {
    text: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ text, type = 'button', disabled, onClick }) => (
    <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
    >
        {text}
    </button>
);

export default Button;

