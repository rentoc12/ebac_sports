import { useState } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { setDeliveryData, goToCart } from '../../store/reducers/cart'
import { Form, InputGroup, Input, ButtonGroup, Button } from './styles'

const Delivery = () => {
  const dispatch = useAppDispatch()
  const [receiver, setReceiver] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log('=== DELIVERY FORM SUBMIT ===')
    console.log({ receiver, address, city, zipCode, number, complement })

    // Validação simples
    if (!receiver || !address || !city || !zipCode || !number) {
      alert('Por favor, preencha todos os campos obrigatórios')
      return
    }

    // Enviar dados para Redux
    const deliveryData = {
      receiver,
      address,
      city,
      zipCode,
      number,
      complement
    }

    console.log('Enviando para Redux:', deliveryData)
    dispatch(setDeliveryData(deliveryData))
  }

  const handleBack = () => {
    dispatch(goToCart())
  }

  return (
    <>
      <h2>Entrega</h2>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <label htmlFor="receiver">Quem irá receber</label>
          <Input
            id="receiver"
            type="text"
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
            required
          />
        </InputGroup>

        <InputGroup>
          <label htmlFor="address">Endereço</label>
          <Input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </InputGroup>

        <InputGroup>
          <label htmlFor="city">Cidade</label>
          <Input
            id="city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </InputGroup>

        <div style={{ display: 'flex', gap: '34px' }}>
          <InputGroup style={{ flex: 1 }}>
            <label htmlFor="zipCode">CEP</label>
            <Input
              id="zipCode"
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              required
            />
          </InputGroup>

          <InputGroup style={{ flex: 1 }}>
            <label htmlFor="number">Número</label>
            <Input
              id="number"
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </InputGroup>
        </div>

        <InputGroup>
          <label htmlFor="complement">Complemento (opcional)</label>
          <Input
            id="complement"
            type="text"
            value={complement}
            onChange={(e) => setComplement(e.target.value)}
          />
        </InputGroup>

        <ButtonGroup>
          <Button type="submit">Continuar com o pagamento</Button>
          <Button type="button" onClick={handleBack}>
            Voltar para o carrinho
          </Button>
        </ButtonGroup>
      </Form>
    </>
  )
}

export default Delivery
