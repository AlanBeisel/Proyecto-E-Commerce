import React, { useState } from 'react';
import './gallery.css';

const ImageGallery: React.FC<{ images: string[] }> = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [thumbnailIndex, setThumbnailIndex] = useState(0);

    const handleImageClick = (index: number) => {
        setCurrentImage(index);
    };

    const handleNextThumbnail = () => {
        if (thumbnailIndex < images.length - 1) {
            setThumbnailIndex(thumbnailIndex + 1);
        }
    };

    const handlePrevThumbnail = () => {
        if (thumbnailIndex > 0) {
            setThumbnailIndex(thumbnailIndex - 1);
        }
    };

    return (
        <div className="image-gallery-container">
            {/* Imagen principal */}
            <div className="current-image-container">
                <img src={images[currentImage]} alt={`Product image ${currentImage + 1}`} className="current-image" />
            </div>

            {/* Contenedor de miniaturas */}
            <div className="thumbnail-container">
                {/* Flecha izquierda */}
                <button
                    className="thumbnail-arrow prev"
                    onClick={handlePrevThumbnail}
                    disabled={thumbnailIndex === 0}
                >
                    &lt;
                </button>

                {/* Miniaturas */}
                <div className="thumbnail-row">
                    {images.slice(thumbnailIndex, thumbnailIndex + 4).map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Thumbnail ${thumbnailIndex + index + 1}`}
                            className={`thumbnail ${currentImage === thumbnailIndex + index ? 'active' : ''}`}
                            onClick={() => handleImageClick(thumbnailIndex + index)}
                        />
                    ))}
                </div>

                {/* Flecha derecha */}
                <button
                    className="thumbnail-arrow next"
                    onClick={handleNextThumbnail}
                    disabled={thumbnailIndex >= images.length - 4}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default ImageGallery;

