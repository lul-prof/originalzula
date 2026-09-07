/* eslint-disable react-hooks/set-state-in-effect */
import { useContext, useEffect, useState } from 'react'
import "./CheckoutPage.css"
import { FaArrowLeft, FaCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

const CheckoutPage = () => {
  const {cartItems,products,currency,getCartAmount}=useContext(ShopContext);
   const [cartData, setCartData] = useState([]);
   const [mpesa,setMpesa]=useState(true)
   const [paypal,setPaypal]=useState(false)
  
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

      const handleSelection=()=>{
        if(mpesa){
          setPaypal(!paypal)
        }else{
          setMpesa(!mpesa)
        }
      }

      const handleSubmit=async(e)=>{
        e.preventDefault()
      }
  return (
    <>
    <div className="checkout">
      {/*------------------------*/}
      <div className="checkout-link">
        <Link to={"/cart"}>
          <FaArrowLeft/>
          <h4>BACK TO CART</h4>
        </Link>
      </div>
      {/*---------------------------*/}
      <div className="checkout-header">
        <h2>CHECKOUT</h2>
      </div>
      {/*------------------------*/}
      <div className="checkout-mid">
        <div className="checkout-mid-left">
          <div className="checkout-mid-left-header">
            <h3>CONTACT INFORMATION</h3>
          </div>
          <div className="checkout-mid-left-form">
            <form onSubmit={handleSubmit}>
              <div className="checkout-form-class-email">
                <input type="email" placeholder='Email Address' className='border-gray-200'/>
                <div className="checkout-form-class-email-check">
                  <input type="checkbox" className='accent-black' /> Email me with news and offers
                </div>
              </div>
              <div className="checkout-form-class-ship">
                <div className="checkout-form-class-ship-header">
                  <h3>SHIPPING ADDRESS</h3>
                </div>
                <div className="checkout-form-class-ship-name">
                  <input type="text" placeholder='First Name' className='border-gray-200'/>
                  <input type="text" placeholder='Last Name' />
                </div>
                <div className="checkout-form-class-ship-phone">
                  <input type="tel" placeholder='Phone Number' />
                </div>
                <div className="checkout-form-class-ship-city">
                  <input type="text" placeholder='City/ Address / Landmark location' />
                </div>
              </div>
              <div className="checkout-form-class-payment">
                <div className="checkout-form-class-payment-header">
                  <h3>
                    PAYMENT METHOD
                  </h3>
                </div>
                <div className="checkout-form-class-payment-mpesa bg-gray-50">
                  <div className="checkout-form-class-payment-mpesa-left">
                    <input type="radio" checked={mpesa} onChange={()=>(handleSelection())} className='accent-green-600 cursor-pointer' name='mpesa' onClick={()=>(setMpesa(!mpesa),setPaypal(!paypal))}/>
                  </div>
                  <div className="checkout-form-class-payment-mpesa-right">
                    <div className="checkout-form-class-payment-mpesa-right-top">
                      <h3>M-PESA STK Push</h3>
                    </div>
                    {
                      mpesa
                      ?
                    <div className="checkout-form-class-payment-mpesa-right-mid">
                        <label htmlFor="phone" className='text-gray-600 text-sm font-sans mb-2'>Enter your M-PESA number. A prompt will be sent to your phone to complete payment.</label>
                        <input type="tel" name="phone" placeholder='e.g. 0712345678' />
                    </div>
                    :<></>
                    }
                  </div>
                </div>
                <div className="checkout-form-class-payment-paypal bg-gray-50">
                  <div className="checkout-form-class-payment-paypal-left">
                    <input type="radio" checked={paypal} onChange={()=>(handleSelection())} className='accent-blue-600 cursor-pointer' name='paypal' onClick={()=>(setPaypal(!paypal),setMpesa(!mpesa))} />
                  </div>
                  <div className="checkout-form-class-payment-paypal-right">
                    <div className="checkout-form-class-payment-paypal-right-top">
                      <h3>Paypal / Bank</h3>
                    </div>
                    {
                      paypal
                      ?
                    <div className="checkout-form-class-payment-paypal-right-mid bg-gray-100  rounded-lg border border-gray-200">
                      <h4 className='font-sans text-sm font-bold text-gray-800 flex items-center gap-1'><FaCircle fontSize={8} className='animate-pulse'/>Paypal/Debit card payment: Coming soon</h4>
                      <p className='font-sans text-xs text-gray-500 '>We are currently integrating secure card payments. Please use M-PESA for now.</p>
                    </div>
                    :
                    <></>
                    }
                  </div>
                </div>
              </div>
              <Link to={'/orders'}>
              <div className="checkout-form-class-btn">
                <button type='submit' className='shadow-black/10 cursor-pointer'>PAY {currency} {getCartAmount().toLocaleString()}</button>
              </div>
              </Link>
            </form>
          </div>
        </div>
        <div className="checkout-mid-right bg-gray-50 border-gray-200">
          <div className="checkout-mid-right-header">
            <h3>ORDER SUMMARY</h3>
          </div>
          <div className="checkout-mid-right-items border-gray-200">
            {
              cartData.map((item)=>{
                const merchandise=products.find(merch=>merch._id===item._id);
                return(
                  <div key={item._id} className="checkout-mid-right-item">
                      <div className="checkout-mid-right-item-image">
                        <img src={merchandise.image[0]} alt="apparelImage" />
                      </div>
                      <div className="checkout-mid-right-item-details ">
                        <div className="checkout-mid-right-item-details-left">
                          <h4>{merchandise.title}</h4>
                          <p className='gray-500'>Qty: {item?.quantity}</p>
                          <p className='gray-500'>Size: <span className='uppercase'>{item?.size}</span></p>
                        </div>
                        <div className="checkout-mid-right-item-details-right">
                          <h5>{currency} {(item?.quantity * merchandise.price).toLocaleString()}</h5>
                        </div>
                      </div>
                      <div className="checkout-mid-right-item-price">
                        
                      </div>
                  </div>
                )
              })
            }
          </div>          
          <div className="checkout-mid-right-bottom border-gray-200">
            <div className="checkout-mid-right-bottom-sub">
              <h4 className='text-gray-600'>Subtotal</h4>
              <h3 className='font-bold'>{currency} {getCartAmount().toLocaleString()}</h3>
            </div>
            <div className="checkout-mid-right-bottom-ship">
              <h4 className='text-gray-600'>Shipping</h4>
              <h3 className='font-bold'>---</h3>
            </div>
          </div>
          <div className="checkout-mid-right-total">
              <h3>Total</h3>
              <h4><span className='text-gray-500'>KES </span>{currency} {getCartAmount().toLocaleString()}</h4>
          </div>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default CheckoutPage