// Header.jsx
import React, { useEffect } from 'react';
import * as S from './/App-styles.ts';
import { Link } from 'react-router-dom';
import exit24 from './images/exit24.svg';
import SoundOnIcon from './images/icon_sound_on_24.svg';
import SoundOffIcon from './images/icon_sound_off_24.svg';
import { useAudioContext } from './App-context.js';

const Header = ({ backLink }) => {
  const { isPlaying, setIsPlaying, play, pause } = useAudioContext();



  useEffect(()=>{setIsPlaying(true)},[]);

  
  useEffect(() => {
    
    

    if (isPlaying) {
      play();
    } else {
      pause();
    }

    return () => {
      pause();
    };
  }, [isPlaying, play, pause]);

  const togglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return ( 
      <S.Header>
        <Link to={backLink}>
          <img src={exit24} alt="Exit" />
        </Link>
        <img src={isPlaying? SoundOnIcon:SoundOffIcon } alt="Sound" onClick={togglePlay} style={{cursor:'pointer'}} />
      </S.Header>
  );
};

export default Header;
