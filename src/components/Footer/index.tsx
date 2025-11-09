import {
  Container,
  Logo,
  Description,
  SocialLinks,
  SocialLink,
  FooterContent
} from './styles'
import logoImg from '../../assets/images/logo.png'
import instagramIcon from '../../assets/images/social/instagram.png'
import facebookIcon from '../../assets/images/social/facebook.png'
import twitterIcon from '../../assets/images/social/twitter.png'

const Footer = () => {
  return (
    <Container>
      <FooterContent>
        <Logo>
          <img src={logoImg} alt="efood" />
        </Logo>
        <SocialLinks>
          <SocialLink href="#" target="_blank">
            <img src={instagramIcon} alt="Instagram" />
          </SocialLink>
          <SocialLink href="#" target="_blank">
            <img src={facebookIcon} alt="Facebook" />
          </SocialLink>
          <SocialLink href="#" target="_blank">
            <img src={twitterIcon} alt="Twitter" />
          </SocialLink>
        </SocialLinks>
        <Description>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </Description>
      </FooterContent>
    </Container>
  )
}

export default Footer
