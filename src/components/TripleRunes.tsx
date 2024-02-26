import React, { useEffect, useState, useRef, useMemo  } from 'react';
import { Rune,RuneImg, getImageByRuneName} from '../Rune.tsx';
import { Trans } from 'react-i18next';
import i18n from 'i18next';
import { Runes } from '../App.tsx';
import { useTranslation } from 'react-i18next';
import * as S from '../App-styles.ts';
import Header from '../Header.tsx';
import {Link} from 'react-router-dom';
import BigBack from '../images/Back40.svg';
import BigExit from '../images/exit40.svg';
export const TripleRunes = () => {
    const { t } = useTranslation();
  
    const [PressBut, SetPressBut]=useState<boolean[]>([true,false,false])
  
    const ButtonsPush1 = ()=>{
      if(PressBut[0]){   
        SetPressBut([false,true,false]) 
      }
    }
    const ButtonsPush2 = ()=>{
      if(PressBut[1]){ 
        SetPressBut([false,false,true]) 
      }
    }
    const ButtonsPush3 = ()=>{
      if(PressBut[2]){    
        SetPressBut([false,false,false])  
      }
    }
   
    return (
      <S.Mainstyled>
        <Header backLink='/MainPage' />
        <div onClick={()=>ButtonsPush1}>
          <Rune ids={Runes[1]} text={<S.TextRuneStyle> <Trans i18nKey={`${Runes[1]}.text`} /></S.TextRuneStyle>} name={<Trans i18nKey={`${Runes[1]}.name`} />} dropoble={PressBut[0]} What={t('WhatHave')} open={false}desc={<S.TextRuneStyle> <Trans i18nKey={`${Runes[1]}.desc`} /></S.TextRuneStyle>} />
        </div>
        <div onClick={()=>ButtonsPush2}>
          <Rune ids={Runes[2]} text={<S.TextRuneStyle><Trans i18nKey={`${Runes[2]}.text`} /></S.TextRuneStyle>} name={<Trans i18nKey={`${Runes[2]}.name`} />} dropoble={PressBut[1]} What={t('WhatDo')} open={false}desc={<S.TextRuneStyle> <Trans i18nKey={`${Runes[2]}.desc`} /></S.TextRuneStyle>} />
        </div>
        <div onClick={()=>ButtonsPush3}>
          <Rune ids={Runes[3]} text={<S.TextRuneStyle><Trans i18nKey={`${Runes[3]}.text`} /></S.TextRuneStyle>} name={<Trans i18nKey={`${Runes[3]}.name`} />} dropoble={PressBut[2]} What={t('WhatBeImFuture')} open={false}desc={<S.TextRuneStyle> <Trans i18nKey={`${Runes[3]}.desc`} /></S.TextRuneStyle>} />
        </div>
        <S.paddingTriple />
        <S.MainSmallButtonWrap>
    <Link to='/MainPage'><S.smallButton> <img src={BigBack}/></S.smallButton></Link>
    <S.smallButton> <img src={BigExit}/></S.smallButton>
    </S.MainSmallButtonWrap>   
      </S.Mainstyled>
    );
  };