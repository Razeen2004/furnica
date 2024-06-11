import React from 'react'
import './ProductsSection.css'

import { PRODUCTS } from '../products/products';
import Product from './Product';
const ProductsSection = () => {
  return (
    <div className='products-section'>
        <div className="container">
            <div className="top">
                <h2>Our Products</h2>
            </div>
            <div className="bottom">
                <div className="products">
                    {PRODUCTS.map(( product)=> {
                        return <Product key={product.id} product={product} />
                    })}
                </div>
            </div>
            <button className='load-more'>Load More</button>
        </div>
    </div>
  )
}

export default ProductsSection