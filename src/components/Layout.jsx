import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FloatingWidgets from './FloatingWidgets';
import SparkleCanvas from './SparkleCanvas';

const Layout = () => {
    const location = useLocation();
    const isAuthPage = location.pathname === '/login' || location.pathname === '/forgot-password' || location.pathname === '/signup';

    return (
        <>
            <SparkleCanvas />
            {!isAuthPage && <Header />}
            <main>
                <Outlet />
            </main>
            {!isAuthPage && <Footer />}
            {!isAuthPage && <FloatingWidgets />}
        </>
    );
};

export default Layout;
