import React, { useContext } from 'react'
import { ShopContext } from '../context/shop-context'
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
  const {AddtoCart, cartItems} = useContext(ShopContext);
  const navigate = useNavigate();

  const ProductAmount = cartItems[product.id];
  console.log(ProductAmount)

  const openProduct = () =>{
    navigate(`/product/${product.id}`);
  }

  return (
    <div className="product">
        <div className="over">
            <button onClick={()=> AddtoCart(product.id)}>Add to Cart {ProductAmount > 0 && <>({ProductAmount})</>}</button>
        </div>
        <div className="top" onClick={openProduct}>
            <img src={product.productImage} alt=""/>
            <span className='off'>- {product.productSale}%</span>
        </div>
        <div className="bottom" onClick={openProduct}>
            <h2>{product.productName}</h2>
            <p>{product.productDes}</p>
            <div className="priceSec"> <span className='discountedPrice'> ${product.productPrice - (product.productPrice / 100) * product.productSale } </span> <span className='price'>${product.productPrice}</span></div>
        </div>
    </div>
  )
}

export default Product