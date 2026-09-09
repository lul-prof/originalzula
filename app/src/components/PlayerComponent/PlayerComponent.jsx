/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/refs */
import { useEffect, useRef, useState } from "react";
import "./PlayerComponent.css";
import { Slider } from "@mui/material";
import {
  FaList,
  FaForward,
  FaBackward,
  FaTimes,
  FaPlayCircle,
  FaPauseCircle,
  FaChartBar,
} from "react-icons/fa";
import { tracklist, tracks } from "../../assets/music/music";
import { assets } from "../../assets/assets";

const PlayerComponent = ({title,artist,idx}) => {
  const songs = Object.values(tracklist);
  const player = useRef(null);
  const progressBar = useRef();
  const [index, setIndex] = useState(idx);
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(50);
  const [mute, setMute] = useState(false);
  const [currentSong, setCurrentSong] = useState(songs[index] || songs[0] );

  

 

  useEffect(() => {
    if (isPlaying) {
      setInterval(() => {
        const duration = Math.floor(player?.current?.duration);
        const elapsedTime = Math.floor(player?.current?.currentTime);

        setDuration(duration);
        setElapsed(elapsedTime);

        if (elapsedTime === duration) {
          setIsPlaying(false);
          player.current.stop();
        }
      }, 100);
    }

    if (player) {
      player.current.volume = volume / 100;
    }
  }, [
    player?.current?.loadedmetadata,
    player?.current?.readyState,
    isPlaying,
    volume,
  ]);

  const calculateTime = (value) => {
    const minutes =
      Math.floor(value / 60) < 10
        ? `0${Math.floor(value / 60)}`
        : Math.floor(value / 60);

    const seconds =
      Math.floor(value % 60) < 10
        ? `0${Math.floor(value % 60)}`
        : Math.floor(value % 60);

    return `${minutes}:${seconds}`;
  };

  const togglePausePlay = () => {
    const prevVal = isPlaying;
    setIsPlaying(!prevVal);

    if (!prevVal) {
      player.current.play();
    } else {
      player.current.pause();
    }
  };

  const togglePrev = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
      player.current.src = songs[index - 1];
      player.current.play();
    }
  };

  const toggleNext = () => {
    if (index >= songs.length - 1) {
      setIndex(0);
      player.current.src = songs[0];
      player.current.play();
    } else {
      setIndex((prev) => prev + 1);
      player.current.src = songs[index + 1];
      player.current.play();
    }
  };

  const handleSliderChange = (e, newValue) => {
    if (player.current) {
      player.current.currentTime = newValue;
      setElapsed(newValue);
    }
  };

  return (
    <>
      <div className="player" id="player">
        <audio src={currentSong} ref={player} muted={mute} />
        <div className="player-top">
          <div className="player-top-details">
            <div className="player-top-details-image">
              <img src={assets.zula} alt="artistImage" />
            </div>
            <div className="player-top-details-title">
              <h4 className="truncate">{title?title:"Kante"}</h4>
              <p className="text-gray-400 text-sm truncate ">{artist?artist:"Original Zula"}</p>
            </div>
          </div>
          <div className="player-top-ctrls">
            <div className="player-top-ctrls-left">
              <FaBackward onClick={togglePrev} id="icon" />
            </div>
            <div className="player-top-ctrls-mid">
              {!isPlaying ? (
                <div className="player-top-ctrls-play">
                  <FaPlayCircle onClick={togglePausePlay} id="icon" size={40} />
                </div>
              ) : (
                <div className="player-top-ctrls-pause">
                  <FaPauseCircle
                    className="hover:text-#daea49"
                    onClick={togglePausePlay}
                    id="icon"
                    size={40}
                  />
                </div>
              )}
            </div>
            <div className="player-top-ctrls-right">
              <FaForward onClick={toggleNext} id="icon" />
            </div>
          </div>
          <div className="player-top-right">
            <div className="player-top-right-list">
              <FaList
                id="icon"
                onClick={() =>
                  (document.getElementById("playlist").style.display = "flex")
                }
              />
            </div>
            <div className="player-top-right-close">
              <FaTimes
                id="icon"
                onClick={() =>
                  (document.getElementById("player").style.display = "none")
                }
              />
            </div>
          </div>
        </div>
        <div className="player-bottom">
          <div className="player-bottom-volume">
            <Slider
              min={0}
              value={volume}
              max={100}
              onChange={(e) => setVolume(e.target.value)}
            />
          </div>
          <div className="player-bottom-progress">
            <div className="player-bottom-progress-left">
              <p className="text-sm font-sans tracking-tight leading-1.5">
                {calculateTime(elapsed)}
              </p>
            </div>
            <div className="player-bottom-progress-mid">
              <Slider
                sx={{ color: "#ffffff" }}
                value={elapsed}
                max={duration}
                onChange={handleSliderChange}
                ref={progressBar}
              />
            </div>
            <div className="player-bottom-progress-right">
              <p className="text-sm font-sans tracking-tight leading-1.5">
                {calculateTime(duration - elapsed)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="playlist" className="playlist rounded-lg">
        <div className="playlist-top">
          <h3>UP NEXT</h3>
          <FaTimes
            color="gray"
            fontWeight={500}
            onClick={() =>
              (document.getElementById("playlist").style.display = "none")
            }
            id="icon"
          />
        </div>
        <div className="playlist-tracks">
          {tracks.map((trk) => (
            <div
              key={trk._id}
              
              style={{
                background:
                  trk.track === currentSong
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(255,255,255,0.05)",
              }}
              className="playlist-track">
              <div className="track-left">
                <div className="track-left-image">
                  <img src={trk.thumbnail} alt="thumbnail" />
                </div>
                <div className="track-left-details">
                  <h3
                    style={{
                      color: trk.track === currentSong ? "#daea49" : "#FFF",
                    }}
                    className="uppercase"
                  >
                    {trk.title}
                  </h3>
                  <p className="text-xs text-gray-500 truncate font-sans">
                    {trk.artist}
                  </p>
                </div>
              </div>
              <div className="track-right">
                {trk.track === currentSong ? (
                  <FaChartBar color="#daea49" className="animate-pulse" />
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PlayerComponent;
