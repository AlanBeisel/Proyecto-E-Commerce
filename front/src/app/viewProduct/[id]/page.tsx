"use client";
import { usePathname, useRouter } from 'next/navigation';
import { Product } from '@/app/helpers/interfaces/IProduct';
import { useEffect, useState } from 'react';
import ImageGallery from '../../components/VistaProduct/gallery';
import ProductInfo from '../../components/VistaProduct/info';
import ProductPriceAvailability from '../../components/VistaProduct/price';
import { toast } from 'react-toastify';
import { getProductById } from '@/app/helpers/peticiones/product.helper';

interface CartItemType {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const ViewProduct = () => {
    const pathname = usePathname();
    const id = pathname.split('/')[2];
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [product, setProduct] = useState<Product | null>(null);
    const [cartItems, setCartItems] = useState<CartItemType[]>(() => {
        if (typeof window !== "undefined") {
            const storedCart = localStorage.getItem('cartItems');
            return storedCart ? JSON.parse(storedCart) as CartItemType[] : [];
        }
        return [];
    });
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    useEffect(() => {
        if (id) {
            getProductById(id)
                .then(data => setProduct(data))
                .catch(err => console.error('Error fetching product:', err));
        }
    }, [id]);

    useEffect(() => {
        const userSession = localStorage.getItem('userSession');
        setIsAuthenticated(!!userSession); 
    }, []);

    const handleAddToCart = (product: Product) => {
        if (!isAuthenticated) {
            toast.warning('Debes iniciar sesión para agregar productos al carrito.', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        const existingProduct = cartItems.find(item => item.id === product.id);
        if (existingProduct) {
            return;
        }

        const updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
        setCartItems(updatedCartItems);
        if (typeof window !== "undefined") {
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        }
        setIsAddedToCart(true);

        toast.success('Producto agregado al carrito.', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    if (!product) {
        return <div>Cargando...</div>;
    }

    return (
        <div className='m-4'>
            <div className="view-product-page mx-auto flex w-full lg:w-2/4 m-4 bg-gray-100 p-4 rounded-xl">
                <div className="flex-1 m-4 border border-gray-300 p-4 rounded-xl">
                    <ImageGallery image={product.image} />
                </div>
                <div className="flex-1 m-4 border border-gray-300 p-4 rounded-xl">
                    <ProductInfo product={{ name: product.name, description: product.description }} />
                    <ProductPriceAvailability price={product.price} inStock={product.stock > 0} />
                    
                    {!isAddedToCart ? (
                        <button
                            onClick={() => handleAddToCart(product)}
                            className="bg-gray-300 hover:bg-gray-400 text-blue-500 font-bold py-2 px-4 rounded mt-4"
                        >
                            Agregar al carrito
                        </button>
                    ) : (
                        <div>
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2 mt-4"
                                onClick={() => router.push('/cart')}
                            >
                                Ir al carrito
                            </button>
                            <button
                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
                                onClick={() => router.push('/')}
                            >
                                Seguir mirando productos
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ViewProduct;



