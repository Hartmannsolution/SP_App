import React from "react";

type ButtonProps = {
    type?: 'button' | 'submit' | 'reset';
    handler?: ({object}: any) => void;
    color?: string;
    width?: string;
    children: React.ReactNode;
};

function Button({
                    type = 'button',
                    handler = () => {},
                    color = 'bg-blue-800',
                    width = 'full',
                    children,
                }: ButtonProps) {
    // This function could be used to change the color of the button when clicked (active | focus | hover)
    const number = Number(color?.slice(color.length - 3, color.length)) - 200;
    const activeColor = color?.slice(0, color.length - 3) + number.toString();

    return (
        <button
            type={type}
            onClick={handler}
            className={`rounded ${color} ${width === 'full' ? 'w-full' : `w-[${width}]`} border-b-4 border-green-600 px-4 py-1 font-bold text-blue-50 active:bg-green-600`}
        >
            {children}
        </button>
    );
}

export default Button;
