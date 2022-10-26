import React from 'react';
import logo from "../../pic/logo512.png";
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo} alt="logo"/>
        </header>
    );
};

