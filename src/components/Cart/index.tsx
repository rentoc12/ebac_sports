import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  closeCart,
  removeFromCart,
  selectCartItems,
  selectCartIsOpen,
  selectCartTotal,
  selectCurrentStep,
  goToDelivery
} from '../../store/reducers/cart'
import Delivery from '../Checkout/delivery'
import Payment from '../Checkout/pagamento'
import Confirmation from '../Checkout/confirmacao'
import lixeiraIcon from '../../assets/images/lixeira.png' // Import da imagem da lixeira
import {
  Overlay,
  Sidebar,
  CartItem,
  CartItemImage,
  CartItemInfo,
  CartItemTitle,
  CartItemPrice,
  RemoveButton,
  TotalSection,
  TotalText,
  TotalValue,
  ContinueButton,
  EmptyCart
} from './styles'

const Cart = () => {
  const dispatch = useAppDispatch()
  const items = useAppSelector(selectCartItems)
  const isOpen = useAppSelector(selectCartIsOpen)
  const total = useAppSelector(selectCartTotal)
  const currentStep = useAppSelector(selectCurrentStep)

  const handleClose = () => {
    if (currentStep === 'confirmation') {
      return // Não permitir fechar na tela de confirmação
    }
    dispatch(closeCart())
  }

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id))
  }

  const handleContinue = () => {
    dispatch(goToDelivery())
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && currentStep !== 'confirmation') {
      handleClose()
    }
  }

  if (!isOpen) return null

  return (
    <>
      <Overlay onClick={handleOverlayClick} />
      <Sidebar>
        {currentStep === 'cart' && (
          <>
            <h2>Carrinho</h2>

            {items.length === 0 ? (
              <EmptyCart>
                <p>Seu carrinho está vazio</p>
                <p>Adicione produtos para continuar</p>
              </EmptyCart>
            ) : (
              <>
                {items.map((item) => (
                  <CartItem key={item.id}>
                    <CartItemImage src={item.foto} alt={item.nome} />
                    <CartItemInfo>
                      <CartItemTitle>{item.nome}</CartItemTitle>
                      <CartItemPrice>
                        R$ {item.preco.toFixed(2).replace('.', ',')}
                      </CartItemPrice>
                    </CartItemInfo>
                    <RemoveButton onClick={() => handleRemove(item.id)}>
                      <img src={lixeiraIcon} alt="Remover" />
                    </RemoveButton>
                  </CartItem>
                ))}

                <TotalSection>
                  <TotalText>Valor total</TotalText>
                  <TotalValue>
                    R$ {total.toFixed(2).replace('.', ',')}
                  </TotalValue>
                </TotalSection>

                <ContinueButton onClick={handleContinue}>
                  Continuar com a entrega
                </ContinueButton>
              </>
            )}
          </>
        )}

        {currentStep === 'delivery' && <Delivery />}
        {currentStep === 'payment' && <Payment />}
        {currentStep === 'confirmation' && <Confirmation />}
      </Sidebar>
    </>
  )
}

export default Cart
