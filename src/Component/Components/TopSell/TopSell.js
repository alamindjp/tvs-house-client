import React from 'react';
import img from './../../../images/tvs-apache-4v-160.png'

const TopSell = () => {
    return (
        <div className="container">
            <h1 className='mt-5'>Top Sells</h1>
            <hr className='w-25 mx-auto m-1 p-1 rounded-circle' />
            <div className='row align-items-center justify-content-around'>
                <div className="col-12 col-md-4">
                    <h4>TVS Apache RTR 160 4V Specification</h4>
                    <p className='lh-base custom-text'><span className='fw-bold'>TVS Apache RTR 160 4V</span>Smart Connect ABS. This Motorcycle Engine Type is Four-stroke, Oil-cooled, Single cylinder. The Motorcycle Powered by a 159.7 cc engine. It's Top Speed 135 kmph and 35-40 kmpl Mileage (Approx). TVS Apache RTR 160 4V ABS Bike Brand New Price is $2203. This bike is available in RACING RED, METALLIC BLUE, KNIGHT BLACK Colors.</p>
                </div>
                <div className="col-12 col-md-6">
                    <img src={img} className="card-img-top img-fluid" alt="..." />
                </div>
            </div>
        </div>
    );
};

export default TopSell;