import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TopSlideContainer from '../components/TopSlideContainer'
import SingleProduct from '../components/SingleProduct'

const SingleProductPage = () => {
  return (
    <div>
        <Navbar />
        <TopSlideContainer text="Asgarda" />
        <SingleProduct />
        <Footer />
    </div>
  )
}

export default SingleProductPage