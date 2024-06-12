import React from 'react';

interface CartItemProps {
    item: {
        id: number;
        name: string;
        image: string;
        price: number;
    };
    
    onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {

    return (
        <div className="cart-item flex items-center py-4">
            <img src={item.image} alt={item.name} className="w-20 h-20 mr-4" />
            <div className="flex flex-col">
                <span className="font-bold">{item.name}</span>
                <span className="text-gray-600">Precio: ${item.price.toFixed(2)}</span>
            </div>
            <button
                onClick={() => onRemove(item.id)}
                className="ml-auto bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
                Eliminar
            </button>
        </div>
    );
};

export default CartItem;
