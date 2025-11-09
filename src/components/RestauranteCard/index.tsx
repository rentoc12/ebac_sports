import { Link } from 'react-router-dom'
import Button from '../Button'
import {
  Card,
  Image,
  Content,
  Title,
  Rating,
  Description,
  TagContainer,
  Tag,
  InfoBar
} from './styles'
import { Restaurant } from '../../models/restaurante'

interface Props {
  restaurant: Restaurant
}

const RestaurantCard = ({ restaurant }: Props) => {
  return (
    <Card>
      <Image src={restaurant.capa} alt={restaurant.titulo} />
      <TagContainer>
        {restaurant.destacado && <Tag>Destaque da semana</Tag>}
        <Tag>{restaurant.tipo}</Tag>
      </TagContainer>
      <Content>
        <InfoBar>
          <Title>{restaurant.titulo}</Title>
          <Rating>⭐ {restaurant.avaliacao}</Rating>
        </InfoBar>
        <Description>{restaurant.descricao}</Description>
        <Link to={`/restaurant/${restaurant.id}`}>
          <Button>Saiba mais</Button>
        </Link>
      </Content>
    </Card>
  )
}

export default RestaurantCard
