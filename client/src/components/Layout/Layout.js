import React from 'react';
import style from './Layout.module.scss';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children }) => {
    return (
        <div className={style.container}>
            <div className={style.Navbar}>
                <Navbar />
            </div>
            <div className={style.body}>
                {children}
            </div>
        </div>
    )
}

export default Layout