import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const {_id, name, image, price, supplier, quantity } = product
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
                    <p className="card-text">price: ${price}</p>
                    <p className="card-text">Quantity: {quantity}</p>
                    <p className="card-text">Supplier: {supplier}</p>
                </div>
                <p className="card-text"><span className='bg-info p-2 rounded'>Price: ${price}</span></p>
                <button onClick={()=>navigateManageProduct(_id)} className='card-footer btn btn-outline-success'>Update</button>
            </div>
        </div>
    );
};

export default Product;