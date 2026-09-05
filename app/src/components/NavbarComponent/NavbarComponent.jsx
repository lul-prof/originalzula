import { Link } from 'react-router-dom'
import './NavbarComponent.css'
import { FaSearch,FaShoppingBag } from 'react-icons/fa'

const NavbarComponent = () => {
    const scrollTo=(id)=>{
        document.getElementById(id).scrollIntoView({behavior:"smooth"})
    }
  return (
    <>
        <div className="navbar">
            {/*----------------------*/}
            <div className="navbar-left">
                <ul>
                   <Link to={'/'}><li>HOME</li></Link> 
                    <li onClick={()=>(scrollTo('music'))}>MUSIC</li>
                    <Link to={'/merch'}><li>MERCH</li></Link>
                    <li onClick={()=>(scrollTo('contact'))}>CONTACT</li>
                </ul>
            </div>
            {/*------------------------*/}
            <div className="navbar-center">
                <Link to={'/'}><h1>ZULA</h1></Link>
            </div>
            {/*------------------------*/}
            <div className="navbar-right">
                <div className="navbar-right-search">
                    <FaSearch className='search-icon' size={22} />
                </div>
                <div className="navbar-right-cart">
                    <FaShoppingBag className='cart-icon' size={22}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default NavbarComponent