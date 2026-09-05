import { FaArrowRight } from 'react-icons/fa'
import './MerchandiseComponent.css'
import { merch } from '../../assets/images/merch/merch'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

const MerchandiseComponent = () => {
    const {currency}=useContext(ShopContext)
  return (
    <>
        <div className="merchandise-component border-gray-100">
            {/*---------------------------------------*/}
            <div className="merchandise-component-header">
                <div className="merchandise-component-header-left ">
                    <h2>MERCH</h2>
                </div> 
                <div className="merchandise-component-header-right">
                    <h5>SHOP ALL <FaArrowRight/></h5>
                </div>
            </div>
            {/*---------------------------------------*/}
            <div className="merchandise-component-divider">

            </div>
            {/*---------------------------------------*/}
            <div className="merchandise-component-merch ">
                {
                    merch.map((m)=>(
                        <div key={m._id} className="merch">
                            <div className="merch-img">
                                <img  src={m.image[0]} alt="merchImage" />
                            </div>
                            <div className="merch-title">
                                <h3 className='text-gray-700'>{m.title}</h3>
                            </div>
                            <div className="merch-price">
                                <h4>{currency} {m?.price.toLocaleString()}</h4>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default MerchandiseComponent