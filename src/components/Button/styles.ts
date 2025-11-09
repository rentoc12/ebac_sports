import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const ButtonContainer = styled.button`
  background-color: ${colors.primary};
  color: ${colors.white};
  border: none;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;

  &:hover {
    opacity: 0.8;
  }
`
