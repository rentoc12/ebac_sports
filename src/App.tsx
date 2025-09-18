import { useEffect, useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { RootReducer, store } from './store'
import { adicionarFavorito } from './store/reducers/favoritos'
import { adicionar } from './store/reducers/carrinho'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()
  const [produtos, setProdutos] = useState<Produto[]>([])
  const favoritos = useSelector((state: RootReducer) => state.favorito.itens)

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => setProdutos(res))
  }, [])

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={(produto) => dispatch(adicionarFavorito(produto))}
          adicionarAoCarrinho={(produto) => dispatch(adicionar(produto))}
        />
      </div>
    </Provider>
  )
}

export default App
