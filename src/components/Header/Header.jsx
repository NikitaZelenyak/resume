
import { HeaderStyled,Nav,LinkStyled,Wrapper } from "./Header.styled"

export const Header = () => {
    return (
   
        <Wrapper>
       
            <HeaderStyled>
         
                <Nav>

                    <LinkStyled to='/'>Home</LinkStyled>
                    <LinkStyled to='/about'>About</LinkStyled>
                    <LinkStyled to='/projects'>Projects</LinkStyled>
                    <LinkStyled to='/contacts'>Contacts</LinkStyled>

         
                </Nav>
         
            </HeaderStyled>
        
        </Wrapper>
    )
}