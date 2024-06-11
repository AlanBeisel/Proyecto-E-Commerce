"use client";
import { useState, useEffect } from 'react';
import { getProductById } from '@/app/helpers/peticiones/product.helper';
import { Product } from '@/app/helpers/interfaces/IProduct';
import ProductCard from '../Cards/Cards';


const MyComponent = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const product1 = await getProductById('1');
                const product2 = await getProductById('2');
                setProducts([product1, product2]);
            } catch (err) {
                console.error(err);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            {products.map((product: Product) => (
                <ProductCard key={product.name} product={product} />
            ))}
        </div>
    );
};

export default MyComponent;
