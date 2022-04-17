import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ serve }) => {
    const navigate = useNavigate();
    const {price, picture, name, about} = serve;
    const handleCheckOut = ()=>{
            navigate('/checkout')
    }
    return (
        <div className='breakfast'>

            <div className="cart">
                <img style={{height: '150px', width: '150px', borderRadius: '10px', objectFit: 'cover'}} className='cart-img' src={picture} alt="" />
                <h5>{name}</h5>
                <p><small>{about}</small></p>
                <h4>{price}</h4>
                <button onClick={handleCheckOut} className='btn btn-primary p-2'>check out</button>
            </div>
        </div>
    );
};

export default Service;