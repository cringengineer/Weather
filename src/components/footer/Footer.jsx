import React from 'react';
import style from './Footer.module.css'


const Footer = () => {
    return (
        <div className={style.footer__container}>
            <a className={style.git__link} href={'https://github.com/cringengineer'}>©2022 cringengineer</a>
        </div>
    );
};

export default Footer;