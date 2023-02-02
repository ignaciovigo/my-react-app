import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import useProducts from '../hooks/useProducts'
import { Container } from 'react-bootstrap'

const ItemListContainer = () => {
  const urlParams = useParams()
  const { products } = useProducts(urlParams,'category','==',urlParams.categoryId)
  
  return (
    <Container fluid>
      <ItemList products={products} />
    </Container>
  )
}

export default ItemListContainer
