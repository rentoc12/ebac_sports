import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { GlobalStyles } from './styles/GlobalStyles'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
import AppRoutes from './routes'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <AppRoutes />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
