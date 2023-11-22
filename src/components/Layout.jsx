import React from 'react';
import {Outlet} from 'react-router-dom'
import Header from './Header';
import './../index.css'
const Layout = () => {
    return (
        <div className='App'>
            <Header/>
            <Outlet/>
        </div>
    );
}

export default Layout;
