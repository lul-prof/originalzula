/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import { merch } from "../assets/images/merch/merch";
import {toast} from 'react-hot-toast'
import { demoOrders } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

  const currency = "KSh";

  const [cartItems, setCartItems] = useState({});

  const [products,setProducts]=useState(merch)
  const [orders,setOrders]=useState(demoOrders)


  const addToCart = async (productId,size) => {
    if(!size){
      toast.error("Select Product Size");
      return
    }
    let cartData = structuredClone(cartItems);
    if (cartData[productId]) {
      if(cartData[productId][size]){
        cartData[productId][size] += 1;
        toast.success('Product added to cart')
      }
      else {
        cartData[productId][size] = 1;
      }
    }
    else{
      cartData[productId] = {};
      cartData[productId][size] = 1;
    }
  
    setCartItems(cartData);
    console.log(cartData);
    console.log(cartItems);
  };

  const getCartCount=()=>{
    let totalCount=0;

    if(!cartItems || typeof cartItems !=="object"){
      return 0;
    }
    for(const productId in cartItems){
      for (const size in cartItems[productId]) {
      try {
        if(cartItems[productId][size]>0){
          totalCount+=cartItems[productId][size];
        }
      } catch (error) {
        toast.error(error.message)
        console.log(error);
        
      }
    }
    }
    return totalCount;
    
  }

  useEffect(()=>{},[cartItems])

  const updateQuantity=async(productId,size,quantity)=>{
    let cartData=structuredClone(cartItems);
    cartData[productId][size]=quantity;

    setCartItems(cartData);
    console.log(cartData);
    console.log(cartItems);
    

  }

  const getCartAmount = () => {
    let totalAmount = 0;
      for(const items in cartItems){
      let itemInfo=(products.find((product)=>product._id===items));
      for (const item in cartItems[items]) {
      try {
        if(cartItems[items][item]>0){
          totalAmount+=itemInfo.price * cartItems[items][item];        
        }
      } catch (error) {
        toast.error(error.message)
      }
    }
    }
    return totalAmount; 
  };


  const value = {
    currency,
    addToCart,
    getCartAmount,
    getCartCount,
    updateQuantity,
    setProducts,
    cartItems,
    setCartItems,
    products,
    orders,
    setOrders
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;