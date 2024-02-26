import { Howl } from 'howler';
import React, { useEffect, useState, useRef, useMemo  } from 'react';
import { useTranslation } from 'react-i18next';
import * as S from '../App-styles.ts';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate   } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { Rune,RuneImg, getImageByRuneName} from '../Rune.tsx';

export const StartPage = () => {
    const [audioStartPage] = useState(() => new Howl({
      src: ['/start.MP3'],
      volume: 0.9,
      loop: false,
    }));
  
    const navigate = useNavigate();
    const [timer, setTimer] = useState<number>(0);
  
    useEffect(() => {
      const playAudio = () => {
        audioStartPage.play();
      };
    
      playAudio();
    
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    
      return () => {
        clearInterval(intervalId);
      };
    }, [audioStartPage]);
  
    useEffect(() => {
      if (timer >= 4.8) {
        navigate('/MainPage');
      }
    }, [timer, navigate]);
  
    return (
      <S.Mainstyled>
        <S.StartPageDisplay>
          <AnimatedButton index={1}><S.smallButton><S.ImageRuneInButton src={RuneImg[10]}/></S.smallButton></AnimatedButton>
          <AnimatedButton index={2}><S.smallButton><S.ImageRuneInButton src={RuneImg[36]}/></S.smallButton></AnimatedButton>
          <AnimatedButton index={3}><S.smallButton><S.ImageRuneInButton src={RuneImg[34]}/></S.smallButton></AnimatedButton>
          <AnimatedButton index={4}><S.smallButton><S.ImageRuneInButton src={RuneImg[2]}/></S.smallButton></AnimatedButton>
          <AnimatedButton index={5}><S.smallButton><S.ImageRuneInButton src={RuneImg[29]}/></S.smallButton></AnimatedButton>
          <AnimatedButton index={6}><S.smallButton><S.ImageRuneInButton src={RuneImg[17]}/></S.smallButton></AnimatedButton>
        </S.StartPageDisplay>
      </S.Mainstyled>
    );
  };




  const AnimatedButton: React.FC<{ index: number, children:JSX.Element}> = ({ index,children }) => {



    const springProps = useSpring({
      opacity: 1,
      transform: 'translateY(0)',
      from: { opacity: 0 , transform:`translateY(${500 - index * 50}px)` },
      delay: index * 700, 
    });
    return (
      <animated.div style={springProps}>
        {children}
      </animated.div>
    );
    };