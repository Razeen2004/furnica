import React, { useState } from 'react';
import './ShopContainer.css';
import Filter from '../assets/Filter.svg';
import Product from './Product';
import { PRODUCTS } from '../products/products';

const ShopContainer = () => {
    const [filterTab, setFilterTab] = useState(false);
    const [filterVal, setFilterVal] = useState("all");

    const filteredProducts = PRODUCTS.filter((product)=>{
        if(filterVal == "all"){
            return true;
        }else{
            return product.productCategory === filterVal;
        }
    })
  return (
    <>
        <div className='shop-container'>
            <div className="top-sec">
                <div className="container">
                    <img src={Filter} alt="" onClick={()=>{setFilterTab(true)}} />
                    Filter

                    {filterTab ? <div className='filter'>
                        <div className="filter-overlay" onClick={()=>{setFilterTab(false)}}></div>
                        <h2 onClick={()=>{setFilterVal("all")}}>All</h2>
                        <h2 onClick={()=>{setFilterVal("Dining")}}>Dining</h2>
                        <h2 onClick={()=>{setFilterVal("Living")}}>Living</h2>
                        <h2 onClick={()=>{setFilterVal("Bedroom")}}>Bedroom</h2>
                    </div> : "" }
                </div>
            </div>
        </div>
        <div className='products-section'>
        <div className="container">
            <div className="top">
                {/* <h2>Our Products</h2> */}
            </div>
            <div className="bottom">
                <div className="products">
                    {filteredProducts.map(( product)=> {
                        return <Product key={product.id} product={product} />
                    })}
                </div>
            </div>
            <button className='load-more'>Load More</button>
        </div>
    </div>
    </>
  )
}

export default ShopContainer