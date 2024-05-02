import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from '../Cards/Cards';


interface IProduct {
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
    // Configuración del carrusel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Cantidad de tarjetas a mostrar en el carrusel
        slidesToScroll: 1, // Cantidad de tarjetas a mover por scroll
        autoplay: true, // Habilita el desplazamiento automático
        autoplaySpeed: 2000, // Velocidad del desplazamiento automático en milisegundos
        centerMode: true, // Centra las tarjetas en el carrusel
        responsive: [
            {
                breakpoint: 768, // Punto de quiebre para pantallas más pequeñas
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    centerMode: false, // Desactiva el centrado en pantallas pequeñas
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
        <div className="mx-6">
        <Slider {...settings}>
            {products.map((product: IProduct) => (
                <ProductCard key={product.name} product={product} />
            ))}
        </Slider>
            </div>
    );
};

export default ProductCarousel;