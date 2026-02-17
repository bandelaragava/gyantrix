import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SparkleCanvas from './SparkleCanvas';

const Layout = () => {
    return (
        <>
            <SparkleCanvas />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
