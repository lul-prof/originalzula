import { Link } from 'react-router-dom'
import './NavbarComponent.css'
import { FaSearch,FaShoppingBag,FaBars,FaTimes } from 'react-icons/fa'

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
                   <li><Link to={'/'}>HOME</Link></li> 
                    <li onClick={()=>(scrollTo('music'))}>MUSIC</li>
                    <li><Link to={'/merchandise'}>MERCH</Link></li>
                    <li onClick={()=>(scrollTo('contact'))}>CONTACT</li>
                </ul>
            </div>
            {/*------------------------*/}
            <div className="navbar-center">
                <h1><Link to={'/'}>ZULA</Link></h1>
            </div>
            {/*------------------------*/}
            <div className="navbar-right">
                <div className="navbar-right-search">
                    <FaSearch className='search-icon' size={22} />
                </div>
                <div className="navbar-right-cart">
                    <FaShoppingBag className='cart-icon' size={22}/>
                </div>
                <div className="navbar-right-menu">
                    <FaBars className='cart-icon' size={22} onClick={()=>(document.getElementById("sidemenu").style.display="flex")}/>
                </div>
            </div>
        </div>
        <div className="sidemenu" id='sidemenu'>
           <div className="sidemenu-top border-gray-500">
                <div className="sidemenu-top-left">
                    <h2>ORIGINAL ZULA</h2>
                </div>
                <div className="sidemenu-top-right">
                    <FaTimes fontSize={22} className='close-icon' onClick={()=>(document.getElementById("sidemenu").style.display="none")}/>
                </div>
            </div> 
            <div className="sidemenu-mid">
                <ul>
                    <li onClick={()=>(document.getElementById("sidemenu").style.display="none")}><Link to={"/"}>HOME</Link></li>
                    <li onClick={()=>(scrollTo('music'),document.getElementById("sidemenu").style.display="none")}>MUSIC</li>
                    <li onClick={()=>(document.getElementById("sidemenu").style.display="none")}><Link to={"/merchandise"}>MERCH</Link></li>
                    <li onClick={()=>(scrollTo('contact'),document.getElementById("sidemenu").style.display="none")}>CONTACT</li>
                </ul>
            </div>
            <div className="sidemenu-bottom border-gray-500">
                
                <h3 className='text-gray-300'><Link to={"mailto:zula@gmail.com"}>Email: booking@originalzula.com</Link> </h3>
            </div>
        </div>
    </>
  )
}

export default NavbarComponent