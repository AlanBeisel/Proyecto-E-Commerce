import React from 'react';

interface CartSummaryProps {
    subtotal: number;
    taxes: number;
    total: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ subtotal, taxes, total }) => {
    return (
        <div className="cart-summary bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-bold">Resumen del carrito</h3>
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Impuestos: ${taxes.toFixed(2)}</p>
            <p>Total: ${total.toFixed(2)}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Proceder al pago
            </button>
        </div>
    );
};

export default CartSummary;
