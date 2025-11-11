import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Restaurant from './pages/restaurante'
import Checkout from './components/Checkout/pagamento'
import Confirmacao from './components/Checkout/confirmacao'

const AppRoutes = () => (
  <Routes>
    {/* Página inicial */}
    <Route path="/" element={<Home />} />

    {/* Página do restaurante */}
    <Route path="/restaurant/:id" element={<Restaurant />} />

    {/* Página de pagamento */}
    <Route path="/checkout/pagamento" element={<Checkout />} />

    {/* Página de confirmação */}
    <Route path="/checkout/confirmacao" element={<Confirmacao />} />
  </Routes>
)

export default AppRoutes
