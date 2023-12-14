import { Routes, Route } from 'react-router-dom'
import Cart from './Cart'
import Home from './Home'
import ItemDetailContainer from './ItemDetailContainer'
import ItemListContainer from './ItemListContainer'
import NotFound from './NotFound'
import SubNavBar from './SubNavBar'
const Main = () => {
  return (
    <main>
      <SubNavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ItemListContainer withFilter />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default Main
