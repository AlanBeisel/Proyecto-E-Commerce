import React from 'react';

const ProductPriceAvailability: React.FC<{ price: number; inStock: boolean }> = ({ price, inStock }) => {
    return (
        <div className="price-availability">
            <p className="price text-2xl font-bold">${price.toFixed(2)}</p>
            <p className={`availability ${inStock ? 'text-green-500' : 'text-red-500'}`}>
                {inStock ? 'En stock' : 'Agotado'}
            </p>
        </div>
    );
};

export default ProductPriceAvailability;
