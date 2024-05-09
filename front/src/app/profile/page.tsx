"use client";
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Profile/SideBar';
import ProfileDetails from '../components/Profile/ProfileDetails';
import OrderItem from '../components/Profile/OrderItem';
import "../globals.css";
import { faShoppingBag, faHeart, faFileInvoice, faCashRegister } from '@fortawesome/free-solid-svg-icons';

interface User {
    id: string;
    name: string;
    email: string;
}

interface Order {
    id: number;
    products: any[]; 
}

const options = [
    { label: 'Compras', icon: faShoppingBag },
    { label: 'Ventas', icon: faCashRegister },
    { label: 'Favoritos', icon: faHeart },
    { label: 'Facturación', icon: faFileInvoice },
];

const ProfilePage: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [orders, setOrders] = useState<Order[]>([]);
    const [token, setToken] = useState('');
    const [showOrders, setShowOrders] = useState(false); 

    useEffect(() => {
        const userSession = localStorage.getItem('userSession');
        if (userSession) {
            const data = JSON.parse(userSession);
            setUser(data.userData);
            setToken(data.token);
        }
    }, []);

    const handleOptionClick = async (option: string) => {
        console.log(`Opción seleccionada: ${option}`);
        if (option === 'Compras') {
            try {
                const response = await fetch('http://localhost:3001/users/orders', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': token,
                    },
                });

                if (response.ok) {
                    const ordersData = await response.json();
                    setOrders(ordersData);
                    setShowOrders(true);
                } else {
                    console.error('Error al obtener el historial de órdenes:', response.statusText);
                }
            } catch (error) {
                console.error('Error al obtener el historial de órdenes:', error);
            }
        }
    };


    return (
        <div className="flex">
            <Sidebar options={options} onOptionClick={handleOptionClick} />
            <div className="flex-1 p-4">
                <ProfileDetails user={user} />

                {showOrders && (
                    <div className="order-section bg-gray-200 rounded-xl m-3 p-4">
                        <button
                            className="close-btn mb-4 text-red-600"
                            onClick={() => setShowOrders(false)}
                        >
                            Cerrar
                        </button>

                        {orders.length > 0 ? (
                            <div>
                                <h2 className="text-xl font-bold mb-4">Historial de órdenes</h2>
                                <div className="order-list space-y-4">
                                    {orders.map((order) => (
                                        <OrderItem key={order.id} order={order} />
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="no-orders-message">
                                <p className="text-black">Aún no has realizado compras.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
