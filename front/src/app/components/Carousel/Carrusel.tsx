import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from '../Cards/Cards';


interface IProduct {
    id: number,
    name: string;
    price: number;
    description: string;
    image: string;
    categoryId: number;
    stock: number;
}

interface ProductCarouselProps {
    products: IProduct[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, 
        slidesToScroll: 1, 
        autoplay: true, 
        autoplaySpeed: 2000, 
        centerMode: true, 
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    centerMode: false, 
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    centerMode: true, 
                },
            },
        ],
    };


    return (
        <div className="m-6">
        <Slider {...settings}>
            {products.map((product: IProduct) => (
                <ProductCard key={product.name} product={product} />
            ))}
        </Slider>
            </div>
    );
};

export default ProductCarousel;