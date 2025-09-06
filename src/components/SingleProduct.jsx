import React from 'react'
import Breadcum from './Breadcum'
import ProductDisplay from './ProductDisplay'
import Description from './Description'
import { useParams } from 'react-router-dom'
import all_product from '../Utilis/allProduct'

const SingleProduct = () => {
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div className='max-w-7xl mx-auto mb-32 mt-14'>
        <Breadcum product={product}/>
        <ProductDisplay product={product}/>
        <Description/>
    </div>
  )
}

export default SingleProduct