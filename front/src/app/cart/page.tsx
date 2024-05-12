"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import CartItem from '../components/Cart/Item';
import CartSummary from '../components/Cart/summary';



interface CartItem {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
}


const CartPage: React.FC = () => {
    const router = useRouter();

    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem('cartItems');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    const isAuthenticated = localStorage.getItem('userSession') !== null;
    

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/');
        }
    }, [isAuthenticated, router]);

    const handleQuantityChange = (id: number, newQuantity: number) => {
        setCartItems((prevItems: CartItem[]) =>
            prevItems.map((item: CartItem) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const handleRemove = (id: number) => {
        setCartItems((prevItems: CartItem[]) => prevItems.filter((item: CartItem) => item.id !== id));
    };
    const subtotal = cartItems.reduce((sum: number, item: CartItem) => sum + item.price * item.quantity, 0);
    const taxes = subtotal * 0.1; 
    const total = subtotal + taxes;

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const clearCart = () => {
        setCartItems([]);
        router.push('/');
    };

    return (
        <div className="cart-page flex flex-col m-4">
    
            <div className="cart-items mb-4 p-4 border bg-white rounded-md">
                {cartItems.map((item: CartItem) => (
                    <CartItem
                        key={item.id}
                        item={item}
                        onQuantityChange={handleQuantityChange}
                        onRemove={handleRemove}
                    />
                ))}
            </div>

        
            <div className="cart-summary p-4 border bg-white rounded-md">
                <CartSummary
                    subtotal={subtotal}
                    taxes={taxes}
                    total={total}
                    cartItems={cartItems} 
                    clearCart={clearCart}
                />
            </div>
        </div>
    );
};

export default CartPage;
