import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProdutoCard'
import Modal from '../../components/Modal'
import { Product } from '../../models/produto'
import { Restaurant as RestaurantType } from '../../models/restaurante'
import { api } from '../../services/api'
import {
  Container,
  Banner,
  BannerContent,
  Category,
  RestaurantName,
  ProductsSection,
  ProductsList,
  Loading
} from './styles'

const Restaurant = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<RestaurantType | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRestaurant = async () => {
      if (!id) return

      try {
        setLoading(true)
        const data = await api.getRestaurant(Number(id))
        setRestaurant(data)
      } catch (error) {
        console.error('Erro ao buscar restaurante:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRestaurant()
  }, [id])

  const handleAddToCart = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  if (loading) {
    return (
      <Container>
        <Loading>Carregando...</Loading>
      </Container>
    )
  }

  if (!restaurant) {
    return (
      <Container>
        <Loading>Restaurante não encontrado</Loading>
      </Container>
    )
  }

  return (
    <>
      <Banner
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${restaurant.capa})`
        }}
      >
        <div className="container">
          <BannerContent>
            <Category>{restaurant.tipo}</Category>
            <RestaurantName>{restaurant.titulo}</RestaurantName>
          </BannerContent>
        </div>
      </Banner>

      <ProductsSection>
        <div className="container">
          <ProductsList>
            {restaurant.cardapio.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </ProductsList>
        </div>
      </ProductsSection>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </>
  )
}

export default Restaurant
