import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { openCart, selectCartItemsCount } from '../../store/reducers/cart'
import {
  Container,
  ContainerRestaurant,
  Logo,
  CartInfo,
  Nav,
  HeaderContent
} from './styles'
import logoImg from '../../assets/images/logo.png'

const Header = () => {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const itemsCount = useAppSelector(selectCartItemsCount)
  const isRestaurantPage = location.pathname.includes('/restaurant/')

  const handleOpenCart = () => {
    dispatch(openCart())
  }

  if (isRestaurantPage) {
    // Header para página do restaurante
    return (
      <ContainerRestaurant>
        <HeaderContent>
          <Nav>
            <Link to="/">Restaurantes</Link>
          </Nav>
          <Logo>
            <Link to="/">
              <img src={logoImg} alt="efood" />
            </Link>
          </Logo>
          <CartInfo onClick={handleOpenCart} style={{ cursor: 'pointer' }}>
            {itemsCount} produto(s) no carrinho
          </CartInfo>
        </HeaderContent>
      </ContainerRestaurant>
    )
  }

  // Header para home
  return (
    <Container>
      <HeaderContent>
        <Logo>
          <Link to="/">
            <img src={logoImg} alt="efood" />
          </Link>
        </Logo>
      </HeaderContent>
    </Container>
  )
}

export default Header
