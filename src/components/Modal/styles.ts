import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`

export const Container = styled.div`
  background-color: ${colors.primary};
  max-width: 1024px;
  width: 90%;
  max-height: 90vh;
  position: relative;
  display: flex;
  gap: 24px;
  padding: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 90%;
  }
`

export const Header = styled.div`
  position: absolute;
  top: 8px;
  right: 16px;
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: ${colors.white};
  cursor: pointer;
  padding: 8px;
  line-height: 1;

  &:hover {
    opacity: 0.8;
  }
`

export const ProductImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`

export const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: ${colors.white};
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
  flex-grow: 1;
`

export const Portion = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
`

export const Button = styled.button`
  background-color: ${colors.secondary};
  color: ${colors.primary};
  border: none;
  padding: 4px 7px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  flex: 1;

  &:hover {
    opacity: 0.8;
  }
`
