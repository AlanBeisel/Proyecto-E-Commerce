import React from 'react';

interface ProductInfoProps {
    product: {
        name: string;
        description: string;
        specs?: string;
    };
}


const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
    return (
        <>
        <div className="product-info">
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="mb-4">{product.description}</p>

            {/* Opciones adicionales si deseas mostrar especificaciones */}
            {product.specs && <p className="mb-4">{product.specs}</p>}    
        </div>
        {/* Botones */}
        <div className="mt-4">
        {/* Botón Comprar Ahora */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2">
            Comprar ahora
        </button>

        {/* Botón Agregar al Carrito */}
        <button className="bg-gray-300 hover:bg-gray-400 text-blue-500 font-bold py-2 px-4 rounded">
            Agregar al carrito
        </button>
    </div>
    </>
    );
};

export default ProductInfo;
