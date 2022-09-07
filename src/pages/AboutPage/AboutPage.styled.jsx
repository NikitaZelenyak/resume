import styled from "styled-components"

export const Section = styled.section`

padding-top:60px ;
padding-bottom: 60px;
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
export const Text = styled.p`
padding: 0;
margin: 0;
text-align: center;
color: white;
   color: ${(p) => p.theme.textColor};
      @media screen and (max-width: 767px){
        font-size: 16px;
    } 
    @media screen and (min-width: 768px){
        font-size: 24px;
    }
    @media screen and (min-width: 1119px){
        font-size: 30px;
    }`
export const TextWrap = styled.div`
margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid ${(p) => p.theme.hoverColor};
    border-radius: 4px;
        
         @media screen and (max-width: 767px){
            padding: 8px;
min-width: 200px;
max-width: 700px;
    } 
    @media screen and (min-width: 768px){
        max-width:700px ;
        padding: 14px;
    }
    @media screen and (min-width: 1119px){
       width: 900px;
       padding: 20px;
    }
    `
export const List = styled.ul`
margin-top: 20px;
    display: flex;
justify-content: space-evenly;
`
    export const TechSkills =styled.li`
     color: ${(p) => p.theme.textColor};
     list-style: none;
         @media screen and (max-width: 767px){
        font-size: 16px;
    } 
    @media screen and (min-width: 768px){
        font-size: 24px;
    }
    @media screen and (min-width: 1119px){
        font-size: 30px;
    }
     

    `
    export const SoftSkills = styled.li`
         color: ${(p) => p.theme.textColor};
         list-style: none;
             @media screen and (max-width: 767px){
        font-size: 16px;
    } 
    @media screen and (min-width: 768px){
        font-size: 24px;
    }
    @media screen and (min-width: 1119px){
        font-size: 30px;
    }
    `
export const Item = styled.li`
&:not(:last-child){
    margin-top: 4px;
}
   list-style: none;
                @media screen and (max-width: 767px){
        font-size: 12px;
    } 
    @media screen and (min-width: 768px){
        font-size: 18px;
    }
    @media screen and (min-width: 1119px){
        font-size: 24px;
    }
   `
export const Btn = styled.button`
display: block;
margin-left: auto;
margin-right: auto;
margin-top: 20px;
font-size: 24px;
border: 1px solid ${(p) => p.theme.hoverColor};
border-radius: 6px;
color: ${(p)=> p.theme.textColor};
cursor: pointer;
 transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
  background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
 
   background-color: transparent;
   padding: 10px;
   &:hover{
        background-color:${(p) => p.theme.hoverColor};
         color: ${(p)=> p.theme.hoverTextColor};
      }
       &:focus{
        background-color:${(p) => p.theme.hoverColor};
         color: ${(p)=> p.theme.hoverTextColor};
      }
  
`


export const Link = styled.a`
 text-decoration: none;
 `