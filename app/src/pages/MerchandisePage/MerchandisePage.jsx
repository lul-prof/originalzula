import  { useContext } from 'react'
import "./MerchandisePage.css"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import { FaFilter, FaTimes } from 'react-icons/fa'

const MerchandisePage = () => {
  const {currency,addToCart,products}=useContext(ShopContext)


  
  return (
    <>
    <section className="merchandise">
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
            <option value="featured">Featured</option>
            <option value="high-low">Price: High to Low</option>
            <option value="low-high">Price: Low to High</option>
            <option value="newest">Newest</option>
          </select>
        </div>
        <button onClick={()=>(document.getElementById("filters").style.display="flex")} className='md:hidden bg-black text-white rounded-full flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-widest shadow-lg whitespace-nowrap'><FaFilter/> Filters &amp; Sort</button>
      </div>
      {/*------------------------------*/}
      <div className="merchandise-body">
        <div className="merchandise-body-left">
          <div className="merchandise-body-left-header">
            <h2>CATEGORIES</h2>
          </div>
          <div className="merchandise-body-left-categories">
            <ul>
              <li class="hover:text-black transition-colors text-black font-bold underline decoration-2 underline-offset-4">All Products</li>
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
                <div className="merchandise-body-right-apparel-image bg-gray-100 overflow-hidden rounded-sm">
                  <img src={apparel.image[0]} alt="AppaarelImage" className='transition-opacity duration-500' loading='lazy' />
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
    </section>

    <div id='filters' className="filters hidden flex-col  fixed top-0 right-0 left-0 z-1000 bg-white w-full h-full ">
      <div className="filters-top ">
        <h2>Filters</h2>
        <FaTimes style={{padding:"4px"}}  className='bg-gray-200 h-6 w-6  rounded-full' onClick={()=>(document.getElementById("filters").style.display="none")} />
      </div>
      <div className="filters-catogories">
        <h3 className='text-gray-400'>Categories</h3>
        <ul>
          <li class="hover:text-black transition-colors text-black font-bold underline decoration-2 underline-offset-4">ALL PRODUCTS</li>
          <li>APPAREL</li>
          <li>ACCESSORIES</li>
          <li>MUSIC</li>
          <li>POSTERS</li>
        </ul>
      </div>
      <div className="filters-sort">
        <h3 className='text-gray-400'>SORT BY</h3>
        <ul>
          <li class="hover:text-black transition-colors text-black font-bold underline decoration-2 underline-offset-4">FEATURED</li>
          <li>PRICE: LOW TO HIGH</li>
          <li>PRICE: HIGH TO LOW</li>
          <li>NEWEST</li>
        </ul>
      </div>
      <div className="filters-btn">
        <button onClick={()=>(document.getElementById("filters").style.display="none")} className='rounded-xl'>APPLY FILTERS</button>
      </div>
    </div>
    </>
  )
}

export default MerchandisePage