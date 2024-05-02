import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SimpleImageCarouselProps {
    imageLinks: string[];
}

const SimpleImageCarousel: React.FC<SimpleImageCarouselProps> = ({ imageLinks }) => {
    const settings = {
        dots: true, // Muestra puntos de navegación
        infinite: true, // Habilita desplazamiento infinito
        speed: 500, // Velocidad de transición entre imágenes en milisegundos
        slidesToShow: 1, // Muestra una imagen a la vez
        slidesToScroll: 1, // Desplaza una imagen a la vez
        autoplay: true, // Habilita el desplazamiento automático
        autoplaySpeed: 3000, // Velocidad del desplazamiento automático en milisegundos
        centerMode: false, // No centra las imágenes en el carrusel
    };

    return (
        <div className="mx-4 " > {/* Agrega margen alrededor del carrusel */}
            <Slider {...settings}>
                {imageLinks.map((link, index) => (
                    <div key={index}>
                        <img src={link} alt={`Imagen ${index + 1}`} className="w-full h-80 imageLinks={imageLinks} /> rounded-lg" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SimpleImageCarousel;
