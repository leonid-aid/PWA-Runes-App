import React, { useEffect, useState, useRef, useMemo  } from 'react';
import * as S from './App-styles.ts'
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate   } from 'react-router-dom';
import './i18n.ts';
import { AudioProvider } from './App-context.js';
import { StartPage } from './components/StartPage.tsx';
import {FastRuneOpen} from './components/FastRuneOpen.tsx';
import {LangPage} from './components/LangPage.tsx';
import {MainPage} from './components/MainPage.tsx';
import {TripleRunes} from './components/TripleRunes.tsx';
export const RunesArr = ['Algizup','Algizdown','Ansuzup','Ansuzdown','Berkanaup','Berkanadown','Dagaz','Ehwazup','Ehwazdown','Eihwaz','Fehuup','Fehudown','Gebo','Hagalaz','Inguz','Isa','Jera','Kanoup','Kanodown','Laguzup','Laguzdown','Mannazup','Mannazdown','Nauthizup','Nauthizdown','Othilup','Othildown','Perthup','Perthdown','Raidoup','Raidodown','Sowelu','Teiwazup','Teiwazdown','Thurisazup','Thurisazdown','Uruzup','Uruzdown','Wunjoup','Wunjodown'];

const ChooseRunes = () => {
 
  const shuffled = [...RunesArr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0,4);
};

export const Runes=ChooseRunes();

const App: React.FC = () => {

  return (

    <BrowserRouter>
    <S.Wrapper>

      <AudioProvider>
        <Routes>      
          <Route path="/StartPage" element={<StartPage />} />
          <Route path="/" element={<LangPage />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/FastRuneOpen" element={<FastRuneOpen />} />
          <Route path="/TripleRunes" element={<TripleRunes/>} /> 
        </Routes>
      </AudioProvider>

    </S.Wrapper>
    </BrowserRouter>

  );
};

export default App;
