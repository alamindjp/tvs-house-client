import React from 'react';
import { Link } from 'react-router-dom';
import useCollection from '../../Components/Hooks/useCollection';
import PageTitle from '../../Components/PageTitle/PageTitle';

const ManageProduct = () => {
    const [collections, setCollections] = useCollection()

    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure?')
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = collections.filter(collection => collection._id !== id);
                    setCollections(remaining)
                })
        }
    }
    return (
        <div className='w-50 mx-auto mt-5'>
            <PageTitle title='Manage inventory'></PageTitle>
            <h2 className='mb-4'>Total Inventory: {collections.length}</h2>
            {
                collections.map(collection => <div key={collection._id}>
                    <h5 className='m-0 border py-2'><img width={50} src={collection.image} className="me-3" alt="" />{collection.name} <button onClick={() => handleDelete(collection._id)} className="btn-danger ms-3">X</button></h5>
                </div>)
            }
            
            <Link to='/addInventory' type="button" className="btn btn-outline-secondary mt-4 px-4">Add Inventory</Link>
        </div>
    );
};

export default ManageProduct;