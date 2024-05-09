import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CartItem {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
}

interface CartSummaryProps {
    subtotal: number;
    taxes: number;
    total: number;
    cartItems: CartItem[];
    clearCart: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({ subtotal, taxes, total, cartItems, clearCart }) => {
    const [token, setToken] = useState("")
    const handleCheckout = async () => {
        try {
            const tokenUser = localStorage.getItem('userSession'); 
            if (tokenUser) {
            const data = JSON.parse(tokenUser)
                console.log(data)
                setToken(data.token)
        }
            if (!token) {
                console.error('No se encontró un token de usuario.');
                return;
            }
            
    
            const products = cartItems.map(item => item.id);
    
            const response = await fetch('http://localhost:3001/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify({ products: products })
            });
    
            if (response.ok) {
                console.log('Pedido realizado con éxito.');
                toast.success('Compra realizada con éxito. Gracias por tu compra.');
                
                clearCart();
        
            } else {
                console.error('Error al realizar el pedido.');
                console.error(`Código de estado: ${response.status}`);
            }
        } catch (error) {
            console.error('Error durante el checkout:', error);
        }
    };

    return (
        <div className="cart-summary bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-bold">Resumen del carrito</h3>
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Impuestos: ${taxes.toFixed(2)}</p>
            <p>Total: ${total.toFixed(2)}</p>
            <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleCheckout}
            >
                Proceder al pago
            </button>
        </div>
    );
};

export default CartSummary;
