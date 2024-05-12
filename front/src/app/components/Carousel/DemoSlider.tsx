import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './demoSlider.css';

interface SimpleImageCarouselProps {
    imageLinks: string[];
}

const SimpleImageCarousel: React.FC<SimpleImageCarouselProps> = ({ imageLinks }) => {
    const settings = {
        dots: true, 
        infinite: true, 
        speed: 500, 
        slidesToShow: 1, 
        slidesToScroll: 1, 
        autoplay: true, 
        autoplaySpeed: 3000,
        centerMode: false, 
    };

    return (
        <div className="mx-4 " > 
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
