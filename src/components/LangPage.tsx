import * as S from '../App-styles.ts'
import i18n from 'i18next';
import React, { useEffect, useState, useRef, useMemo  } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate   } from 'react-router-dom';

import RuButImage from "../images/flags/Lg-Ru.png";
import EngButImage from "../images/flags/Lg-Eng.png"; 
import FranceButImage from "../images/flags/Lg-Fr.png"; 
import DeutchButImage from "../images/flags/Lg-De.png"; 

export const LangPage=()=>{

    const navigate = useNavigate();
  
    const changeLanguage = (lng: string) => {
      i18n.changeLanguage(lng);
       localStorage.setItem('language', lng); 
    };
  /* 
  
     useEffect(() => {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage) {
        i18n.changeLanguage(savedLanguage);
        navigate('/StartPage'); // Перенаправляем пользователя на StartPage
      }
    }, [i18n, navigate]);  */
  
  
    return(
      <S.StartLangPage>
      <S.twoObjdisplay>
      <S.LangButtonWrap>
      <Link to={'/StartPage'}><S.Languagebutton dlang={RuButImage} onClick={()=>changeLanguage('ru')} ></S.Languagebutton></Link>
      <S.SupText>RU</S.SupText>
      </S.LangButtonWrap>
      <S.LangButtonWrap>
      <Link to={'/StartPage'}><S.Languagebutton dlang={EngButImage} onClick={()=>changeLanguage('en')}> </S.Languagebutton></Link>
      <S.SupText>ENG</S.SupText>
      </S.LangButtonWrap>
      <S.LangButtonWrap>
      <Link to={'/StartPage'}><S.Languagebutton dlang={FranceButImage} onClick={()=>changeLanguage('fr')} ></S.Languagebutton></Link>
      <S.SupText>FR</S.SupText>
      </S.LangButtonWrap>
      <S.LangButtonWrap>
      <Link to={'/StartPage'}><S.Languagebutton dlang={DeutchButImage} onClick={()=>changeLanguage('de')}> </S.Languagebutton></Link>
      <S.SupText>DE</S.SupText>
      </S.LangButtonWrap>
    </S.twoObjdisplay>
            </S.StartLangPage>
    )
  
  }