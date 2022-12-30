import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Layout, ProductCard } from '../components'

const Items = () => {
  const [products, setProducts] = useState([])

  const apiUrl = `${process.env.REACT_APP_API_URL}/items`

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(apiUrl)
      setProducts(data)
    }
    getData()
  }, [])

  return (
    <Layout>
      <div className="row row-cols-1 row-cols-md-4 g-5 m-5">
        <ProductCard product={products} />
      </div>

    </Layout>
  )
}

export default Items