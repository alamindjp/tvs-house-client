import React from 'react';
import useCollection from '../../Components/Hooks/useCollection';
import Product from '../../Components/product/Product';

const Inventory = () => {
    const [collections] = useCollection([])
    return (
        <div>
             <div className='container'>
                <h3>Total Collection {collections.length}</h3>
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

export default Inventory;