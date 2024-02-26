import { useTranslation } from 'react-i18next';
import React, { useEffect, useState, useRef, useMemo  } from 'react';
import * as S from '../App-styles.ts'
import Header from '../Header.tsx';
import OdinMeinImg  from '../images/Odin3401.jpg';
import {Link} from 'react-router-dom';
import i18n from 'i18next';

export const MainPage=()=>{
    const { t } = useTranslation();
   
     return(
     <S.Mainstyled>
       <Header backLink='/' />
         <S.MainImgWrap>
               <S.odinlabel lang={i18n.language}>{t('YourRuneDay')}</S.odinlabel>
               <img src={OdinMeinImg} alt='alt'/>
               </S.MainImgWrap>
         <S.bigButtonWrap>
         <Link to="/FastRuneOpen"><S.bigButton>
         {<h1>{t('Open')}</h1>}
         </S.bigButton></Link>
         </S.bigButtonWrap>
               <S.threeObjdisplay>
               <Link to={`/TripleRunes/`}><S.smallButton><S.h3>{t('WhatHave')}</S.h3></S.smallButton></Link>
               <Link to={`/TripleRunes/`}><S.smallButton><S.h3>{t('WhatDo')}</S.h3></S.smallButton></Link>
               <Link to={`/TripleRunes/`}><S.smallButton><S.h3>{t('WhatBeImFuture')}</S.h3></S.smallButton></Link>
             </S.threeObjdisplay>
     </S.Mainstyled>)
   }