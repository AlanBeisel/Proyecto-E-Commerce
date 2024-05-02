import ProductCard from './Cards';



export interface Product {
    name: string;
    price: number;
    description: string;
    image: string;
    categoryId: number;
    stock: number;
}

const ProductContainer: React.FC<{ products: Product[] }> = ({ products }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product: Product) => (
                <ProductCard key={product.name} product={product} />
            ))}
        </div>
    );
};

export default ProductContainer;