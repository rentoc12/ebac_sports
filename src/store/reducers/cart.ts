import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../models/produto'

export interface DeliveryData {
  receiver: string
  address: string
  city: string
  zipCode: string
  number: string
  complement?: string
}

export interface PaymentData {
  cardOwner: string
  cardNumber: string
  cardCode: string
  expiresMonth: string
  expiresYear: string
}

interface CartItem extends Product {
  quantity: number
}

interface CartState {
  items: CartItem[]
  isOpen: boolean
  currentStep: 'cart' | 'delivery' | 'payment' | 'confirmation'
  deliveryData: DeliveryData | null
  paymentData: PaymentData | null
  orderId: string | null
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  currentStep: 'cart',
  deliveryData: null,
  paymentData: null,
  orderId: null
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (existingItem) {
        existingItem.quantity++
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload)

      if (item) {
        if (item.quantity > 1) {
          item.quantity--
        } else {
          state.items = state.items.filter((item) => item.id !== action.payload)
        }
      }
    },
    clearCart: (state) => {
      state.items = []
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen
    },
    openCart: (state) => {
      state.isOpen = true
    },
    closeCart: (state) => {
      state.isOpen = false
    },
    setDeliveryData: (state, action: PayloadAction<DeliveryData>) => {
      state.deliveryData = action.payload
      state.currentStep = 'payment'
    },
    setPaymentData: (state, action: PayloadAction<PaymentData>) => {
      state.paymentData = action.payload
    },
    setOrderId: (state, action: PayloadAction<string>) => {
      state.orderId = action.payload
      state.currentStep = 'confirmation'
    },
    goToDelivery: (state) => {
      state.currentStep = 'delivery'
    },
    goToPayment: (state) => {
      state.currentStep = 'payment'
    },
    goToCart: (state) => {
      state.currentStep = 'cart'
    },
    resetCheckout: (state) => {
      state.items = []
      state.currentStep = 'cart'
      state.deliveryData = null
      state.paymentData = null
      state.orderId = null
      state.isOpen = false
    }
  }
})

export const {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  clearCart,
  toggleCart,
  openCart,
  closeCart,
  setDeliveryData,
  setPaymentData,
  setOrderId,
  goToDelivery,
  goToPayment,
  goToCart,
  resetCheckout
} = cartSlice.actions

export default cartSlice.reducer

// Seletores
export const selectCartItems = (state: { cart: CartState }) => state.cart.items
export const selectCartIsOpen = (state: { cart: CartState }) =>
  state.cart.isOpen
export const selectCartTotal = (state: { cart: CartState }) =>
  state.cart.items.reduce(
    (total, item) => total + item.preco * item.quantity,
    0
  )
export const selectCartItemsCount = (state: { cart: CartState }) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0)
export const selectCurrentStep = (state: { cart: CartState }) =>
  state.cart.currentStep
export const selectDeliveryData = (state: { cart: CartState }) =>
  state.cart.deliveryData
export const selectPaymentData = (state: { cart: CartState }) =>
  state.cart.paymentData
export const selectOrderId = (state: { cart: CartState }) => state.cart.orderId
