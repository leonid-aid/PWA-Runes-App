import styled from "styled-components";
import svgBack from "./images/backgroundhoney.png";
import smallButtonImage from "./images/кнопка.png";
import bigButtonImage from "./images/кнопка2.png";

interface ButtonLangProps{
    dlang:React.ReactNode;
}


export const h3 = styled.span`
font-size: 17px;
font-weight: 700; 
color: black; 
`

export const odinlabel= styled.p`
position:absolute;
bottom:${({ lang }) => (lang === 'fr' || lang === 'de' ? '400px' : '390px')};;
font-size: ${({ lang }) => (lang === 'fr' || lang === 'de' ? '19px' : '26px')};
font-weight: 700;
`

export const Languagebutton = styled.button<ButtonLangProps>`
border:none;
border-radius: 50%;
width:90px;
height:90px;
background-image:${(props) => `url(${props.dlang})`};
background-size: cover; 
background-position: center; 
`

export const LangButtonWrap = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

export const Header = styled.div`
display: flex;
justify-content: space-between;
margin-top: 16px;
margin-bottom: 16px;
margin-left: 14px;
margin-right: 20px;
`

export const Mainstyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 360px;
    background: url(${svgBack});
    `
export const StartLangPage = styled.div`
    display: flex;
    flex-direction: column;
    width: 360px;
    background: #FFF8E1;;
`
export const ImageRuneInButton = styled.img`
margin-top:10px;
`

export const Wrapper = styled.div`
    margin-left: 14px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    `

export const smallButton = styled.button`
    border-radius: 50%;
    width:90px;
    height:90px;
    background-image:url(${smallButtonImage});
    background-size: cover; 
    background-position: center; 

`

export const bigButton = styled.button`
    margin-top: 25px;
/*     margin-bottom: 35px; */
    border-radius: 50%;
    width:140px;
    height:140px;
    background-image:url(${bigButtonImage});
    background-size: cover; 
    background-position: center; 

`
export const bigButtonWrap = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;

`
export const MainSmallButtonWrap = styled.div`
    display: flex;

    justify-content: space-evenly;
    margin-top: 28px;
    margin-bottom: 6px;
`

export const bigButton2CaptionsWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const StartPageDisplay = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    padding-top:10px;
    padding-bottom:30px;
    & button{
        margin-top:20px;
    }
`
export const paddingTriple = styled.div`
    padding-bottom:30px;
`

export const threeObjdisplay = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 90px;
    margin-left: 14px;
    margin-right: 20px;
    margin-top: 35px;
`
export const twoObjdisplay = styled.div`
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items:center;
    row-gap:15px;
    `

export const MainImgWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 14px;
    margin-right: 20px;
`

export const TextRuneStyle = styled.div`
color: #000;
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const SupText = styled.div`
padding-top:5px;
font-family: Sans-serif;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
`


