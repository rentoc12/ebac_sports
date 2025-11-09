import { Restaurant } from '../models/restaurante'

export interface CheckoutPayload {
  products: Array<{
    id: number
    price: number
  }>
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

export interface CheckoutResponse {
  orderId: string
}

export const api = {
  baseURL: 'https://api-ebac.vercel.app/api/efood',

  async getRestaurants(): Promise<Restaurant[]> {
    const response = await fetch(`${this.baseURL}/restaurantes`)
    return response.json()
  },

  async getRestaurant(id: number): Promise<Restaurant> {
    const response = await fetch(`${this.baseURL}/restaurantes/${id}`)
    return response.json()
  },

  async checkout(data: CheckoutPayload): Promise<CheckoutResponse> {
    const response = await fetch(`${this.baseURL}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return response.json()
  }
}
