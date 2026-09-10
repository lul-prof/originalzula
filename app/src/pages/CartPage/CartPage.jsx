/* eslint-disable react-hooks/set-state-in-effect */
import  { useContext, useEffect, useState } from 'react'
import { FaTrash,FaArrowLeft, FaPlus, FaMinus } from 'react-icons/fa'
import "./CartPage.css"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

const CartPage = () => {

  const {updateQuantity,cartItems,products,currency,getCartAmount}=useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {      
      if (products.length > 0) {
        const tempData = [];
  
        for (const items in cartItems) {
          for (const item in cartItems[items]) {
            if (cartItems[items][item] > 0) {
              tempData.push({
                _id: items,
                size: item,
                quantity: cartItems[items][item],
              });
            }
          }
        }
        setCartData(tempData);
      }
    }, [cartItems, products]);
  return (
    <>
    <section className="cart">
      {/*---------------------*/}
      <div className="cart-links">
        <Link to={'/merchandise'}>
          <h3><FaArrowLeft/> CONTINUE SHOPPING</h3>
        </Link>
      </div>
      {/*-----------------------*/}
      <div className="cart-header">
        <h2>YOUR CART</h2>
      </div>
      {/*--------------------*/}
      <div className="cart-mid">
        <div className="cart-mid-left">
          <div className="cart-mid-left-header">
            <h3 className='col-span-6'>PRODUCT</h3>
            <h3 className='col-span-2 text-center'>PRICE</h3>
            <h3 className='col-span-2 text-center'>QUANTITY</h3>
            <h3 className='col-span-2 text-right'>TOTAL</h3>
          </div>
          <div className="cart-mid-left-items">
            {
            cartData.map((item)=>{
              let prod=products.find(p=>p._id===item._id)
              return(
                <div key={item._id} className="cart-mid-left-item border-gray-200">
                  <div className="cart-mid-left-item-product col-span-6 md:col-span-1">
                    <div className="cart-mid-left-item-image">
                      <img src={prod.image[0]} alt="productImage" />
                    </div>
                    <div className="cart-mid-left-item-title">
                      <h2>{prod.title}</h2><br/>
                      <p className='text-gray-500'>Size: <span className='uppercase'>{item?.size}</span></p>
                      <h3 className='text-red-500 hover:text-red-700 cursor-pointer' onClick={()=>(updateQuantity(item?._id,item?.size,item?.quantity===0))}><FaTrash color='red' size={16}/> REMOVE</h3>
                    </div>
                  </div>
                  <div className="cart-mid-left-item-price col-span-2">
                    <span>{currency} {prod.price.toLocaleString()}</span>
                  </div>
                  <div className="cart-mid-left-item-quantity col-span-2 md:col-span-1">
                    <div className="cart-mid-left-item-quantity-left">
                      <input type="number" value={item?.quantity} />
                    </div>
                    <div className="cart-mid-left-item-quantity-right">
                      <div className="cart-mid-left-item-quantity-right-top">
                        <FaPlus onClick={()=>(updateQuantity(item?._id,item?.size,item?.quantity+1))}/>
                      </div>
                      <div className="cart-mid-left-item-quantity-right-bottom">
                        <FaMinus onClick={()=>(updateQuantity(item?._id,item?.size,item?.quantity-1))}/>
                      </div>
                    </div>
                  </div>
                  <div className="cart-mid-left-item-total col-span-2 text-right ">
                    <span>{currency} {(prod.price * item.quantity).toLocaleString()}</span>
                  </div>
                </div>
              )
              })
            }
          </div>
        </div>
        <div className="cart-mid-right bg-gray-50 border-gray-200">
          <div className="cart-mid-right-header">
            <h2>ORDER SUMMARY</h2>
          </div>
          <div className="cart-mid-right-mid border-gray-200">
            <div className="cart-mid-right-mid-subtotal">
              <h3 className='text-gray-600'>Subtotal</h3>
              <p className='font-bold'>{currency} {getCartAmount().toLocaleString()}</p>
            </div>
            <div className="cart-mid-right-mid-ship">
              <h3 className='text-gray-600'>Shipping</h3>
              <p className='text-sm italic'>Calculated at checkout</p>
            </div>
          </div>
          <div className="cart-mid-right-total">
            <div className="cart-mid-right-total-right">
              <h2>TOTAL</h2>
            </div>
            <div className="cart-mid-right-total-left">
              <p className='text-gray-500'>KES</p>
              <h2>{currency} {getCartAmount().toLocaleString()}</h2>
            </div>
          </div>
          <div className="cart-mid-right-bottom">
            <p className='text-gray-500'>Shipping calculated at checkout</p>
          </div>
          <div className="cart-mid-right-btn">
            <Link to={"/checkout"}>
              <button className='hover:bg-black hover:text-white transition-colors'>CHECKOUT</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default CartPage