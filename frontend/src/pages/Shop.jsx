import React from 'react'
import Navbar from '../components/Navbar'
import TopContainer from '../components/TopContainer'
import Footer from '../components/Footer'
import ShopContainer from '../components/ShopContainer'

const Shop = () => {
  return (
    <>
    <Navbar />
    <TopContainer name="Shop" route='Home > Shop' />
    <ShopContainer />
    <Footer />
    </>
  )
}

export default Shop