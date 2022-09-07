import styled from "styled-components"

export const FooterStyled = styled.footer`

padding-top:16px ;
padding-bottom: 16px;
@media screen and (max-width: 767px){
   
        padding-top:10px ;
        padding-bottom: 10px;

      }
`

export const Wrapper = styled.div`
    padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${(p) => p.theme.bg};

`

export const Text = styled.h1`

    text-transform: uppercase;
text-align: center;
    color: ${(p) => p.theme.textColor};
      @media screen and (max-width: 767px){
        font-size: 12px;
    } 
    @media screen and (min-width: 768px){
        font-size: 18px;
    }
    @media screen and (min-width: 1119px){
        font-size: 22px;
    }
`
