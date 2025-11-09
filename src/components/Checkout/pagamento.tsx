import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  setPaymentData,
  setOrderId,
  goToDelivery,
  selectCartItems,
  selectCartTotal,
  selectDeliveryData
} from '../../store/reducers/cart'
import { api } from '../../services/api'
import { Form, InputGroup, Input, ButtonGroup, Button } from './styles'
import { useState } from 'react'

const Payment = () => {
  const dispatch = useAppDispatch()
  const items = useAppSelector(selectCartItems)
  const total = useAppSelector(selectCartTotal)
  const deliveryData = useAppSelector(selectDeliveryData)
  const [isLoading, setIsLoading] = useState(false)

  const formik = useFormik({
    initialValues: {
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      cardOwner: Yup.string().required('Campo obrigatório'),
      cardNumber: Yup.string()
        .required('Campo obrigatório')
        .matches(/^[0-9]{16}$/, 'Número do cartão inválido'),
      cardCode: Yup.string()
        .required('Campo obrigatório')
        .matches(/^[0-9]{3}$/, 'CVV inválido'),
      expiresMonth: Yup.string()
        .required('Campo obrigatório')
        .matches(/^(0[1-9]|1[0-2])$/, 'Mês inválido'),
      expiresYear: Yup.string()
        .required('Campo obrigatório')
        .matches(/^[0-9]{4}$/, 'Ano inválido')
    }),
    onSubmit: async (values) => {
      console.log('=== SUBMIT INICIADO ===')
      console.log('Form values:', values)

      if (!deliveryData) {
        console.error('Dados de entrega não encontrados!')
        alert('Dados de entrega não encontrados')
        return
      }

      setIsLoading(true)
      dispatch(setPaymentData(values))

      try {
        const checkoutData = {
          products: items.map((item) => ({
            id: item.id,
            price: item.preco
          })),
          delivery: {
            receiver: deliveryData.receiver,
            address: {
              description: deliveryData.address,
              city: deliveryData.city,
              zipCode: deliveryData.zipCode,
              number: Number(deliveryData.number),
              complement: deliveryData.complement || ''
            }
          },
          payment: {
            card: {
              name: values.cardOwner,
              number: values.cardNumber,
              code: Number(values.cardCode),
              expires: {
                month: Number(values.expiresMonth),
                year: Number(values.expiresYear)
              }
            }
          }
        }

        console.log('Enviando para API:', checkoutData)
        const response = await api.checkout(checkoutData)
        console.log('Resposta da API:', response)
        dispatch(setOrderId(response.orderId))
      } catch (error) {
        console.error('Erro ao finalizar pedido:', error)
        alert('Erro ao finalizar pedido. Tente novamente.')
      } finally {
        setIsLoading(false)
      }
    }
  })

  const handleBack = () => {
    dispatch(goToDelivery())
  }

  return (
    <>
      <h2>Pagamento - Valor a pagar R$ {total.toFixed(2).replace('.', ',')}</h2>
      <Form onSubmit={formik.handleSubmit}>
        <InputGroup>
          <label htmlFor="cardOwner">Nome no cartão</label>
          <Input
            id="cardOwner"
            name="cardOwner"
            type="text"
            autoComplete="cc-name"
            value={formik.values.cardOwner}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.cardOwner && formik.errors.cardOwner ? 'error' : ''
            }
          />
        </InputGroup>

        <div style={{ display: 'flex', gap: '30px' }}>
          <InputGroup style={{ flex: 2 }}>
            <label htmlFor="cardNumber">Número do cartão</label>
            <Input
              id="cardNumber"
              name="cardNumber"
              type="text"
              autoComplete="cc-number"
              maxLength={16}
              value={formik.values.cardNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.cardNumber && formik.errors.cardNumber
                  ? 'error'
                  : ''
              }
            />
          </InputGroup>

          <InputGroup style={{ flex: 1 }}>
            <label htmlFor="cardCode">CVV</label>
            <Input
              id="cardCode"
              name="cardCode"
              type="text"
              autoComplete="cc-csc"
              maxLength={3}
              value={formik.values.cardCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.cardCode && formik.errors.cardCode ? 'error' : ''
              }
            />
          </InputGroup>
        </div>

        <div style={{ display: 'flex', gap: '34px' }}>
          <InputGroup style={{ flex: 1 }}>
            <label htmlFor="expiresMonth">Mês de vencimento</label>
            <Input
              id="expiresMonth"
              name="expiresMonth"
              type="text"
              autoComplete="cc-exp-month"
              maxLength={2}
              placeholder="MM"
              value={formik.values.expiresMonth}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.expiresMonth && formik.errors.expiresMonth
                  ? 'error'
                  : ''
              }
            />
          </InputGroup>

          <InputGroup style={{ flex: 1 }}>
            <label htmlFor="expiresYear">Ano de vencimento</label>
            <Input
              id="expiresYear"
              name="expiresYear"
              type="text"
              autoComplete="cc-exp-year"
              maxLength={4}
              placeholder="AAAA"
              value={formik.values.expiresYear}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.expiresYear && formik.errors.expiresYear
                  ? 'error'
                  : ''
              }
            />
          </InputGroup>
        </div>

        <ButtonGroup>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
          </Button>
          <Button type="button" onClick={handleBack} disabled={isLoading}>
            Voltar para a edição de endereço
          </Button>
        </ButtonGroup>
      </Form>
    </>
  )
}

export default Payment
