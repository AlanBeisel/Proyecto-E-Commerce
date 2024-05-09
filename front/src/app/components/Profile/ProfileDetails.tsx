"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faIdCard, faCreditCard, faMapMarkerAlt, faLock, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface User {
    id: string;
    name: string;
    email: string;
}

interface ProfileDetailsProps {
    user: User | null; 
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ user }) => {
    const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

    const handleToggleSection = (sectionName: string) => {
        setExpandedSections((prevSections) => ({
            ...prevSections,
            [sectionName]: !prevSections[sectionName],
        }));
    };

    return (
        <div className="w-4/4 bg-gray-200 p-4 rounded-xl">
            <div className="flex items-center mb-4">
                <div className="rounded-full overflow-hidden w-16 h-16 bg-gray-300 flex items-center justify-center">
                    <FontAwesomeIcon icon={faUser} size="2x" className="text-white" />
                </div>
                <div className="ml-4">
                    <h2 className="text-2xl font-bold mb-0">{user?.name || 'Nombre del usuario'}</h2>
                    <p>{user?.email || 'mail del usuario@mail.com'}</p>
                </div>
            </div>

            {[
                { title: 'Información personal', icon: faIdCard, content: 'Información de tu documento de identidad y tu actividad fiscal.' },
                { title: 'Datos de tu cuenta', icon: faShieldAlt, content: 'Datos que representan a la cuenta en Mercado Libre y Mercado Pago.' },
                { title: 'Seguridad', icon: faLock, content: 'Tenés configurada la seguridad de tu cuenta.' },
                { title: 'Tarjetas', icon: faCreditCard, content: 'Tarjetas guardadas en tu cuenta.' },
                { title: 'Direcciones', icon: faMapMarkerAlt, content: 'Direcciones guardadas en tu cuenta.' },
                { title: 'Privacidad', icon: faEnvelope, content: 'Preferencias y control sobre el uso de tus datos.' },
            ].map(({ title, icon, content }) => (
                <div key={title} className="mt-4">
                    <div className="flex items-center justify-between cursor-pointer" onClick={() => handleToggleSection(title)}>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={icon} className="mr-2" />
                            <h3 className="text-xl font-bold">{title}</h3>
                        </div>
                        <FontAwesomeIcon icon={expandedSections[title] ? faCaretUp : faCaretDown} />
                    </div>
                    {expandedSections[title] && <p className="mt-2">{content}</p>}
                </div>
            ))}
            <Link href={"/"}>
                <p className="mt-4 text-red-500">Podés cancelar tu cuenta siempre que lo desees.</p>
            </Link>
        </div>
    );
};

export default ProfileDetails;
