import { Section,Wrapper,Title,Text,List,Item,SecondTitle,TechList,Tech,Img } from "./ProjectsPage.styled"
import WebStudio from '../../img/WebStudio.png';
import ContactsBook from '../../img/ContactsBook.png';
import IceCream from '../../img/IceCream.png';
import Filmoteka from '../../img/Filmoteka.png';

export const ProjectsPage = () => {
    return (
        <Wrapper>
            <Section>
        <Title>
            Projects
            </Title>
            <List>
                <Item>
                    <a href="https://github.com/NikitaZelenyak/goit-markup-hw-08" target="_blank" rel="noreferrer noopener"><Img width={300}  src={WebStudio} alt="WebStudio" /></a>
                      <SecondTitle>WebStudio</SecondTitle>
                    <Text>WebStudio company site. Neat design, responsible
                        layout.Implemented by me.</Text>
                    <TechList>
                           <Tech>JS</Tech>
                         <Tech>SCSS</Tech>
                           <Tech>Parcel</Tech>
                    </TechList>
                </Item>
                <Item>
                    <a href="https://github.com/DmytroVoitovych/team-storm" target="_blank" rel="noreferrer noopener"><Img src={IceCream} width={300} alt="" /></a>
                       <SecondTitle>IceCream</SecondTitle>
                    <Text>Ice Cream company site. Neat and tasty design,
                        responsible layout. Implemented by a team.</Text>
                    <TechList>
                     <Tech>JS</Tech>
                         <Tech>SCSS</Tech>
                           <Tech>Parcel</Tech>
                    </TechList>
                </Item>
                <Item>
                    <a href="https://github.com/DmytroVoitovych/pr" target="_blank" rel="noreferrer noopener"><Img width={300} src={Filmoteka} alt="" /></a>
                       <SecondTitle>Filmoteka</SecondTitle>
                    <Text>Project about searching movies, and adding favorite
                        movies to a client personal library.Implemented by a team. </Text>
                    <TechList>
                        <Tech>JS</Tech>
                        <Tech>SCSS</Tech>
                        <Tech>Api</Tech>
                        <Tech>Firebase</Tech>
                    </TechList>
                </Item>
                <Item>
                    <a href="https://github.com/NikitaZelenyak/goit-react-hw-08-phonebook" target="_blank" rel="noreferrer noopener"><Img src={ContactsBook} width={300} alt="ContactsBook" /></a>
                    <SecondTitle>ContactsBook</SecondTitle>
                    <Text>Project about storing own contacts in a one place.Implemented by me.
           </Text>

                    <TechList>
                        <Tech>React</Tech>
                        <Tech>Redux</Tech>
                        <Tech>Back-end</Tech>
                        <Tech>Css(StyleComponents)</Tech>
                        <Tech>JS</Tech>
                    </TechList>
                </Item>
            </List>
    </Section></Wrapper>
 
  )
}