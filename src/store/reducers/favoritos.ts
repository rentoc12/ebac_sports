import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type favoritoState = {
  length: any
  itens: Produto[]
}

const initialState: favoritoState = {
  itens: [],
  length: undefined
}

const favoritoSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarFavorito: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.itens.find((p) => p.id === produto.id)) {
        alert('Item já adicionado a favorito')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionarFavorito } = favoritoSlice.actions
export default favoritoSlice.reducer
