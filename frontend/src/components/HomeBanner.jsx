import React from 'react'
import './HomeBanner.css'
import bg from '../assets/bg.png'
const HomeBanner = () => {
  return (
    <div className='hero'>
        <img src={bg} alt="" />
        <div className="container">
            <div className="left">
                <div>p</div>
            </div>
            <div className="right">
                <div className="home-card">
                    <h3>New Arrival</h3>
                    <h2>Discover Our New Collection</h2>
                    <p>Explore our curated collection of exquisite furniture pieces and decor essentials to transform your home into a sanctuary of elegance. </p>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeBanner