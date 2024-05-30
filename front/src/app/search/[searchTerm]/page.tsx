"use client";
import { useEffect, useState } from 'react';
import { Product } from '@/app/helpers/interfaces/IProduct';
import { getProductsDB } from '@/app/helpers/peticiones/product.helper';
import ProductCard from '@/app/components/Cards/Cards';

const SearchPage = ({ params }: { params: { searchTerm: string } }) => {
const { searchTerm } = params;
const [products, setProducts] = useState<Product[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    if (searchTerm) {
    const fetchProducts = async () => {
        setLoading(true);
        const allProducts = await getProductsDB();
        const filteredProducts = allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(filteredProducts);
        setLoading(false);
    };
    fetchProducts();
    }
}, [searchTerm]);

if (loading) {
    return <div>Cargando...</div>;
}

return (
    <div className="container mx-auto p-4 bg-gray-200 m-4">
    <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        Resultados de búsqueda para "{searchTerm}"
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
        products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))
        ) : (
        <p className="text-center text-gray-500 col-span-full">
            No se encontraron productos.
        </p>
        )}
    </div>
    </div>
);
};

export default SearchPage;
