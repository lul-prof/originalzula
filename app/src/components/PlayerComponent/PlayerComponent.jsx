/* eslint-disable react-hooks/refs */
import { useEffect, useRef, useState } from 'react'
import './PlayerComponent.css'
import {Slider} from '@mui/material'
import {FaVolumeDown,FaVolumeUp,FaVolumeMute,FaList,FaPlay,FaPause,FaForward,FaBackward,FaFastForward,FaFastBackward} from 'react-icons/fa'
import { tracklist } from '../../assets/music/music'
 
 function VolumeBtn ({mute,volume,setMute}) {
        return mute 
            ? <FaVolumeMute onClick={() => setMute(!mute)} size={22} className='icon'/>
            : volume === 0 ? <FaVolumeMute onClick={() => setMute(!mute)} size={22} className='icon'/>
            : volume <= 20 ? <FaVolumeDown onClick={() => setMute(!mute)} size={22} className='icon'/>
            : volume <= 75 ? <FaVolumeDown onClick={() => setMute(!mute)} size={22} className='icon'/>
            : <FaVolumeUp onClick={() => setMute(!mute)} size={22}/>
    }

const PlayerComponent = () => {
    const songs=[tracklist.danger,tracklist.kante,tracklist.real_buda,tracklist.top_skanka];
    const player=useRef()
    const progressBar=useRef()

    const [index, setIndex] = useState(1);
    const [isPlaying, setIsPlaying] = useState(false);
    const [elapsed, setElapsed] = useState(0)
    const [duration, setDuration] = useState(0)
    const [volume, setVolume] = useState(30)
    const [mute, setMute] = useState(false)
    const [currentSong] = useState(songs[index])

    useEffect(() => {
        
        if(isPlaying) {
            setInterval(() => {
                const duration = Math.floor(player?.current?.duration)
                const elapsedTime = Math.floor(player?.current?.currentTime)

                setDuration(duration)
                setElapsed(elapsedTime)

                if(elapsedTime === duration){
                    setIsPlaying(false)
                    player.current.stop()
                }
            }, 100);
        }

        if(player){
            player.current.volume = volume / 100
        }

    },[
        player?.current?.loadedmetadata, 
        player?.current?.readyState, 
        isPlaying, volume 
    ])

    const calculateTime = (value) => {
        const minutes = Math.floor(value / 60) < 10 ? `0${Math.floor(value / 60)}` : Math.floor(value / 60)

        const seconds = Math.floor(value % 60) < 10 ? `0${Math.floor(value % 60)}` : Math.floor(value % 60)

        return `${minutes}:${seconds}`
    }


    const togglePausePlay = () => {
        const prevVal = isPlaying;
        setIsPlaying(!prevVal)

        if(!prevVal){
            player.current.play()
        } else {
            player.current.pause()
        }
    }

    const handleForward = () => {
        player.current.currentTime += 10
    }

    const handleReverse = () => {
        player.current.currentTime -= 10
    }

    const togglePrev = () =>{
        if(index > 0){
            setIndex(prev => prev - 1)
            player.current.src = songs[index - 1]
            player.current.play()
        }
    }

    const toggleNext = () =>{
        //player.current.stop()
        if(index >= songs.length - 1){
            setIndex(0)
            player.current.src = songs[0]
            player.current.play()
        } else {
            setIndex(prev => prev + 1)
            player.current.src = songs[index + 1]
            player.current.play()
        }
    }

  return (
    <>
    <div className="player">
        <audio src={currentSong} ref={player} muted={mute}/>
        <div className="player-top">
            <div className="player-top-left">
                <div className="player-top-left-item">
                    <VolumeBtn mute={mute} volume={volume} setMute={setMute} />
                </div>
                <div className="player-top-left-item">
                    <Slider min={0} value={volume} max={100} onChange={(e)=>(setVolume(e.target.value))} sx={{color:"#E9E9E9",width:"100px"}}/>
                </div>
            </div>
            <div className="player-top-mid">
                <div className="player-top-mid-item">
                    <FaBackward onClick={togglePrev} size={22} className='icon'/>
                </div>
                <div className="player-top-mid-item">
                    <FaFastBackward onClick={handleReverse} size={22} className='icon'/>
                </div>
                {
                    !isPlaying
                    ?
                     <div className="player-top-mid-item">
                        <FaPlay onClick={togglePausePlay} size={22} className='icon'/>
                    </div>
                    :
                     <div className="player-top-mid-item">
                        <FaPause onClick={togglePausePlay} size={22} className='icon'/>
                    </div>

                }
                <div className="player-top-mid-item">
                    <FaFastForward onClick={handleForward} size={22} className='icon'/>
                </div>
                <div className="player-top-mid-item">
                    <FaForward onClick={toggleNext} size={22} className='icon'/>
                </div>
            </div>
            <div className="player-top-right">
                <FaList size={22} className='icon'/>
            </div>
        </div>
        <div className="player-mid">
            <p>{calculateTime(elapsed)}</p>
            <Slider value={elapsed} max={duration} sx={{color:"#E9E9E9"}} ref={progressBar}/>
            <p>{calculateTime(duration - elapsed)}</p>
        </div>
    </div>
    </>
  )
}

export default PlayerComponent