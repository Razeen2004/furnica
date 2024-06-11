import React from 'react';
import "./HomeCategories.css";

import dining from '../assets/Dining.png';
import living from '../assets/Living.png';
import bedroom from '../assets/Bedroom.png'

const HomeCategories = () => {
  return (
    <div className='home-categories'>
        <div className="container">
            <div className="top">
                <h2>Our Categories</h2>
                <p>Discover the essence of fine living with our Dining, Living, and Bedroom collections. From intimate family gatherings to serene bedroom retreats, Furnica offers meticulously crafted furniture pieces tailored to elevate every corner of your home. Explore each category to find the perfect blend of comfort, functionality, and style, designed to reflect your unique lifestyle.</p>
            </div>
            <div className="bottom">
                <div className="categories">
                    <div className="category">
                        <img src={dining} alt="" />
                        Dining
                    </div>
                    <div className="category">
                        <img src={living} alt="" />
                        Living
                    </div>
                    <div className="category">
                        <img src={bedroom} alt="" />
                        Bedroom
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeCategories