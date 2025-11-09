import { Card, Image, Title, Description, ButtonContainer } from './styles'
import { Product } from '../../models/produto'

interface Props {
  product: Product
  onAddToCart: (product: Product) => void
}

const ProductCard = ({ product, onAddToCart }: Props) => {
  return (
    <Card>
      <Image src={product.foto} alt={product.nome} />
      <Title>{product.nome}</Title>
      <Description>{product.descricao}</Description>
      <ButtonContainer>
        <button onClick={() => onAddToCart(product)}>
          Adicionar ao carrinho
        </button>
      </ButtonContainer>
    </Card>
  )
}

export default ProductCard
