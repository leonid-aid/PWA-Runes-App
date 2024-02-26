import { isJsxElement } from 'typescript';
import * as S from './App-styles.ts'
import React, { useState } from 'react';
import { RunesArr } from './App.tsx';

import Algizup from './images/runes/Algizup.svg';
import Algizdown from './images/runes/Algizdown.svg';
import Ansuzup from './images/runes/Ansuzup.svg';
import Ansuzdown from './images/runes/Ansuzdown.svg';
import Berkanaup from './images/runes/Berkanaup.svg';
import Berkanadown from './images/runes/Berkanadown.svg';
import Dagaz from './images/runes/Dagaz.svg';
import Ehwazup from './images/runes/Ehwazup.svg';
import Ehwazdown from './images/runes/Ehwazdown.svg';
import Eihwaz from './images/runes/Eihwaz.svg';
import Fehuup from './images/runes/Fehuup.svg';
import Fehudown from './images/runes/Fehudown.svg';
import Gebo from './images/runes/Gebo.svg';
import Hagalaz from './images/runes/Hagalaz.svg';
import Inguz from './images/runes/Inguz.svg';
import Isa from './images/runes/Isa.svg';
import Jera from './images/runes/Jera.svg';
import Kanoup from './images/runes/Kanoup.svg';
import Kanodown from './images/runes/Kanodown.svg';
import Laguzup from './images/runes/Laguzup.svg';
import Laguzdown from './images/runes/Laguzdown.svg';
import Mannazup from './images/runes/Mannazup.svg';
import Mannazdown from './images/runes/Mannazdown.svg';
import Nauthizup from './images/runes/Nauthizup.svg';
import Nauthizdown from './images/runes/Nauthizdown.svg';
import Othilup from './images/runes/Othilup.svg';
import Othildown from './images/runes/Othildown.svg';
import Perthup from './images/runes/Perthup.svg';
import Perthdown from './images/runes/Perthdown.svg';
import Raidoup from './images/runes/Raidoup.svg';
import Raidodown from './images/runes/Raidodown.svg';
import Sowelu from './images/runes/Sowelu.svg';
import Teiwazup from './images/runes/Teiwazup.svg';
import Teiwazdown from './images/runes/Teiwazdown.svg';
import Thurisazup from './images/runes/Thurisazup.svg';
import Thurisazdown from './images/runes/Thurisazdown.svg';
import Uruzup from './images/runes/Uruzup.svg';
import Uruzdown from './images/runes/Uruzdown.svg';
import Wunjoup from './images/runes/Wunjoup.svg';
import Wunjodown from './images/runes/Wunjodown.svg';
/* import Wyrd from './images/runes/Wyrd.svg';  */

import './i18n.ts';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import i18n from 'i18next';

import { useSpring, animated } from '@react-spring/web';


interface RuneInterface {
    text : React.ReactElement;
    name : React.ReactElement;
    What:string;
    dropoble:boolean;
    open:boolean;
    desc:React.ReactElement;
    ids:string;
}

export const RuneImg=[Algizup,Algizdown,Ansuzup,Ansuzdown,Berkanaup,Berkanadown,Dagaz,Ehwazup,Ehwazdown,Eihwaz,Fehuup,Fehudown,Gebo,Hagalaz,Inguz,Isa,Jera,Kanoup,Kanodown,Laguzup,Laguzdown,Mannazup,Mannazdown,Nauthizup,Nauthizdown,Othilup,Othildown,Perthup,Perthdown,Raidoup,Raidodown,Sowelu,Teiwazup,Teiwazdown,Thurisazup,Thurisazdown,Uruzup,Uruzdown,Wunjoup,Wunjodown];

export const getImageByRuneName = (runeName: string) => {
    const index = RunesArr.indexOf(runeName);
    if (index !== -1) {
      return RuneImg[index];
    }
    return null;
};

export const Rune: React.FC<RuneInterface> =({text, name, What, dropoble, open, desc, ids})=>{
    const { t } = useTranslation();
    const [state,setstate] = useState(open);

/*     const dropAnimated = useSpring({
        from: { y:state? -340 : 0 },
        to:{y:state? 0: -340},
        config:{duration:300},
      }) */

    const Change = ()=>{
    if(dropoble==true) 
    setstate(!state)
    }
    return(

        <>
        <S.bigButton2CaptionsWrap>
            <S.bigButton onClick={Change} >
            {state? <S.ImageRuneInButton src={getImageByRuneName(ids)??Algizdown}/>:<h1>{t('Open')}</h1>}
            </S.bigButton>
            {What? <h1>{What}</h1> : null}
            
                
                {state? <h1>{name}</h1>:null}
                </S.bigButton2CaptionsWrap>
                <animated.div>
                {state? desc:null}
                {state? text:null}
                </animated.div>
        </> 
        
    );
};