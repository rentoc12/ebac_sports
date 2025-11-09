import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import RestaurantCard from '../../components/RestauranteCard'
import { Restaurant } from '../../models/restaurante'
import { api } from '../../services/api'
import { Container, RestaurantList, Loading } from './styles'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true)
        const data = await api.getRestaurants()
        setRestaurants(data)
      } catch (error) {
        console.error('Erro ao buscar restaurantes:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRestaurants()
  }, [])

  if (loading) {
    return (
      <>
        <Banner />
        <Container>
          <div className="container">
            <Loading>Carregando restaurantes...</Loading>
          </div>
        </Container>
      </>
    )
  }

  return (
    <>
      <Banner />
      <Container>
        <div className="container">
          <RestaurantList>
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </RestaurantList>
        </div>
      </Container>
    </>
  )
}

export default Home
