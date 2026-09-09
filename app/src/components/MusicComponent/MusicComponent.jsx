import { assets } from '../../assets/assets'
import { tracks } from '../../assets/music/music'
import './MusicComponent.css'
import {Link} from 'react-router-dom'
import {FaMusic, FaCompactDisc, FaPlay, FaSpotify, FaApple, FaYoutube, FaDeezer} from 'react-icons/fa'
import { useEffect, useState } from 'react'

const MusicComponent = () => {
  const [active,setActive]=useState(true);
  const [id,setId]=useState()
  const [media,setMedia]=useState("")

  
  useEffect(()=>{
  },[id,active])
  return (
    <>
    <div id='music' className="music-component border-gray-200">
      {/*-----------------------------------*/}
       <div className="music-component-header">
          <div className="music-component-header-left">
            <FaCompactDisc size={40} className='animate-[spin_5s_linear_infinite] '/>
            <h2>MUSIC <span>CATALOGUE</span></h2>
          </div>
          <div className="music-component-header-right">
            <FaMusic size={40} color='#d1d5db' className='animate-bounce'/>
          </div>
       </div>
       {/*-----------------------------------*/}
       <div className="music-component-mid">
          <div className="music-component-mid-left">
            <div className="music-component-mid-left-release">
              <div className="music-component-mid-left-release-top">
                <h4 className='latest'>LATEST RELEASE</h4>
                <h2 className='title drop-shadow-lg'>KANTE</h2>
                <h4 className='artist drop-shadow-md text-white'>Original Zula</h4>
              </div>
              <div className="music-component-mid-left-release-bottom">
                <h4><FaPlay  fontSize={18} fontFamily='Inter'/> PLAY NOW</h4>
              </div>
            </div>
            <div className="music-component-mid-left-img">
              <img src={assets.zula} alt="ZulaPic" />
            </div>
          </div>
          <div className="music-component-mid-right">
            <div className="music-component-mid-right-header">
              <h4 className='text-gray-600'>TOP MUSIC TRACKS</h4>
            </div>
            <div className="music-component-mid-right-tracks">
              {
                tracks.map((track)=>(
                  <div key={track._id} onMouseOver={()=>(setActive(!active),setId(track._id))} onMouseOut={()=>(setActive(!active),setId(""))} className="music-component-mid-right-tracks-track border-gray-100 hover:bg-gray-50 transition-colors duration-300 rounded-xl cursor-pointer">
                    <div style={{backgroundColor:track._id===id?"#daea49":""}} className="music-component-mid-right-tracks-track-track-left bg-gray-200 rounded-3xl">
                      <FaPlay style={{color: track._id===id?"black":""}}  fontSize={14} className='play-icon' />
                    </div>
                    <div className="music-component-mid-right-tracks-track-track-right">
                      <h3 className='group-hover/track:text-gray-600 transition-colors' >{track.title}</h3>
                      <h5 className='text-gray-500'>{track.artist}</h5>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="music-component-mid-right-links rounded-xl shadow-lg group">
              <div className="music-component-mid-right-links-left">
                <h3>LISTEN MORE ON</h3>
              </div>
              <div className="music-component-mid-right-links-right">
                <div key={"spotify"} onMouseOver={()=>(setMedia("spotify"))} onMouseOut={()=>(setMedia(""))} style={{backgroundColor:media==="spotify"?"#FFF":""}} className="music-component-mid-right-links-right-icon rounded-3xl border-gray-600">
                  <Link to={"https://youtube.com/@originalzula?si=Yh_Qrbr4HpzWMrOo"} target='_blank' referrerPolicy='no-referrer'>
                    <FaSpotify style={{color:media==="spotify"?"#000":""}} className='music-icon' fontSize={22}/>
                  </Link>
                </div>
                <div key={"apple"} onMouseOver={()=>(setMedia("apple"))} onMouseOut={()=>(setMedia(""))} style={{backgroundColor:media==="apple"?"#FFF":""}} className="music-component-mid-right-links-right-icon rounded-3xl border-gray-600">
                  <Link to={"https://youtube.com/@originalzula?si=Yh_Qrbr4HpzWMrOo"} target='_blank' referrerPolicy='no-referrer'>
                    <FaApple style={{color:media==="apple"?"#000":""}} className='music-icon' fontSize={22}/>
                  </Link>
                </div>
                <div key={"youtube"} onMouseOver={()=>(setMedia("youtube"))} onMouseOut={()=>(setMedia(""))} style={{backgroundColor:media==="youtube"?"#FFF":""}} className="music-component-mid-right-links-right-icon rounded-3xl border-gray-600">
                  <Link to={"https://youtube.com/@originalzula?si=Yh_Qrbr4HpzWMrOo"} target='_blank' referrerPolicy='no-referrer'>
                    <FaYoutube style={{color:media==="youtube"?"#000":""}} className='music-icon' fontSize={22}/>
                  </Link>
                </div>
                <div key={"deezer"} onMouseOver={()=>(setMedia("dezeer"))} onMouseOut={()=>(setMedia(""))} style={{backgroundColor:media==="dezeer"?"#FFF":""}} className="music-component-mid-right-links-right-icon rounded-3xl border-gray-600">
                  <Link to={"https://youtube.com/@originalzula?si=Yh_Qrbr4HpzWMrOo"} target='_blank' referrerPolicy='no-referrer'>
                   <FaDeezer style={{color:media==="dezeer"?"#000":""}} className='music-icon' fontSize={22}/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
       </div>
    </div>
    </>
  )
}

export default MusicComponent