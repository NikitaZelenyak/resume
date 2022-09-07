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
margin: 0;
padding: 0;
margin-top: 20px;
    color: ${(p) => p.theme.textColor};
      @media screen and (max-width: 767px){
        font-size: 8px;
    } 
    @media screen and (min-width: 768px){
        font-size: 10px;
    }
    @media screen and (min-width: 1119px){
        font-size: 16px;
    }`

export const List = styled.ul`
    padding: 0;
       
  
    @media screen and (min-width: 768px){
 display: flex;
        align-items: center;
justify-content: space-around;
        flex-wrap: wrap;
    }
  

    `

export const Item = styled.li`
    padding: 20px;
        width: 305px;
        height: 350px;
        border: 1px solid ${(p) => p.theme.hoverColor};
        border-radius: 6px;
        
            @media screen and (max-width: 767px){
                &:not(:first-child){
                    margin-top: 10px;
                }

                margin-left: auto;

                margin-right: auto;
    } 
       @media screen and (min-width: 768px){
        margin-top: 10px;
    }
     @media screen and (min-width: 1119px){
        margin-top: 0px;
    }


    `

export const SecondTitle = styled.h2`
    text-transform: uppercase;
padding: 0;
margin: 0;


margin-top: 20px;

text-align: center;
    color: ${(p) => p.theme.textColor};
    @media screen and (max-width: 767px){
        font-size: 18px;
    }
       @media screen and (min-width: 768px){
        font-size: 24px;
    }
    @media screen and (min-width: 1119px){
       font-size: 32px;
    }
`
export const TechList = styled.ul`
margin-top: 20px;
padding: 0;
    display: flex;
    align-items: center;
justify-content: space-between;
    flex-wrap: wrap;
`
export const Tech = styled.li`
list-style: none;
        color: ${(p) => p.theme.textColor};
      @media screen and (max-width: 767px){
        font-size: 8px;
    } 
    @media screen and (min-width: 768px){
        font-size: 10px;
    }
    @media screen and (min-width: 1119px){
        font-size: 16px;
    }

`
export const Img = styled.img`
    display: block;
    margin-top: 20px;
`