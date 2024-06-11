import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products/products';

export const ShopContext = createContext(null);
 
const getDefaultCart = () => {
    let cart = {};
    for(let i = 1; i < PRODUCTS.length + 1; i++){
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems,setCartItems] = useState(getDefaultCart());
    

    console.log(cartItems)
    const AddtoCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId] + 1}))
    }
    const RemovefromCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId] - 1}))
    }

    const RemoveAllfromCart = ( itemId ) => {
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId] = 0}))
    }

    const ContextValue = {cartItems, AddtoCart, RemovefromCart, RemoveAllfromCart}

    return <ShopContext.Provider value={ContextValue}>{props.children}</ShopContext.Provider>
}

export default ShopContextProvider