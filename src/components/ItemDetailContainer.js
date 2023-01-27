import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import Loader from './Loader'

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({})
  const [isLoading, setisLoading] = useState(false)
  const urlParams = useParams()

  useEffect(() => {
    const getItemDetail = async () => {
      try {
        setisLoading(true)
        const resp = await fetch(`https://fakestoreapi.com/products/${urlParams.id}`)
        const data = await resp.json()
        if (!resp.ok) throw { status: resp.status, statusText: resp.statusText }
        setisLoading(false)
        setProductDetail(data)
      } catch (err) {
        const message =
          err.statusText || 'Ha ocurrido un error al obtener los datos'
        console.error(err.status + ': ' + message)
      }
    }
    getItemDetail()
  }, [urlParams])
  return (!isLoading) ? <ItemDetail productDetail={productDetail} /> : <Loader />
}

export default ItemDetailContainer
