import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageTitle from '../../Components/PageTitle/PageTitle';

const UpdateProduct = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`
        fetch(url).then(res => res.json()).then(data => setProduct(data))
    }, [])
    return (
        <div>
            <PageTitle title='Manage-product'></PageTitle>
            <h2 className='mb-3'>Manage Product</h2>
            <hr className='w-50 mx-auto m-1 p-1 rounded' />
            <h3 className='mt-5'>{product.name}</h3>
            <hr className='w-25 mx-auto m-1 p-1 rounded-circle' />
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col mx-auto">
                    <div className="card border-0">
                        <img src={product.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Supplier: {product.supplier}</h5>
                            <p className="card-text"><span className='fw-bold'>Quantity</span> : {product.quantity}</p>
                            <p className="card-text"><span className='fw-bold'>Price</span> : ${product.price}</p>
                            <p className="card-text custom-text"><span className='fw-bolder text-decoration-underline'>Description</span> : {product.about ? product.about : "No description"}</p>
                            <div className='d-flex justify-content-center mt-4'>
                                <button className='btn btn-outline-success me-4 w-25'>Delivery</button>
                                <div className="input-group w-25">
                                    <input type="number" className="form-control" placeholder="Add Quantity" aria-label="Recipient's username" aria-describedby="basic-addon" />
                                    <span className="input-group-text" id="basic-addon">Add</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link to='/inventories' type="button" className="btn btn-outline-secondary mt-2">All Inventory</Link>
        </div>
    );
};

export default UpdateProduct;