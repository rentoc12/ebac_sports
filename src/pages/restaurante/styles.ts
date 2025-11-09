import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Container = styled.div`
  min-height: 100vh;
`

export const Banner = styled.div`
  height: 280px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`

export const BannerContent = styled.div`
  position: relative;
  z-index: 1;
  padding-bottom: 32px;
`

export const Category = styled.p`
  font-size: 32px;
  font-weight: 100;
  color: ${colors.white};
  opacity: 0.5;
  margin-bottom: 156px;
`

export const RestaurantName = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: ${colors.white};
`

export const ProductsSection = styled.section`
  padding: 56px 0;
`

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  align-items: stretch;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Loading = styled.div`
  text-align: center;
  font-size: 18px;
  color: ${colors.primary};
  padding: 40px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`
