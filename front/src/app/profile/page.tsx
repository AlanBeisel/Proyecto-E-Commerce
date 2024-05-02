"use client";
import React from 'react';
import Sidebar from '../components/Profile/SideBar';
import ProfileDetails from '../components/Profile/ProfileDetails';
import "../globals.css";
import { faShoppingBag, faHeart, faFileInvoice, faCashRegister } from '@fortawesome/free-solid-svg-icons';

const options = [
    { label: 'Compras', icon: faShoppingBag },
    { label: 'Ventas', icon: faCashRegister },
    { label: 'Favoritos', icon: faHeart },
    { label: 'Facturación', icon: faFileInvoice },
];

const ProfilePage: React.FC = () => {


    const handleOptionClick = (option: string) => {
        console.log(`Opción seleccionada: ${option}`);
    }
    return (
        <div className="flex">
              <Sidebar options={options} onOptionClick={handleOptionClick} />
              <div className="flex-1 p-4">
                {/* Detalles del perfil */}
                <ProfileDetails />
            </div>
        </div>
    );
};

export default ProfilePage;
