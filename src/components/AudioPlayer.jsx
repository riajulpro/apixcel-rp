"use client";

import { useState, useRef, useEffect } from "react";
import { PiPlayCircleThin, PiPauseCircle } from "react-icons/pi";

const AudioPlayer = ({ title, preview }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const updateDuration = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="h-full flex flex-col justify-between">
      <h3 className="text-xs md:text-sm">{title}</h3>

      <div className="self-center">
        <audio ref={audioRef} src={preview}></audio>
        <button onClick={togglePlay}>
          {isPlaying ? (
            <PiPauseCircle className="h-16 w-16" />
          ) : (
            <PiPlayCircleThin className="h-16 w-16" />
          )}
        </button>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <div>{formatTime(currentTime)}</div>
          <div>{formatTime(duration)}</div>
        </div>

        <div className="w-full h-[2px] bg-gray-200 rounded mt-2">
          <div
            className="h-[2px] bg-white rounded-[50%]"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
