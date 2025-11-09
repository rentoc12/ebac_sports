import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Form = styled.form`
  margin-top: 16px;
`

export const InputGroup = styled.div`
  margin-bottom: 8px;

  label {
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: ${colors.secondary};
    margin-bottom: 8px;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid ${colors.secondary};
  background-color: ${colors.secondary};
  color: ${colors.darkGray};
  font-size: 14px;

  &.error {
    border-color: #ff0000;
  }

  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
`

export const Button = styled.button`
  width: 100%;
  background-color: ${colors.secondary};
  color: ${colors.primary};
  border: none;
  padding: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:hover:not(:disabled) {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.secondary};
  font-size: 14px;
  font-weight: bold;
  margin: 24px 0 16px;
`

export const TotalText = styled.span``

export const TotalValue = styled.span``

export const ConfirmationContainer = styled.div`
  padding: 0 8px;

  h2 {
    color: ${colors.secondary};
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }
`

export const ConfirmationText = styled.p`
  color: ${colors.secondary};
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 24px;
`
