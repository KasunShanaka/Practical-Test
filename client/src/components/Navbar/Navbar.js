import React from 'react';
import style from './Navbar.module.scss';

//MUI imports
import Avatar from '@mui/material/Avatar';

//image imports
import logo from '../../img/logo.png';

const Navbar = () => {
    const AvatarImage = "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

    return (
        <div className={style.container}>
            <div className={style.controls}>
                <div className={style.icon}>
                    <i className='feather-settings'></i>
                </div>
                <div className={style.icon}>
                    <i className='feather-message-circle'></i>
                </div>
                <div className={style.icon}>
                    <i className='feather-bell'></i>
                </div>
            </div>
            <div className={style.logo}>
                <img src={logo} alt="" />
            </div>
            <div className={style.user}>
                <div className={style.userName}>
                    David Smith
                </div>
                <div className={style.avatar}>
                    <Avatar alt="David Smith" src={AvatarImage} />
                </div>
            </div>
        </div>
    )
}

export default Navbar;