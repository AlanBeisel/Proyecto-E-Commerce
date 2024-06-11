"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from '../Cards/Cards';
import { Product } from "@/app/helpers/interfaces/IProduct";
import { useState, useEffect } from "react";
import { getProductsDB } from "@/app/helpers/peticiones/product.helper";



const ProductCarousel: React.FC = () => {


    const [products, setProducts] = useState<Product[]>([]);

useEffect(() => {
    const fetchProducts = async () => {
    const products = await getProductsDB()
    setProducts(products)
    };
    
    fetchProducts();
}, []);
    
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
            {products.map((product: Product) => (
                <ProductCard key={product.name} product={product} />
            ))}
        </Slider>
            </div>
    );
};

export default ProductCarousel;