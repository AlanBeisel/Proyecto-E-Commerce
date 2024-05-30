"use client";
import { usePathname, useRouter } from 'next/navigation';
import { Product } from '@/app/helpers/interfaces/IProduct';
import { useEffect, useState } from 'react';
import ImageGallery from '../../components/VistaProduct/gallery';
import ProductInfo from '../../components/VistaProduct/info';
import ProductPriceAvailability from '../../components/VistaProduct/price';
import { toast } from 'react-toastify';

interface CartItemType {
    id: number;
    name: string;
    price: number;
    quantity: number;
}



const ViewProduct = ({params} : {params: {productId: string}}) => {

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

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3001/products/${id}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error al obtener los datos del producto');
                    }
                    return response.json();
                })
                .then(data => setProduct(data))
                .catch(err => console.error(err));
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
            
            const updatedCartItems = cartItems.map(item => 
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartItems(updatedCartItems);
        } else {
            
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }

        
        if (typeof window !== "undefined") {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
    };

    
    const handleQuantityChange = (id: number, newQuantity: number) => {
        const updatedCartItems = cartItems.map((item: CartItemType) => 
            item.id === id ? { ...item, quantity: newQuantity } : item
        );
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    if (!product) {
        return <div>Cargando...</div>;
    }

    const existingProduct = cartItems.find((item: CartItemType) => item.id === product.id);

    return (
        <div className='m-4'>
        <div className="view-product-page mx-auto flex w-full lg:w-2/4 m-4 bg-gray-100 p-4 rounded-xl">
        
            <div className="flex-1 m-4 border border-gray-300 p-4 rounded-xl">
                <ImageGallery image={product.image} />
            </div>

        
            <div className="flex-1 m-4 border border-gray-300 p-4 rounded-xl">
                <ProductInfo product={{ name: product.name, description: product.description }} />
                <ProductPriceAvailability price={product.price} inStock={product.stock > 0} />
                
            
                {existingProduct ? (
                    <div className="mt-4">
                        <div className="flex items-center">
                        
                            <button
                                onClick={() => handleQuantityChange(existingProduct.id, existingProduct.quantity - 1)}
                                className="px-3 py-1 bg-gray-300 text-blue-500 rounded mr-2"
                            >
                                -
                            </button>
                            
                            <span className="mx-2">{existingProduct.quantity}</span>
                            
                            <button
                                onClick={() => handleQuantityChange(existingProduct.id, existingProduct.quantity + 1)}
                                className="px-3 py-1 bg-gray-300 text-blue-500 rounded ml-2"
                            >
                                +
                            </button>
                        </div>
                    </div>
                ) : (
                    
                    <button
                        onClick={() => handleAddToCart(product)}
                        className="bg-gray-300 hover:bg-gray-400 text-blue-500 font-bold py-2 px-4 rounded mt-4"
                    >
                        Agregar al carrito
                    </button>
                )}

                
                {existingProduct && (
                <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2 mt-4"
                onClick={() => router.push('/cart')}
                >
                Ir al carrito
                </button>
)}
            </div>
        </div>
    </div>
);
};

export default ViewProduct;
