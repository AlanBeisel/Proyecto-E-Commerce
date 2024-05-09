import {Product} from './ProductContainer'

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const handleViewProduct = () => {

        window.location.href = `/viewProduct/${product.id}`;
    };

    return (
        <div id="products" className="w-60 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <img src={product.image} alt={product.name} className="w-full h-56 rounded-t-lg" />
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-lg font-semibold text-black-500 mt-2">${product.price}</p>
                <button
                    className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    onClick={handleViewProduct}
                >
                    Ver producto
                </button>
            </div>
        </div>
    );
};

export default ProductCard;