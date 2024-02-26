import { createContext, useContext, useState } from 'react';
import { Howl } from 'howler';
const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);

  const tracks=['/tr5.MP3','/tr2.MP3','/tr3.MP3','/tr4.MP3','/tr5.MP3','/tr6.MP3'];



  const createSound = () => {
    const randomTrackIndex = Math.floor(Math.random() * tracks.length);
    const trackSrc = tracks[randomTrackIndex];
    return new Howl({
      src: [trackSrc],
      html5: false,
      volume: 0.2,
      loop: true,
    });
  };

  const play = () => {
    if (!sound) {
      const newSound = createSound();
      setSound(newSound);
      newSound.play();
    } else {
      sound.play();
    }
  };

  const pause = () => {
    if (sound) {
      sound.pause();
    }
  };

  const stop = () => {
    if (sound) {
      sound.stop();
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, setIsPlaying, play, pause, stop }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudioContext = () => useContext(AudioContext);
