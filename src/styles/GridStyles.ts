import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin: 80px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const RestaurantGrid = styled(GridContainer)`
  grid-template-columns: 1fr 1fr;
`

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin: 56px 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
