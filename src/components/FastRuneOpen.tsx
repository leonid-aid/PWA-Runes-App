import * as S from '../App-styles.ts'
import i18n from 'i18next';
import React, { useEffect, useState, useRef, useMemo  } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate   } from 'react-router-dom';
import Header from '../Header.tsx';
import { Rune,RuneImg, getImageByRuneName} from '../Rune.tsx';
import {Runes} from '../App.tsx';
import BigBack from '../images/Back40.svg';
import BigExit from '../images/exit40.svg';
import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next';

export const FastRuneOpen=()=>{
    const { t } = useTranslation();
 
   return(
   <S.Mainstyled>
   <Header backLink='/MainPage' />
   <Rune ids={Runes[0]} text={<S.TextRuneStyle> <Trans i18nKey={`${Runes[0]}.text`} /></S.TextRuneStyle>} name={<Trans i18nKey={`${Runes[0]}.name`} />} dropoble={false} What='' open={true} desc={<S.TextRuneStyle> <Trans i18nKey={`${Runes[0]}.desc`} /></S.TextRuneStyle>}/>
   <S.MainSmallButtonWrap>
   <Link to='/MainPage'><S.smallButton> <img src={BigBack}/></S.smallButton></Link>
   <S.smallButton> <img src={BigExit}/></S.smallButton>
   </S.MainSmallButtonWrap>   
   </S.Mainstyled>) 
 }