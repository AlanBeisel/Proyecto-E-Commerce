import React from 'react';

interface CartItemProps {
    item: {
        id: number;
        name: string;
        image: string;
        price: number;
        quantity: number;
    };
    onQuantityChange: (id: number, newQuantity: number) => void;
    onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onQuantityChange, onRemove }) => {
    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = parseInt(e.target.value);
        onQuantityChange(item.id, newQuantity);
    };

    return (
        <div className="cart-item flex items-center py-4">
            <img src={item.image} alt={item.name} className="w-20 h-20 mr-4" />
            <div className="flex flex-col">
                <span className="font-bold">{item.name}</span>
                <span className="text-gray-600">Precio: ${item.price.toFixed(2)}</span>
                <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={handleQuantityChange}
                    className="mt-2 p-1 border"
                />
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
