import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import useProducts from '../hooks/useProducts'
import { Container } from 'react-bootstrap'
import Loader from './Loader'

const ItemListContainer = () => {
  const urlParams = useParams()
  console.log(`params : ${urlParams.categoryId}`)
  const { products,isLoading } = useProducts(urlParams,'category','==',urlParams.categoryId)
  
  return (
    <Container fluid>
      {isLoading ? <Loader /> : <ItemList products={products} /> }
    </Container>
  )
}

export default ItemListContainer
