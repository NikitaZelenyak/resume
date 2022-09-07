import styled from "styled-components"

export const Section = styled.section`

padding-top:60px ;
padding-bottom: 60px;
height: 60vh;
 @media screen and (max-width: 767px){
          padding-top:40px ;
padding-bottom: 40px;
    
    }
   
  
   
`


export const Wrapper = styled.div`
    padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${(p) => p.theme.bg};
`


export const Title = styled.h1`

text-transform: uppercase;
padding: 0;
margin: 0;


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

export const List = styled.ul`
margin-top: 60px;
    display: flex;
justify-content: space-evenly;
 @media screen and (max-width: 767px){
       flex-direction: column;
       align-items: center;

    } 
`


export const Item = styled.li`
padding: 10px;
&:not(:last-child){
    margin-top: 4px;
}
   list-style: none;
                @media screen and (max-width: 767px){
        font-size: 24px;
         &:not(:last-child){
       margin-bottom: 10px;
       }
    } 
    @media screen and (min-width: 768px){
        font-size: 24px;
    }
    @media screen and (min-width: 1119px){
        font-size: 28px;
    }
   `

   export const Link = styled.a`
 text-decoration: none;
 border-radius: 6px;
    color: ${(p) => p.theme.textColor};
     padding: 10px;
     transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
  background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
 
   &:hover{
        background-color:${(p) => p.theme.hoverColor};
         color: ${(p)=> p.theme.hoverTextColor};
      }
       &:focus{
        background-color:${(p) => p.theme.hoverColor};
         color: ${(p)=> p.theme.hoverTextColor};
      }
 `