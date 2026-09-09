import  { useContext } from 'react'
import "./MerchandisePage.css"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

const MerchandisePage = () => {
  const {currency,addToCart,products}=useContext(ShopContext)


  
  return (
    <>
    <div className="merchandise">
      {/*--------------------------*/}
      <div className="merchandise-links">
        <h4 className='text-gray-400'><Link to={'/'}>Home</Link></h4>
        <h3>/</h3>
        <h3 className='cursor-pointer'>SHOP</h3>
      </div>
      {/*------------------------------*/}
      <div className="merchandise-header">
        <div className="merchandise-header-left">
          <h1>SHOP ALL</h1>
        </div>
        <div className="merchandise-header-right">
          <h3 className='text-gray-400'>SORT BY:</h3>
          <select name="category" id="category">
            <option value="">Relevant</option>
            <option value="featured">Featured</option>
            <option value="high-low">Price: High to Low</option>
            <option value="low-high">Price: Low to High</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
      {/*------------------------------*/}
      <div className="merchandise-body">
        <div className="merchandise-body-left">
          <div className="merchandise-body-left-header">
            <h2>CATEGORIES</h2>
          </div>
          <div className="merchandise-body-left-categories">
            <ul>
              <li>All Products</li>
              <li>Apparel ({products.filter(product=>product.category==='apparel').length})</li>
              <li>Accessories ({products.filter(product=>product.category==='accessories').length})</li>
              <li>Music ({products.filter(product=>product.category==='music').length})</li>
              <li>Posters ({products.filter(product=>product.category==='posters').length})</li>
            </ul>
          </div>
        </div>
        <div className="merchandise-body-right">
          {
            products.map((apparel)=>(
              <div key={apparel._id} className="merchandise-body-right-apparel">
                <Link to={`/merchandise/${apparel._id}`}>
                <div className="merchandise-body-right-apparel-image">
                  <img src={apparel.image[0]} alt="AppaarelImage" className='transition-opacity duration-500' />
                </div>
                <div className="merchandise-body-right-apparel-details">
                  <h3 className='text-gray-900 leading-tight hover:underline decoration-1 underline-offset-2 decoration-gray-300 truncate whitespace-nowrap'>{apparel.title}</h3>
                  <h4>{currency} {apparel.price.toLocaleString()}</h4>
                </div>
                </Link>
                <div className="merchandise-body-right-apparel-btn">
                  <button onClick={()=>(addToCart(apparel._id,"m"))}>ADD TO CART</button>
                </div>
              </div>
              
            ))
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default MerchandisePage