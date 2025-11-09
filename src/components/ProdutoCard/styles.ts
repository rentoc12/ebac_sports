import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Card = styled.div`
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 8px;
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Image = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  margin-bottom: 8px;
  flex-shrink: 0;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  flex-shrink: 0;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
  flex-grow: 1;
`

export const ButtonContainer = styled.div`
  margin-top: auto;
  button {
    width: 100%;
    background-color: ${colors.secondary};
    color: ${colors.primary};
    border: none;
    padding: 4px 6px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`
