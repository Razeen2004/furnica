import React, { useState } from 'react'
import product1 from '../assets/product1.png';
import product2 from '../assets/Living.png';
import './SingleProduct.css'
import { PRODUCTS } from '../products/products';
const SingleProduct = () => {

    const [imageSrc, setImageSrc] = useState(product1);
    const [inputVal, setInputVal] = useState(0);

    if(inputVal < 0){
        setInputVal(0)
    }

    const [product, setProduct] = useState(PRODUCTS[2]);
    console.log(product)


  return (
    <div className='singleProd'>
        <div className="container">
            <div className="top-sec">
                <div className="left">
                    <div className="images-list">
                        <div className="left">
                            <img onClick={(e)=>{setImageSrc(e.target.src)}} src={product1} alt="" />
                            <img onClick={(e)=>{setImageSrc(e.target.src)}} src={product2} alt="" />
                            <img onClick={(e)=>{setImageSrc(e.target.src)}} src={product1} alt="" />
                            <img onClick={(e)=>{setImageSrc(e.target.src)}} src={product1} alt="" />
                        </div>
                        <div className="right">
                            <img src={imageSrc} alt="" />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <h2 className='ProductTitle'>{product.productName}</h2>
                    <h3 className='ProductPrice'>${product.productPrice}</h3>
                    <p className='ProductDetail'>{product.productAbout}</p>
                    <h3 className='Category'>Category: {product.productCategory}</h3>
                    <h3 className='Sale'>Sale: {product.productSale}%</h3>
                    <div className="product-input">
                        <button onClick={()=>{setInputVal(inputVal - 1)}}>-</button>
                        <input type="number" value={inputVal} />
                        <button onClick={()=>{setInputVal(inputVal + 1)}}>+</button>
                    </div>
                    <button className='Checkout'>Proceed to Checkout</button>
                </div>
            </div>
            <div className="bottom-sec">
                <h2>Product Description</h2>
                <p>{product.productDes}</p>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct