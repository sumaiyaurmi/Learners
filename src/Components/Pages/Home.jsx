import React from 'react';
import Banner from '../Layouts/Banner';
import Faq from '../Layouts/Faq';
import Feature from '../Layouts/Feature';
import Test from './Test';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Feature></Feature>
            <Faq></Faq>
            <Test></Test>
        </div>
    );
};

export default Home;