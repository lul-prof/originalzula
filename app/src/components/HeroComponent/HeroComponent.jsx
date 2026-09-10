import './HeroComponent.css'
import {FaCircle, FaFacebook, FaInstagram, FaSpotify, FaTiktok, FaYoutube} from 'react-icons/fa'
import {Link} from "react-router-dom"
import { assets } from '../../assets/assets'

const HeroComponent = () => {
  return (
    <>
    <section id="hero" className='hero relative w-full h-[92svh] min-h-65 md:h-[95vh] lg:h-screen md:min-h-150 overflow-hidden bg-black flex flex-col items-center justify-center text-white'>
      <div className="hero-filter absolute inset-0 opacity-[0.05] pointer-events-none z-100 mix-blend-overlay" style={{backgroundImage:"url(&quot;data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E&quot)"}}></div>
      <div className="hero-gradient absolute w-100 md:w-65 lg:w-150 h-100 md:h-65 lg:h-150 bg-linear-to-r from-gray-800 to-gray-900 rounded-full blur-[100px] md:blur-[60px] lg:blur-[150px] pointer-events-none z-0 opacity-40" style={{top: "50%", left: "50%", marginTop: "-300px", marginLeft: "-300px"}}></div>
      {/*----------------------*/}
      <div className="hero-links">
        <div className="hero-links-youtube">
          <Link to={'https://youtube.com/@originalzula'} target='_blank' rel="noopener noreferrer">
            <FaYoutube fontSize={22} color='#9CA3AF' className='main-icon hover:text-white'/>
          </Link>
        </div>
        <div className="hero-links-instagram">
          <Link to={'https://www.instagram.com/original_zula_'} target='_blank'>
            <FaInstagram fontSize={22} color='#9CA3AF' className='main-icon'/>
          </Link>
        </div>
        <div className="hero-links-spotify">
          <Link to={'https://open.spotify.com/artist/6SPFnH2gJwVRLl6e9WqFh'} target='_blank'>
            <FaSpotify fontSize={22} color='#9CA3AF' className='main-icon'/>
          </Link>
        </div>
        <div className="hero-links-facebook">
          <Link to={'https://open.spotify.com/artist/6SPFnH2gJwVRLl6e9WqFh'} target='_blank'>
            <FaFacebook fontSize={22} color='#9CA3AF' className='main-icon'/>
          </Link>
        </div>
        <div className="hero-links-tiktok">
          <Link to={'https://open.spotify.com/artist/6SPFnH2gJwVRLl6e9WqFh'} target='_blank'>
            <FaTiktok fontSize={22} color='#9CA3AF' className='main-icon'/>
          </Link>
        </div>
        <div className="w-px h-16 md:h-16 lg:h-20 bg-linear-to-b from-gray-400 to-transparent mt-4 opacity-50"></div>
      </div>
      {/*---------------------------------------- */}
      <div className="hero-text">
        <div className="hero-text-top">
          <h2 className='text-gray-400'>Top Boyz <span>Records</span></h2>
          <h1 className='text-outline tracking-tight'>ZULA</h1>
          <h1 className='text-outline tracking-tight'>ORIGINAL</h1>
        </div>
      </div>
      <div className="hero-image">
        <img width={400} fetchPriority='high'  src={assets.zula1} alt="Original Zula Artist" referrerPolicy='no-referrer'/>
      </div>
      <div className="hero-bottom">
        
      </div>
      <div className="hero-bottom-class">
          <div className="hero-bottom-class-item">
            <span>New Song Out Now <FaCircle fontSize={6}/> Stream Everywhere <FaCircle fontSize={6}/> Kante Out Now <FaCircle fontSize={6}/> </span>
            <span>New Song Out Now <FaCircle fontSize={6}/> Stream Everywhere <FaCircle fontSize={6}/> Kante Out Now <FaCircle fontSize={6}/> </span>
            <span>New Song Out Now <FaCircle fontSize={6}/> Stream Everywhere <FaCircle fontSize={6}/> Kante Out Now <FaCircle fontSize={6}/> </span>
            <span>New Song Out Now <FaCircle fontSize={6}/> Stream Everywhere <FaCircle fontSize={6}/> Kante Out Now <FaCircle fontSize={6}/> </span>
            <span>New Song Out Now <FaCircle fontSize={6}/> Stream Everywhere <FaCircle fontSize={6}/> Kante Out Now <FaCircle fontSize={6}/> </span>
          </div>
        </div>
    </section>
    </>
  )
}

export default HeroComponent
