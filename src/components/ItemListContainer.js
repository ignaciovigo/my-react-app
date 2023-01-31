import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import ItemList from './ItemList'
import useProducts from '../hooks/useProducts'

const ItemListContainer = () => {
  const urlParams = useParams()
  const { products } = useProducts({ urlParams })
  
  return (
    <Container fluid>
      <ItemList products={products} />
    </Container>
  )
}

export default ItemListContainer
