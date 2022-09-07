import styled from "styled-components"
import { keyframes } from 'styled-components';

const breatheAnimation = keyframes`
 0% {
        opacity: 0
    }
    100% {
        opacity: 1;
    }
`

export const Section = styled.section`
display: flex;
justify-content: space-around   ;
padding-top:60px ;
padding-bottom: 60px;
 @media screen and (max-width: 767px){
          padding-top:40px ;
padding-bottom: 40px;
flex-direction: column-reverse;
    
    }

    
   
`

export const Wrapper = styled.div`
    padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${(p) => p.theme.bg};
`
export const Wrap = styled.div`
    
`

export const Img = styled.img`
    display: block;
    border-radius: 8px;
    box-shadow: 35px 35px 14px #ff840021;
      @media screen and (max-width: 767px){
        margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    width: 260px;
    } 
`

export const Title = styled.h1`

text-transform: uppercase;
  mix-blend-mode: screen;
  animation-name: ${breatheAnimation};
animation-duration: 2.5s;
animation-iteration-count: linear forwards;
 text-shadow: 25px 25px 7px ${(p)=> p.theme.hoverColor};
text-align: center;
    color: ${(p) => p.theme.textColor};
    @media screen and (max-width: 767px){
        font-size: 36px;
    }
       @media screen and (min-width: 768px){
        font-size: 44px;
    }
    @media screen and (min-width: 1119px){
       font-size: 56px;
    }
`
export const Text = styled.p`

    text-transform: uppercase;
      mix-blend-mode: screen;
  animation-name: ${breatheAnimation};
animation-duration: 2.5s;
animation-iteration-count: linear forwards;
 text-shadow: 25px 25px 7px ${(p)=> p.theme.hoverColor};
text-align: center;
    color: ${(p) => p.theme.textColor};
      @media screen and (max-width: 767px){
        font-size: 18px;
    } 
    @media screen and (min-width: 768px){
        font-size: 30px;
    }
    @media screen and (min-width: 1119px){
        font-size: 40px;
    }
`
