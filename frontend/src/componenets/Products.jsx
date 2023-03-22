import React from 'react'
import ProductCard from './ProductCard'

const Products = () => {
  return (
    <div className="row my-5">
    <div className='col-md-4  mb-2'>
    <ProductCard/>
    </div>
    <div className='col-md-4  mb-4'>
    <ProductCard/>
    </div>
    <div className='col-md-4  mb-2'>
    <ProductCard/>
    </div>
    <div className='col-md-4  mb-2'>
    <ProductCard/>
    </div>
    <div className='col-md-4  mb-2'>
    <ProductCard/>
    </div>
    <div className='col-md-4  mb-2'>
    <ProductCard/>
    </div>
    
    </div>
    )
}

export default Products