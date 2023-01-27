import { CartProvider } from '../context/CartProvider'
import { BrowserRouter } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

function App () {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
