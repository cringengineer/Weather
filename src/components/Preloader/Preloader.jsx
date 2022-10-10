import React from 'react';
import preloader from './Gear-0.6s-200px.svg'
import style from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={style.preloader__container}>
            <img className={style.preloader} src={preloader} alt='Preloader'></img>
        </div>
    );
};

export default Preloader;