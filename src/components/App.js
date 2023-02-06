import { CartProvider } from '../context/CartProvider'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
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
      <ToastContainer limit={10} position='top-left'/>
    </CartProvider>
  )
}

export default App
