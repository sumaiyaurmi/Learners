import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Layouts/Navbar';
import Footer from '../Layouts/Footer';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto font-poppins'>
            <Navbar></Navbar>

<Outlet></Outlet>
<Footer></Footer>
        </div>
    );
};

export default Root;