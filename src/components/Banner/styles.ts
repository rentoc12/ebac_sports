import styled from 'styled-components'
import { colors } from '../../styles/colors'
import bannerImg from '../../assets/images/fundo.png'

export const Container = styled.section`
  height: 384px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1)), url(${bannerImg});
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: ${colors.primary};
  max-width: 539px;
  line-height: 42px;
  margin: 0 auto;
`

export const Subtitle = styled.h3`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${colors.white};
`
