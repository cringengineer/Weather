import React from 'react';
import style from './Content.module.css'
import thermometer from './../../icons/thermometer.png'
import humidity from './../../icons/humidity.png'
import pressure from './../../icons/pressure-gauge.png'
import wind from './../../icons/cloud.png'
import cloudness from './../../icons/cloudness.png'

const Content = (props) => {

    let iconURL = `http://openweathermap.org/img/wn/${props.icon}@2x.png`

    return (

        <div className={style.content__container}>
           <div className={style.content}>
               <div className={style.left}>
                   <p className={style.temp}>{Math.floor(props.temp)} °C</p>
                   <img className={style.weather__img} src={iconURL}></img>
                   <p className={style.city}>{props.city}</p>
                   <p className={style.description}>{props.description}</p>
               </div>
               <div className={style.right}>
                   <div className={style.right__info}>
                       <img className={style.icon} src={thermometer} alt='thermometer'></img>
                       <p className={style.weather__info}>Feels like: {Math.floor(props.feelsLike)} °C</p>
                   </div>
                   <div className={style.right__info}>
                       <img className={style.icon} src={cloudness} alt='cloudness'></img>
                       <p className={style.weather__info}>Cloudness: {Math.floor(props.clouds)} %</p>
                   </div>
                   <div className={style.right__info}>
                       <img className={style.icon} src={humidity} alt='humidity'></img>
                       <p className={style.weather__info}>Humidity: {Math.floor(props.humidity)} %</p>
                   </div>
                   <div className={style.right__info}>
                       <img className={style.icon} src={pressure} alt='pressure'></img>
                       <p className={style.weather__info}>Pressure: {Math.floor(props.pressure)} hPa</p>
                   </div>
                   <div className={style.right__info}>
                       <img className={style.icon} src={wind} alt='wind'></img>
                       <p className={style.weather__info}>Wind speed: {Math.floor(props.feelsLike)} meter/sec</p>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Content;