import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { resetCheckout, selectOrderId } from '../../store/reducers/cart'
import { ConfirmationContainer, ConfirmationText, Button } from './styles'

const Confirmation = () => {
  const dispatch = useAppDispatch()
  const orderId = useAppSelector(selectOrderId)
  const navigate = useNavigate()

  const handleFinish = () => {
    dispatch(resetCheckout())
    navigate('/')
  }

  return (
    <ConfirmationContainer>
      <h2>Pedido realizado - {orderId}</h2>

      <ConfirmationText>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </ConfirmationText>

      <ConfirmationText>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </ConfirmationText>

      <ConfirmationText>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </ConfirmationText>

      <ConfirmationText>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </ConfirmationText>

      <Button onClick={handleFinish}>Concluir</Button>
    </ConfirmationContainer>
  )
}

export default Confirmation
