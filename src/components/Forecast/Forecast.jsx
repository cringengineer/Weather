import React from 'react';
import ForecastCard from "./ForecastCard";
import style from './Forecast.module.css'


const Forecast = (props) => {
    return (
        <div className={style.forecast__container}>
            {props.days.map(card => {
                return <ForecastCard cardNumb={card} key={card.dt}/>
            })}
        </div>
    );
};

export default Forecast;