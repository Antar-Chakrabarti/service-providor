import React from 'react';
import ContactMe from '../ContactMe/ContactMe';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <ContactMe/>
        </div>
    );
};

export default Home;