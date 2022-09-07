import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const Wrapper = styled.div`
    padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${(p) => p.theme.bg};
  border-bottom: 1px solid #ff8400;   
`

export const HeaderStyled = styled.header`
padding-top:16px ;
padding-bottom: 16px;
@media screen and (max-width: 767px){
   
        padding-top:10px ;
        padding-bottom: 10px;

      }
`
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const LinkStyled = styled(NavLink)`
padding: 12px;
    font-size: 24px;
    color: ${(p) => p.theme.textColor};
      text-decoration: none;
      border-radius: 6px;
      
      @media screen and (max-width: 767px){
   
        font-size: 12px;
      }
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
      &.active{
         background-color:${(p) => p.theme.activeLink};
         color: ${(p)=> p.theme.hoverTextColor};
      }

`