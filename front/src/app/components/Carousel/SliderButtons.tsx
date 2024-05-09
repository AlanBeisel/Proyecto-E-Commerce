import React from "react";



const SliderButtons: React.FC<{ link: string }> = ({ link }) => {
    return (
        <a target="_blank" href={link} className="bg-gray-800 inline-block px-9 py-2 rounded-full text-white mt-10 lg:mt-20">
            <span>View Product</span>
        </a>
    );
};

export default SliderButtons;