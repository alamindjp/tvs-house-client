import React from 'react';
import { useNavigate } from 'react-router-dom';
import './product.css'

const Product = ({ product }) => {
    const {_id, name, image, price, supplier, quantity, about } = product
const navigate =useNavigate();
    const navigateManageProduct = id =>{
        navigate(`/product/${_id}`)
    }
    return (
           <div className="col-12 col-md-6 col-lg-4 g-5">
            <div className="card h-100">
                <img src={image} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><span className='fw-bold'>Quantity</span> : {quantity}</p>
                <p className="card-text"><span className='bg-info p-2 rounded'><span className='fw-bold'>Price</span> : ${price}</span></p>
                    <p className="card-text"><span className='fw-bold'>Supplier</span> : {supplier}</p>
                    <p className="card-text custom-text"><span className='fw-bolder text-decoration-underline'>Description</span> : {about ? about : "No description"}</p>
                </div>
                <button onClick={()=>navigateManageProduct(_id)} className='card-footer btn btn-outline-success'>Update</button>
            </div>
        </div>
    );
};

export default Product;