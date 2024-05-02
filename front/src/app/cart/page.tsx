"use client";
import React, { useState } from 'react';
import CartItem from '../components/Cart/Item';
import CartSummary from '../components/Cart/summary';

const CartPage: React.FC = () => {
    const [cartItems, setCartItems] = useState([
        // Ejemplo de datos iniciales del carrito, puedes sustituirlos por datos de una API o estado global
        {
            id: 1,
            name: 'Producto 1',
            image: "https://http2.mlstatic.com/D_NQ_NP_809326-MLA46115014340_052021-O.webp",
            price: 10.99,
            quantity: 2,
        },
        {
            id: 2,
            name: 'Producto 2',
            image: "https://http2.mlstatic.com/D_NQ_NP_868385-MLA52463970075_112022-O.webp",
            price: 15.49,
            quantity: 1,
        },
    ]);

    const handleQuantityChange = (id: number, newQuantity: number) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const handleRemove = (id: number) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const taxes = subtotal * 0.1; // Por ejemplo, 10% de impuestos
    const total = subtotal + taxes;

    return (
        <div className="cart-page flex flex-col m-4">
        {/* Lista de productos en el carrito */}
        <div className="cart-items mb-4 p-4 border bg-white rounded-md">
            {cartItems.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    onQuantityChange={handleQuantityChange}
                    onRemove={handleRemove}
                />
            ))}
        </div>

        {/* Resumen del carrito */}
        <div className="cart-summary p-4 border bg-white rounded-md">
            <CartSummary subtotal={subtotal} taxes={taxes} total={total} />
        </div>
    </div>
    );
};

export default CartPage;
