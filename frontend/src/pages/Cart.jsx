import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TopContainer from '../components/TopContainer'

const Cart = () => {
  return (
    <div>π
        <Navbar/>
        <TopContainer name="Cart" route='Home > Cart'/>
        <Footer/>
    </div>
  )
}

export default Cart