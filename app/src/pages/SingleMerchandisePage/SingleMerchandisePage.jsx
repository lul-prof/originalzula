import React, { useContext, useState } from 'react'
import "./SingleMerchandisePage.css"
import { Link, useParams } from 'react-router-dom'
import { merch } from '../../assets/images/merch/merch'
import { FaRegHeart,FaHeart,FaRegStar,FaStar, FaPhone,FaAngleRight,FaPlus,FaMinus, FaFacebook, FaTwitter, FaWhatsapp, FaMailchimp } from 'react-icons/fa'
import { ShopContext } from '../../context/ShopContext'


const SingleMerchandisePage = () => {
  const {id}=useParams()
  const [liked,setLiked]=useState(false)
  const {currency}=useContext(ShopContext)
  const merchandise=merch.find(m=>m._id===id)
  const [index,setIndex]=useState(0)
  const [star,setStar]=useState()
  const [reviews,setReviews]=useState(true)
  const handleSubmit=async(e)=>{
    e.preventDefault()
  }
  const scrollTo=(id)=>{
        document.getElementById(id).scrollIntoView({behavior:"smooth"})
    }
  return (
    <>
    <div className="single-merch" id='single-merch'>
      {/*-----------------------------*/}
      <div className="single-merch-links">
        <h3 className='text-gray-400 hover:text-black transition-colors'><Link to={"/"}>Home</Link></h3>
        <h3 className='text-gray-400'>/</h3>
        <h3 className='text-gray-400 hover:text-black transition-colors'><Link to={"/merchandise"}>Shop</Link></h3>
        <h3 className='text-gray-400'>/</h3>
        <h3 className='text-black'>{merchandise.title}</h3>
      </div>
      {/*-----------------------------*/}
      <div className="single-merch-item">
        <div className="single-merch-item-left">
          <div className="single-merch-item-left-top">
            <img src={merchandise.image[index]} alt="apparelImage" />
          </div>
          <div className="single-merch-item-left-bottom">
            {
              merchandise.image.map((image,i)=>(
                <div key={i} className="single-merch-item-left-bottom-image">
                  <img key={i} src={image} alt="Apparelimages"  onClick={()=>(setIndex(i))}/>
                </div>
              ))
            }
          </div>
        </div>
        <div className="single-merch-item-right">
          <div className="single-merch-item-right-title">
            <div className="single-merch-item-right-title-left">
              <h2>{merchandise.title}</h2>
            </div>
            <div className="single-merch-item-right-title-right">
             { liked?<FaHeart color='red' fontSize={22} onClick={()=>(setLiked(!liked))} className='like-ic'/> : <FaRegHeart fontSize={22} onClick={()=>(setLiked(!liked))} className='like-ic'/> }
            </div>            
          </div>
          <div className="single-merch-item-right-reviews">
            <div className="single-merch-item-right-reviews-stars">
              { star===1? <FaRegStar onClick={()=>setStar(1)} fontSize={22}/>: <FaStar size={22} onClick={()=>setStar()}/> }
                { star!==2? <FaRegStar onClick={()=>setStar(2)} fontSize={22}/>: <FaStar size={22} onClick={()=>setStar()}/> }
                  { star!==3? <FaRegStar onClick={()=>setStar(3)} fontSize={22}/>: <FaStar size={22} onClick={()=>setStar()}/> }
                    { star!==4? <FaRegStar onClick={()=>setStar(4)} fontSize={22}/>: <FaStar size={22} onClick={()=>setStar()}/> }
                      { star!==5? <FaRegStar onClick={()=>setStar(5)} fontSize={22}/>: <FaStar size={22} onClick={()=>setStar()}/> }
            </div>
            <div className="single-merch-item-right-reviews-text">
              <p className='text-gray-500'>(0 reviews)</p>
            </div>
          </div>
          <div className="single-merch-item-right-price">
            <h4>{currency} {merchandise.price.toLocaleString()}</h4>
          </div>
          <div className="single-merch-item-right-sizes">
            <div className="single-merch-item-right-sizes-title">
              <h5 className='text-gray-400'>SELECT SIZE</h5>
            </div>
            <div className="single-merch-item-right-sizes-sizes">
            {
              merchandise.sizes.map((size,i)=>(
                <div key={i} className="single-merch-item-right-sizes-size border-gray-400 hover:border-black cursor-pointer">
                  <h3>{size}</h3>
                </div>
              ))
            }
            </div>
          </div>
          <div className="single-merch-item-right-help border-gray-100">
            <FaPhone color='gray'/>
            <h4 className='text-gray-400'>Need help? Call or Whatsapp:</h4>
            <h4 className='text-black'>0700000000</h4>
          </div>
          <div className="single-merch-item-right-buttons">
            <div className="single-merch-item-right-buttons-quantity">
              <div className="single-merch-item-right-buttons-quantity-left">
                <input type="number" defaultValue={1} min={1}/>
              </div>
              <div className="single-merch-item-right-buttons-quantity-right">
                <div className="single-merch-item-right-buttons-quantity-right-top">
                  <FaPlus size={12}/>
                </div>
                <div className="single-merch-item-right-buttons-quantity-right-bottom">
                  <FaMinus size={12}/>
                </div>
              </div>
            </div>
            <div className="single-merch-item-right-buttons-add">
              <button className='hover:bg-[#daea49] hover:text-black transition-colors disabled:opacity-50'>ADD TO CART</button>
            </div>
            <div className="single-merch-item-right-buttons-buy">
                <button className='disabled:opacity-50 hover:bg-black hover:text-white transition-colors'>BUY NOW <FaAngleRight/></button>
            </div>
          </div>
          <div className="single-merch-item-right-bottom border-gray-200">
            <div className="single-merch-item-right-bottom-right">
              <div className="single-merch-item-right-bottom-right-sku">
                <h3>SKU:</h3>
                <p className='text-gray-600'>N/A</p>
              </div>
              <div className="single-merch-item-right-bottom-right-category">
                <h3>Category:</h3>
                <p className='text-gray-600'>{merchandise.category}</p>
              </div>
            </div>
            <div className="single-merch-item-right-bottom-left">
              <div className="single-merch-item-right-bottom-left-left">
                <h3>SHARE:</h3>
              </div>
              <div className="single-merch-item-right-bottom-left-right">
                <Link to={""}>
                  <FaFacebook size={18} className='icon'/>
                </Link>
                <Link>
                  <FaTwitter size={18} className='icon'/>
                </Link>
                <Link>
                  <FaWhatsapp size={18} className='icon'/>
                </Link>
                <Link>
                  <FaMailchimp size={18} className='icon'/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*-------------------------------------*/}
      <div className="single-merch-mid">
        <div className="single-merch-mid-header border-gray-200">
          <div className="single-merch-mid-header-left" onClick={()=>(setReviews(!reviews))}>
              <h2 style={{color:!reviews?"#9CA3AF":""}}>DESCRIPTION</h2>
              <div style={{display:!reviews?"none":""}} className="single-merch-mid-header-left-divider">

              </div>
          </div>
          <div className="single-merch-mid-header-right" onClick={()=>(setReviews(!reviews))}>
              <h2 style={{color:reviews?"#9CA3AF":""}}>REVIEWS (0)</h2>
              <div style={{display:reviews?"none":""}} className="single-merch-mid-header-right-divider">
                
              </div>
          </div>
        </div>
        <div className="single-merch-mid-body">
          {
            reviews
            ?
          <div className="single-merch-mid-body-descr">
            <p className='text-gray-600'>{merchandise.description}</p>
          </div>
          :
          <div className="single-merch-mid-body-reviews">
            <div className="single-merch-mid-body-reviews-top">
                <h2>0 Reviews for {merchandise.title}</h2>
                <p className='text-gray-400'>No reviews yet. Be the first to review this product!</p>
            </div>
              <div className="single-merch-mid-body-reviews-mid">
                  <div className="single-merch-mid-body-reviews-mid-header">
                    <h3>ADD A REVIEW</h3>
                    <p className='text-gray-400'>Your email address will not be published. Required fields are marked *</p>
                  </div>
                  <div className="single-merch-mid-body-reviews-mid-ratings">
                    <h5>Your Rating *</h5>
                    <div className="single-merch-mid-body-reviews-mid-ratings-stars">
                      <FaRegStar fontSize={16}/>
                      <FaRegStar fontSize={16}/>
                      <FaRegStar fontSize={16}/>
                      <FaRegStar fontSize={16}/>
                      <FaRegStar fontSize={16}/>
                    </div>
                  </div>
                </div>
                <div className="single-merch-mid-body-reviews-form">
                  <form onSubmit={handleSubmit}>
                    <div className="review-form-class">
                      <label htmlFor="review">Your Review *</label>
                      <textarea name="review" rows={5} required></textarea>
                    </div>
                    <div className="review-form-class-small">
                      <div className="review-form-class">
                        <label htmlFor="name">Name *</label>
                        <input type="text" name="name"  required/>
                      </div>
                      <div className="review-form-class">
                        <label htmlFor="name">Email *</label>
                        <input type="email" name="email"  required/>
                      </div>
                    </div>
                    <div className="review-form-btn">
                      <button type='submit'>Submit</button>
                    </div>
                  </form>
                </div>
              </div>            
          }
        </div>
      </div>
      {/*--------------------------------*/}
      <div className="single-merch-related">
        <div className="single-merch-related-header">
          <h2>RELATED PRODDUCTS</h2>
        </div>
          <div className="single-merch-related-apparel">
          {
            merch.map((m)=>(
              m._id !==merchandise._id
              ?
              <>
              <Link to={`/merchandise/${m._id}`} onClick={()=>(scrollTo("single-merch"))}>
              <div key={m._id} className="single-merch-related-item">
                <div className="single-merch-related-item-image">
                  <img src={m.image[0]} alt="apparelImage" />
                </div>
                <div className="single-merch-related-item-details">
                  <h3 className='text-gray-900 group-hover:underline decoration-1 underline-offset-2 decoration-gray-300'>{m.title}</h3>
                  <h4>{currency} {m.price.toLocaleString()}</h4>
                </div>
              </div>
              </Link>
              </>
              :
              <></>
            ))
          }
          </div>
      </div>
    </div>
    </>
  )
}

export default SingleMerchandisePage