import { Section,Wrapper,Title,List,Item,Link } from "./ContactsPage.styled"

export const ContactsPage = () => {
    return (
        <Wrapper>
            <Section>
        <Title>
           My Contacts
            </Title>
            <List>
                <Item><Link  target="_blank" rel="noreferrer noopener" href=" https://www.linkedin.com/in/nikita-zeleniak-a4aa65229">LinkedIn</Link></Item>
                <Item><Link target="_blank" rel="noreferrer noopener" href="mailto:zelenyaknikita0927@gmail.com">Mail</Link></Item>
                <Item><Link target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/nikita.zelenyak">Facebook</Link></Item>
                <Item><Link target="_blank" rel="noreferrer noopener" href="https://github.com/NikitaZelenyak">GitHub</Link></Item>
            </List>
    </Section></Wrapper>
    
  )
}