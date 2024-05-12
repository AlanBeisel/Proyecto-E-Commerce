import { Product } from './ProductContainer';

interface ProductCardProps {
product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
const handleViewProduct = () => {
    window.location.href = `/viewProduct/${product.id}`;
};

return (
    <div
    id="products"
    className="w-60 h-auto p-4 m-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
    onClick={handleViewProduct}
    style={{cursor: 'pointer' }}
    >
    <div id="products" className="h-full flex flex-col justify-between">
        <img src={product.image} alt={product.name} className="w-full h-56 rounded-t-lg" />
        <div className="p-4 flex flex-col justify-center items-center overflow-hidden">
        <h3 className="text-xl font-bold mb-2 overflow-hidden" style={{ whiteSpace: 'nowrap' }}>{product.name}</h3>
        <p className="text-lg font-semibold text-black-500 mt-2">${product.price}</p>
        </div>
    </div>
    </div>
);
};

export default ProductCard;

