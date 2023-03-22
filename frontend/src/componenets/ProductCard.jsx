import React, { useState } from 'react'
import "./ProductCard.css"
import { API_BASE_URL } from '../config'
import MoreAction from "../images/more-action.PNG";
import Carousel from 'react-bootstrap/Carousel';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Modal from 'react-bootstrap/Modal';

const ProductCard = (props) => {
  console.log(props.productData)

  return (
    <div >
      <div className="card shadow-sm " >
        <div className="card-body">
          <div className="row">
            <div className='col-6'>
              <h5>{props.productData.productName}</h5>
            </div>
            <div className='col-6 pb-2 d-flex justify-content-center align-items-center'>
              <button className='btn btn-primary'>Details</button>
            </div>
          </div>
          <div className="row">
            <div className='col-12'>
              <Carousel>
                {props.productData.images.map((imgName) => {
                  return (
                    <Carousel.Item>
                      <img className='img-fluid' key={imgName} src={`${API_BASE_URL}/files/${imgName}`} />
                    </Carousel.Item>
                  )
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard