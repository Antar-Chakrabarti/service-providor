import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
    return (
        <div className='contact-area'>
            <h2 className='text-primary text-center'>Contact with me</h2>
            <div className="form">
                <input type="text" placeholder='Your name'/>
                <input type="email" placeholder='Your Email'/>
                <textarea name="message" id="" cols="30" rows="10" placeholder='Your massege'></textarea>
                <input className='btn btn-primary' type="submit" value="Send" />
            </div>
        </div>
    );
};

export default ContactMe;