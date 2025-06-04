import React from "react";

interface ButtonProps {
    text: string;
    // onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, type = 'button' }) => {
    return <button type={type}>{text}</button>;
};
export default Button;