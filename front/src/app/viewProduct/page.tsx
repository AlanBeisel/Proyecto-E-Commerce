"use client";
import React from 'react';
import ImageGallery from '../components/VistaProduct/gallery';
import ProductInfo from '../components/VistaProduct/info';
import ProductPriceAvailability from '../components/VistaProduct/price';

const ViewProduct: React.FC = () => {
    // Datos del producto (esto puede venir de una API, estado global, o props)
    const product = {
        name: 'Producto Ejemplo',
        description: 'Descripción del producto ejemplo.',
        specs: 'Especificaciones del producto ejemplo.',
        images: [
            "https://http2.mlstatic.com/D_NQ_NP_809326-MLA46115014340_052021-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_868385-MLA52463970075_112022-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_814559-MLA53970921150_022023-O.webp",
        ],
        price: 59.99,
        inStock: true
    };

    return (
        <div className='m-4'>
        <div className="view-product-page mx-auto flex w-full lg:w-2/4 m-4 bg-gray-100 p-4 rounded-xl">
            {/* Galería de imágenes */}
            <div className="flex-1 m-4 border border-gray-300 p-4 rounded-xl"> {/* Añade margen derecho para separar de la descripción */}
                <ImageGallery images={product.images} />
            </div>

            {/* Información del producto */}
            <div className="flex-1 m-4 border border-gray-300 p-4 rounded-xl">
                <ProductInfo product={{ name: product.name, description: product.description, specs: product.specs }} />

                {/* Precio y disponibilidad */}
                <ProductPriceAvailability price={product.price} inStock={product.inStock} />
            </div>
        </div>
        </div>
    );
};

export default ViewProduct;
