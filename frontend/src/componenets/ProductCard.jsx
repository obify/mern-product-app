import React, { useState } from 'react'
import "./ProductCard.css"
import MoreAction from "../images/more-action.PNG";
import Carousel from 'react-bootstrap/Carousel';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Modal from 'react-bootstrap/Modal';

const ProductCard = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
    <div className="card shadow-sm " >
    <div className="card-body px-2 ">
    <div className="row">
    <div className="col-md-6 d-flex">
    <div className='d-flex flex-column justify-content-start my-4'>
    <p className='fs-6 fw-bold'>Id No</p>
    <p className='fs-6 fw-bold'>Product 1</p>

    </div>
    </div>
    <div className="col-md-6 d-flex justify-content-end">
    <a className="btn" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" >
    <img src={MoreAction} className="float-end fs-3 p-2 mt-2 fa-solid fa-info" alt="more-img" />
    </a>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <li><a className="dropdown-item" href="#"><i className="fa-solid fa-pen-to-square me-1"></i> Edit Post</a></li>
      <li><a className="dropdown-item" href="#"><i className="fa-solid fa-trash-can me-1"></i> Delete </a></li>
    </ul>
    </div>
    </div>
    <div className="row">
    <div className="col-12">
    <img style={{borderRadius:"15px"}} onClick={handleShow}  className='img-fluid p-2' src="https://etc.usf.edu/techease/wp-content/uploads/2017/12/daylily-flower-and-buds-sharp.jpg" alt="Product Img" />
    </div>
    </div>
    <div className="row my-3">
    <div className="col-6 d-flex ">
    <h5 className='fw-lighter fs-5'><i className="fa-solid fa-indian-rupee-sign fw-5 mx-1"></i> 999</h5>

    </div>
    <div className="col-md-6">
    <span className='fw-bold fs-6 float-end pe-2'>Product Category</span>
    </div>
    </div>
    <div className="row">
    <div className="col-12">
    <p className='location'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ratione reprehenderit possimus officiis beatae voluptatibus.</p>
    </div>
    </div>
  </div>
</div>
{/*Popup */}
<Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
      
        </Modal.Header>
        <Modal.Body>
        <div className="row">
        
        <div className="col-md-6">
        <div>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80"
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1875&q=80"
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel>
        </div>
        </div>
        <div className="col-md-6 ">
        <div className="row">
    <div className="col-md-6 d-flex">
    <div className='d-flex flex-column justify-content-center mt-2 ms-2'>
    <p className='fs-4 fw-bold'>Title</p>
    </div>
    
    </div>
     
    </div>
    <div className="row">
    <div className="col-12 ">
        <span  className='text-muted p-2 fs-5'><i className="fa-solid fa-indian-rupee-sign fs-5 mx-1"></i>999</span>
    </div>
    </div>
    <div className="row">
    <div className="col-12 ms-2 mt-2">

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, accusamus omnis! Itaque delectus beatae architecto, voluptates quod dignissimos? Facere, harum.</p>
    </div>
    </div>
    <div className="row my-3">
    <div className="col-6 d-flex ">
   <h5>Product Category</h5>

    </div>
    <div className="col-md-12 mt-3 ms-2">
    <span className='fw-bold fs-6  pe-2'>200 likes</span>
    </div>
    </div>   
        </div>
        </div>
        </Modal.Body>
      </Modal>
</div>
  )
}

export default ProductCard