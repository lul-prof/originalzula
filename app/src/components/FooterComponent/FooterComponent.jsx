import { Link } from 'react-router-dom'
import './FooterComponent.css'
import { FaInstagram,FaTiktok,FaFacebook,FaYoutube,FaSpotify } from 'react-icons/fa'

const FooterComponent = () => {
  return (
    <>
    <footer className="footer">
        {/*---------------------*/}
        <div className="footer-top">
            <h1>ORIGINAL ZULA</h1>
        </div>
        {/*------------------------*/}
        <div className="footer-center">
            <div className="footer-center-instagram">
                <Link to={'https://www.instagram.com/original_zula_'} target='_blank' referrerPolicy='no-referrer'>
                    <FaInstagram className='instagram-icon' size={26}/>
                </Link>
            </div>
            <div className="footer-center-tiktok">
                <Link to={'https://youtube.com/@originalzula?si=Yh_Qrbr4HpzWMrOo'} target='_blank' referrerPolicy='no-referrer'>
                    <FaTiktok className='tiktok-icon' size={26}/>
                </Link>
            </div>
            <div className="footer-center-facebook">
                <Link to={'https://youtube.com/@originalzula?si=Yh_Qrbr4HpzWMrOo'} target='_blank' referrerPolicy='no-referrer'>
                    <FaFacebook className='facebook-icon' size={26}/>
                </Link>    
            </div>
            <div className="footer-center-youtube">
                <Link to={'https://youtube.com/@originalzula?si=Yh_Qrbr4HpzWMrOo'} target='_blank' referrerPolicy='no-referrer'>
                    <FaYoutube className='youtube-icon' size={26}/>
                </Link>
            </div>
            <div className="footer-center-spotify">
                <Link to={'https://open.spotify.com/artist/12SPFnH2gJwVRLl6e9WqFh'} target='_blank' referrerPolicy='no-referrer'>
                    <FaSpotify className='spotify-icon' size={26}/>
                </Link>
            </div>
        </div>
        {/*----------------------------*/}
        <div className="footer-separator w-[90%] max-w-2xl h-px bg-[#333] mb-8 ">
        </div>
        {/*------------------------*/}
        <div className="footer-bottom">
            <h5>&copy; { new Date().getFullYear() } ORIGINAL ZULA, ALL RIGHTS RESERVED</h5>
            <h6>POWERED BY <Link to={"https://israelmutua.vercel.app/"} target='_blank' referrerPolicy='no-referrer'><span>CAPIOF</span></Link> </h6>
        </div>
    </footer>
    </>
  )
}

export default FooterComponent