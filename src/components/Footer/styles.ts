import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Container = styled.footer`
  background-color: ${colors.secondary};
  padding: 40px 0;
  text-align: center;
`

export const FooterContent = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.primary};
  margin-bottom: 32px;

  img {
    height: 58px; // Mesmo tamanho do header
    width: auto;
  }

  /* Garantir que a logo fique centralizada */
  text-align: center;
  align-self: center;
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 80px;
`

export const SocialLink = styled.a`
  text-decoration: none;

  img {
    width: 24px;
    height: 24px;
  }
`

export const Description = styled.p`
  font-size: 10px;
  color: ${colors.primary};
  max-width: 480px;
  margin: 0 auto;
  line-height: 12px;
  text-align: center;
`
