import React from 'react';


interface Order {
    id: number;
    products: any[]; 

}


const OrderItem: React.FC<{ order: Order }> = ({ order }) => {
    return (
        <div className="order-item p-4 border bg-white rounded-md mb-2 shadow-sm">
            <h3 className="font-bold">Orden ID: {order.id}</h3>
            <div>
                <h4 className="font-semibold">Productos:</h4>
                <ul>
                    {order.products.map((product) => (
                        <li key={product.id} className="ml-4">
                            {product.name}
                        </li>
                    ))}
                </ul>
            </div>
        
        </div>
    );
};

export default OrderItem;
