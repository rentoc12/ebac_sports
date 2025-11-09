import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Restaurant from './pages/restaurante'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/:id" element={<Restaurant />} />
  </Routes>
)

export default AppRoutes
