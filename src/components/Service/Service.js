import React from 'react';
import './Service.css';

const Service = ({ serve }) => {
    console.log(serve)
    const {price, picture, name, about} = serve;
    return (
        <div className='breakfast'>

            <div className="cart">
                <img className='cart-img' src={picture} alt="" />
                <h5>{name}</h5>
                <p><small>{about}</small></p>
                <h4>{price}</h4>
                <button className='btn btn-primary p-2'>check out</button>
            </div>
        </div>
    );
};

export default Service;