import './Services.css';
import React, { useEffect, useState } from 'react';
import Service from '../../../components/Service/Service';

const Services = () => {
    const [servicess, setServicess] = useState([]);
    useEffect(() => {
        fetch('breakfast.json')
            .then(res => res.json())
            .then(data => setServicess(data))
    }, [])
    return (
        <div className='services-area'>
            <h2 className='text-primary text-center mt-2'>Services: {servicess.length}</h2>
            <div className='services'>
                {
                    servicess.map((serve) => <Service
                        key={serve.id}
                        serve={serve}
                    />)
                }
            </div>
        </div>
    );
};

export default Services;