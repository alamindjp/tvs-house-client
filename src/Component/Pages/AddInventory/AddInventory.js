import React from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';

const AddInventory = () => {
const handleAddProduct=event =>{
    event.preventDefault();
    const name = event.target.name.value;
    const image = event.target.image.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const supplier = event.target.supplier.value;
    const about = event.target.about.value;
    
    const user = {name,image,price,quantity,supplier,about}

    fetch('https://glacial-castle-51948.herokuapp.com/addProduct',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data=> ('success', data))

}
    return (
        <div className='mt-5'>
            <PageTitle title='Add Inventory'></PageTitle>
            <form className='w-50 mx-auto' onSubmit={handleAddProduct}>
                <div className="form-group row my-2">
                    <div className="col-sm-10 mx-auto">
                        <input type="name" name="name" className="form-control form-control-lg" placeholder="Product Name" />
                    </div>
                </div>
                <div className="form-group row my-2">
                     <div className="col-sm-10 mx-auto">
                        <input type="text" name='image' className="form-control form-control-lg" placeholder="Image Link" />
                    </div>
                </div>
                <div className="form-group row my-2">
                    <div className="col-sm-10 mx-auto">
                        <input type="number" name="price" className="form-control form-control-lg" placeholder="Price" />
                    </div>
                </div>
                <div className="form-group row my-2">
                    <div className="col-sm-10 mx-auto">
                        <input type="number" name="quantity" className="form-control form-control-lg" placeholder="Quantity" />
                    </div>
                </div>
                <div className="form-group row my-2">
                    <div className="col-sm-10 mx-auto">
                        <input type="text" name="supplier" className="form-control form-control-lg" placeholder="Supplier Name" />
                    </div>
                </div>
                <div className="form-group row my-2">
                    <div className="col-sm-10 mx-auto">
                        <textarea type="text" name="about" className="form-control form-control-lg" placeholder="Product Description" />
                    </div>
                </div>
                <input className="btn btn-primary" type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddInventory;