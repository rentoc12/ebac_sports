import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Container = styled.section`
  padding: 80px 0;
`

export const RestaurantList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px 80px;
  align-items: stretch;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

export const Loading = styled.div`
  text-align: center;
  font-size: 18px;
  color: ${colors.primary};
  padding: 40px;
`
