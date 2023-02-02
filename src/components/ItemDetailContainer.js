import { useParams } from 'react-router-dom'
import useProductDetail from '../hooks/useProductDetail'
import ItemDetail from './ItemDetail'
import Loader from './Loader'

const ItemDetailContainer = () => {
  const { id } = useParams()
  const { productDetail, isLoading } = useProductDetail({ id })
  
  return (!isLoading) ? <ItemDetail productDetail={productDetail} /> : <Loader />
}

export default ItemDetailContainer
