import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';

const RootLayout = () => {
    return (
        <div className='bg-gradient-to-tr from-blue-50 to-white'>
            <Navbar></Navbar>
            <main  className='max-w-7xl mx-auto '>
            <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;