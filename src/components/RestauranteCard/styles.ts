import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Card = styled.div`
  background-color: ${colors.white};
  position: relative;
  border: 1px solid ${colors.primary};
  max-width: 472px;
`

export const Image = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const TagContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Tag = styled.span`
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 6px 4px;
  font-size: 12px;
  font-weight: bold;
`

export const Content = styled.div`
  padding: 8px;
`

export const InfoBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const Rating = styled.span`
  font-size: 18px;
  font-weight: bold;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`
