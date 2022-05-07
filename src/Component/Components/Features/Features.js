import React from 'react';
import img from './../../../images/TVS-zepplin.png'

const Features = () => {
    return (
        <div className="container">
            <h1 className='mt-5'>TVS Features</h1>
            <hr className='w-25 mx-auto m-1 p-1 rounded-circle' />
            <div className='row align-items-center justify-content-around mt-5'>
                <div className="col-12 col-md-6">
                    <img src={img} className="card-img-top img-fluid" alt="..." />
                </div>
                <div className="col-12 col-md-4">

                    <h4>Key Specification of Zeppelin R STD</h4>
                    <table className="table table-striped border">
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td colSpan="2">Motor Power</td>
                                <td>1200 W</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td colSpan="2">Battery Type</td>
                                <td>Li-ION</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colSpan="2">Fuel Type</td>
                                <td>Electric</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td colSpan="2">ABS</td>
                                <td>Dual Channel</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td colSpan="2">Wheels Type</td>
                                <td>Spoke</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td colSpan="2">Tyre Type</td>
                                <td>Tubeless</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Features;