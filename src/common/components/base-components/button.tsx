import React from 'react'
import { IButton } from '../../types/base-components/button';

/**
 * Renders a Button component with the given properties.
 *
 * @param {object} props - The properties for the Button component.
 * @param {string} props.label - The label text for the button.
 * @param {string} props.type - The type of the button.
 * @param {string} props.color - The color of the button.
 * @param {string} props.size - The size of the button.
 * @param {string} props.styles - Additional styles for the button.
 * @param {function} props.onClick - The click event handler for the button.
 * @param {object} props... - Additional properties for the button.
 * @return {JSX.Element} The rendered Button component.
 */
export const Button: React.FC<IButton> = ({ label, type, color, size, styles, onClick, ...props }) => {

    let _color: string;
    switch (color) {
        case "primary":
            _color = "flex bg-blue-500 justify-center hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline";
            break;
        case "success":
            _color = "flex bg-green-500 justify-center hover:bg-green-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline";
            break;
        case "danger":
            _color = "flex bg-red-500 justify-center hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline";
            break;
        case "warning":
            _color = "flex bg-yellow-500 justify-center hover:bg-yellow-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline";
            break;
        case "alternative":
            _color = "flex bg-gray-500 justify-center hover:bg-gray-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline";
            break;
        default:
            _color = "";
    }

    let _size: string;
    switch (size) {
        case "large":
            _size = "w-full";
            break;
        case "medium":
            _size = "w-3/6";
            break;
        default:
            _size = "";
    }

    return (
        <>
            <button className={[_color, _size, styles].join(' ')}
                onClick={onClick} type={type === "submit" ? "submit" : "button"} {...props}>{label}</button>
        </>

    )
}
