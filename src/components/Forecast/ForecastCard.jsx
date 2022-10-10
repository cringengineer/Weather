import React from 'react';
import style from './ForecastCard.module.css'



const ForecastCard = (props) => {
    let weekdayName = new Date(props.cardNumb.dt_txt).toLocaleString('eng', {weekday: 'long'});

    return (
        <div className={style.card__container}>
            <p className={style.week__day}>{weekdayName}</p>
            <p className={style.weather__info}>{props.cardNumb.dt_txt.substring(10,16)}</p>
            <p className={style.temp}>{`${Math.floor(props.cardNumb.main.temp)} °C`}</p>
            <img className={style.icon} src={`http://openweathermap.org/img/wn/${props.cardNumb.weather[0].icon}@2x.png`}></img>
            <p className={style.description}>{props.cardNumb.weather[0].description}</p>
            <p className={style.weather__info}>{`Humidity: ${props.cardNumb.main.humidity} %`}</p>
            <p className={style.weather__info}>{`Pressure: ${props.cardNumb.main.pressure} hPa`}</p>
        </div>
    );
};

export default ForecastCard;