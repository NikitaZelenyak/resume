import avatar from '../../img/avatar.jpg'

import { Section,Title,Text,Wrapper,Wrap,Img } from './HomePage.styled'

export const HomePage = () => {
    return (
        <Wrapper>
            <Section>

               
            <Img src={avatar} width='400' alt="Zeleniak Nikita" />
                 <Wrap>           
                    <Title>
                        Zeleniak Nikita
          
                    </Title>
                    <Text>
                        Junior front-end developer
                    </Text>    
                </Wrap>
            </Section>
            </Wrapper>
  )
}