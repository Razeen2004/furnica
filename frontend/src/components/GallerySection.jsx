import React from 'react';
import './GallerySection.css';

import gallery from '../assets/gallery.png';
const GallerySection = () => {
  return (
    <div className='gallery'>
        <div className="top">
            <h3>Share your setup with</h3>
            <h2>#FurnicaFurniture</h2>
        </div>
        <div className="bottom">
            <img src={gallery} alt="" />
        </div>
    </div>
  )
}

export default GallerySection