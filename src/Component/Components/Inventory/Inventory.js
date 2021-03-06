import React from 'react';
import { Link } from 'react-router-dom';
import useCollection from '../../Components/Hooks/useCollection';
import Product from '../../Components/product/Product';

const Inventory = () => {
    const [collections] = useCollection([])
    return (
        <div className="mt-5">
            <div className='container'>
                <h3>Total Inventory: {collections.length}</h3>
                <hr className='w-25 mx-auto m-1 p-1 rounded-circle' />
                <div className="row d-flex">
                    {
                        collections.slice(0, 6).map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
            <Link to='/inventories' type="button" className="btn btn-outline-secondary mt-4 px-4">All Inventory</Link>
        </div>
    );
};

export default Inventory;