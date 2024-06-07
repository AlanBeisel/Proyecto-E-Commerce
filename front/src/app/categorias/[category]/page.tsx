"use client"
import { useEffect, useState } from 'react';
import { Product } from '@/app/helpers/interfaces/IProduct'; 
import { getProductsDB } from '@/app/helpers/peticiones/product.helper'; 
import ProductCard from '@/app/components/Cards/Cards';

const categoryMapping: { [key: string]: number } = {
smartphones: 1,
laptops: 2,
tablets: 3,
headphones: 5,
cameras: 8,
impresoras: 9,
relojes: 4,
almacenamiento: 7,
accessories: 6,
};

const CategoryPage = ({params} : {params: {category: string}}) => {
const { category } = params;
const [products, setProducts] = useState<Product[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    if (category) {
    const fetchProducts = async () => {
        setLoading(true);
        const allProducts = await getProductsDB();
        const categoryId = categoryMapping[category as string];
        if (categoryId) {
        const filteredProducts = allProducts.filter(
            (product) => product.categoryId === categoryId
        );
        setProducts(filteredProducts);
        } else {
        setProducts([]);
        }
        setLoading(false);
    };
    fetchProducts();
    }
}, [category]);

if (loading) {
    return <div>Loading...</div>;
}

return (
    <div className="container mx-auto p-4 rounded-xl m-4 bg-gray-200">
    <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Productos en {category}</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.length > 0 ? (
        products.map((product) => (
        <ProductCard key={product.id} product={product} />
        ))
    ) : (
        <p className="text-center text-gray-500 col-span-full">No products found in this category.</p>
    )}
    </div>
</div>
);
};

export default CategoryPage;
