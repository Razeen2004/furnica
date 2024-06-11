import React from 'react'
import Navbar from '../components/Navbar'
import HomeBanner from '../components/HomeBanner'
import HomeCategories from '../components/HomeCategories'
import Footer from '../components/Footer'
import ProductsSection from '../components/ProductsSection'
import GallerySection from '../components/GallerySection'

const Home = () => {
  return (
    <div>
        <Navbar />
        <HomeBanner/>
        <HomeCategories/>
        <ProductsSection />
        <GallerySection />
        <Footer />
    </div>
  )
}

export default Home