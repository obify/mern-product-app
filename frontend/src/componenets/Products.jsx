import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'
import { API_BASE_URL } from '../config'
import Swal from 'sweetalert2'

const Products = () => {

  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const response = await axios.get(`${API_BASE_URL}/allproducts`);
    console.log(response.data.productList)
    if (response.status == 200) {
      setProducts(response.data.productList)
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Some error occured while getting all!'
      })
    }
  }

  useEffect(() => {
    getAllProducts();
  }, [])
  return (
    <div className='container'>
      <div className="row my-5">
        {products.map((product) => {
          return (
            <div key={product._id} className='col-md-4 mb-2'>
              {/* <h2>Hello world</h2> */}
              <ProductCard productData={product} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Products