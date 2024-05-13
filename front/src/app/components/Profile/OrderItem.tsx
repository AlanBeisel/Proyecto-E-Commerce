import React from 'react';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
}

interface Order {
    id: number;
    products: Product[];
}

const OrderItem: React.FC<{ order: Order }> = ({ order }) => {
    return (
        <div className="order-item p-4 border bg-white rounded-md mb-2 shadow-sm">
            <div>
                <h4 className="font-semibold">Productos:</h4>
                <ul>
                    {order.products.map((product) => (
                        <li key={product.id} className="ml-4">
                            <div>
                                <p className="font-semibold">{product.name}</p>
                                <p>{product.description}</p>
                                <p>Precio: ${product.price}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OrderItem;