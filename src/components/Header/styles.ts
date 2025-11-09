import styled from 'styled-components'
import { colors } from '../../styles/colors'

// Header para página Home
export const Container = styled.header`
  background-color: ${colors.secondary};
  padding: 40px 0;
  text-align: center;
`

// Header para página Restaurant (3 elementos)
export const ContainerRestaurant = styled.header`
  background-color: ${colors.secondary};
  padding: 40px 0;
`

export const HeaderContent = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${Container} & {
    justify-content: center;
  }
`

export const Logo = styled.h1`
  font-size: 36px;
  font-weight: bold;

  a {
    text-decoration: none;
    color: ${colors.primary};

    img {
      height: 58px;
      width: auto;
    }
  }

  /* Centralizar logo quando estiver no meio (página restaurant) */
  ${ContainerRestaurant} & {
    flex: 1;
    text-align: center;
  }
`

export const CartInfo = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: ${colors.primary};
  min-width: 200px;
  text-align: right;
`

export const Nav = styled.nav`
  min-width: 200px;

  a {
    text-decoration: none;
    color: ${colors.primary};
    font-size: 18px;
    font-weight: bold;
  }
`
