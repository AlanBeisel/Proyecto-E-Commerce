import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'; 


interface SidebarProps {
    options: { label: string; icon: IconDefinition; }[];
    onOptionClick: (option: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ options, onOptionClick }) => {
    return (
        <div className="w-1/4 bg-gray-200 p-4 rounded-xl m-4">
            <h2 className="font-bold text-lg mb-4">Mi perfil</h2>
            <ul>
                {options.map((option, index) => (
                    <li
                        key={index}
                        onClick={() => onOptionClick(option.label)}
                        className="cursor-pointer py-2 px-4 hover:bg-gray-300 flex justify-between items-center"
                    >
                        <span className="flex items-center">
                            <FontAwesomeIcon icon={option.icon} className="mr-2" />
                            {option.label}
                        </span>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;

