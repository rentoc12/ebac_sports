import { ButtonContainer } from './styles'

interface Props {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
}

const Button = ({ children, onClick, type = 'button' }: Props) => {
  return (
    <ButtonContainer type={type} onClick={onClick}>
      {children}
    </ButtonContainer>
  )
}

export default Button
