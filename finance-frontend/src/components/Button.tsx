import React from "react";

interface ButtonProps {
    text: string;
    // onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, type = 'button', disabled }) => {
    return (
        <button
            type={type}
            disabled={disabled}
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
        >
            {text}
        </button>
    );
};
export default Button;