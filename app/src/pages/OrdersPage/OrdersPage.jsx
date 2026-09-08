import { useContext} from 'react'
import './OrdersPage.css'
import { ShopContext } from '../../context/ShopContext'
import {FaArrowLeft} from "react-icons/fa"
import {Link} from "react-router-dom"
import {toast} from 'react-hot-toast'

const OrdersPage = () => {
  const {orders,products,currency}=useContext(ShopContext);

/*
<div className="flex flex-col items-center justify-center h-screen">
  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-#daea49 mb-4"></div>
  <p className="text-gray-600 text-lg font-medium">Loading Orders...</p>
  <p className="text-gray-400 text-sm mt-1">Please wait</p>
</div>

*/
  
  return (
    <>
    <div className="orders">
      <Link to={'/checkout'}>
        <div className="orders-links">
          <FaArrowLeft/>
          <h4>Back to Checkout</h4>
        </div>
      </Link>
      <div className="orders-header">
        <h2>YOUR <span>ORDERS</span></h2>
      </div>
      <div className="orders-class ">
        {
          orders.map((order)=>{
            return(
              <>
                {
                order.items.map((item)=>{
                  const product=products.find(prod=>prod._id===item._id);
                  return(
                    <div key={product._id} className="order bg-gray-50 border-2 border-gray-100 border-b-2 border-b-gray-200">
                        <div className="order-image">
                          <img src={product.image[0]} alt="order-image" />
                        </div>
                        <div className="order-details">
                          <div className="order-details-top">
                            <h3>{product.title}</h3>
                          </div>
                          <div className="order-details-mid">
                            <p className='font-bold text-gray-700'>{currency} {product.price.toLocaleString()}</p>
                            <p className='text-gray-700'><span className='font-bold'>Quantity:</span> {item.quantity}</p>
                            <p className='text-gray-700'><span className='font-bold'>Size:</span> <span className='uppercase'>{item.size}</span></p>
                          </div>
                          <div className="order-details-date">
                            <p className='text-gray-700'><span className='font-bold'>Date:</span> {order.date.toDateString()}</p>
                          </div>
                          <div className="order-details-status">
                            <p className={`font-bold font-sans tracking-wide leading-5 ${order.payment?"text-green-600":"text-red-600"}`}>{order.payment?"paid":"pending" }</p>
                          </div>
                        </div>
                        <div className="order-status flex items-center gap-2">
                          <div className={`order-status-circle w-4 h-4 rounded-3xl animate-pulse ${order.status === "Delivered"? "bg-green-500": order.status === "Shipped"? "bg-blue-500": order.status === "Out for delivery"? "bg-yellow-500": order.status === "Packing"? "bg-orange-500": order.status === "Order placed"? "bg-purple-500": "bg-gray-500"}`}>

                          </div>
                          <div className="order-status">
                            <p className='text-gray-600 font-bold font-sans leading-3 tracking-wide text-lg'>{order.status}</p>
                          </div>
                        </div>
                        <div className="order-track">
                            <button onClick={()=>(toast.success('Order Status refreshed'))} className='border text-sm font-medium rounded-sm cursor-pointer'>Track Order</button>
                        </div>
                    </div>
                  )
                })
              }
              </>
            )
          }).reverse()
        }
      </div>
    </div>
    </>
  )
}

export default OrdersPage

