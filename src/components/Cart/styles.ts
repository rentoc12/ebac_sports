import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 998;
`

export const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100vh;
  background-color: ${colors.primary};
  z-index: 999;
  padding: 32px 8px;
  overflow-y: auto;

  h2 {
    color: ${colors.secondary};
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
    padding: 0 8px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const CartItem = styled.div`
  background-color: ${colors.secondary};
  padding: 8px;
  margin-bottom: 16px;
  display: flex;
  gap: 8px;
  position: relative;
`

export const CartItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

export const CartItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CartItemTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.primary};
  margin-bottom: 16px;
`

export const CartItemPrice = styled.p`
  font-size: 14px;
  color: ${colors.primary};
`

export const RemoveButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;

  img {
    width: 16px;
    height: 16px;
    filter: brightness(0) saturate(100%) invert(45%) sepia(84%) saturate(2270%)
      hue-rotate(335deg) brightness(95%) contrast(88%);
  }

  &:hover {
    opacity: 0.7;
  }
`

export const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.secondary};
  font-size: 14px;
  font-weight: bold;
  margin: 40px 8px 16px;
`

export const TotalText = styled.span``

export const TotalValue = styled.span``

export const ContinueButton = styled.button`
  width: calc(100% - 16px);
  margin: 0 8px;
  background-color: ${colors.secondary};
  color: ${colors.primary};
  border: none;
  padding: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

export const EmptyCart = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: ${colors.secondary};

  p {
    margin-bottom: 8px;
    font-size: 16px;
  }
`
