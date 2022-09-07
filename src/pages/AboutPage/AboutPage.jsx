import { Section,Wrapper,Title,Text,TextWrap,TechSkills,SoftSkills,List,Item,Btn,Link } from "./AboutPage.styled"
import Resume from"../../download/resume.pdf"
export const AboutPage = () => {
    return (
        <Wrapper>
        <Section>
            <Title>About me</Title>
           <TextWrap><Text>Hello, my name is Nikita. I am from Ukraine.I would describe myself as a competent and positive person who wants to have a long and successful career in this industry.  I am  web developer who is in love with programming,i enjoy learning about new technologies and have passion for web development. </Text></TextWrap> 
            <List>
                <TechSkills>Tech Skills:
                    <ul>
                        <Item>HTML/CSS/SASS</Item>
                        <Item>JavaScript</Item>
                        <Item>React</Item>
                        <Item>Redux</Item>
                        <Item>Git/Git Hub</Item>
                        <Item>WebPack</Item>
                         <Item>Parcel</Item>
                    </ul>
                </TechSkills>
                <SoftSkills>Soft Skills:
                    <ul>
                        <Item>Attentive</Item>
                        <Item>Teamwork</Item>
                        <Item>Capable</Item>
                        <Item>Flexible</Item>
                        <Item>Hardworking</Item>
                    </ul>
                </SoftSkills>
                </List>
<Text>Click on the button for download full resume in pdf format</Text>
<Link href={Resume} download={Resume}><Btn type="submit">Download</Btn></Link>
            </Section>
            </Wrapper>
  )
}