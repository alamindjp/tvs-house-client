import React from 'react';
import { Link } from 'react-router-dom';
import useCollection from '../../Components/Hooks/useCollection';
import PageTitle from '../../Components/PageTitle/PageTitle';
import Product from '../../Components/product/Product';

const Inventories = () => {
    const [collections] = useCollection([])
    return (
        <div className="mt-5">
            <PageTitle title='Inventories'></PageTitle>
            <div className='container'>
                <h3>Total Inventory: {collections.length}</h3>
                <hr className='w-25 mx-auto m-1 p-1 rounded-circle' />
                <Link to='/addInventory' type="button" className="btn btn-outline-secondary mt-4 px-4">Add Inventory</Link>
                <div className="row d-flex">
                    {
                        collections.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Inventories;