import React from 'react';

interface ProductInfoProps {
    product: {
        name: string;
        description: string;
        price?: number;
    };
}


const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
    return (
        <>
        <div className="product-info">
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="mb-4">{product.description}</p>

        
            {product.price && <p className="mb-4">{product.price}</p>}    
        </div>

    </>
    );
};

export default ProductInfo;
