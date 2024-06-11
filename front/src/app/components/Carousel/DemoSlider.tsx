"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './demoSlider.css';



const imageLinks = [
    "https://http2.mlstatic.com/D_NQ_976480-MLA75833607624_042024-OO.webp",
    "https://http2.mlstatic.com/D_NQ_728428-MLA75985250771_042024-OO.webp",
    "https://http2.mlstatic.com/D_NQ_771919-MLA76009036347_042024-OO.webp",
    "https://http2.mlstatic.com/D_NQ_719048-MLA75719183644_042024-OO.webp"
];

const SimpleImageCarousel: React.FC = () => {
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
