import React from 'react';
import './gallery.css';

const ImageGallery: React.FC<{ image: string }> = ({ image }) => {
    return (
        <div className="image-gallery-container">
            {/* Imagen principal */}
            <div className="current-image-container">
                <img src={image} alt="Product image" className="current-image" />
            </div>
        </div>
    );
};

export default ImageGallery;
