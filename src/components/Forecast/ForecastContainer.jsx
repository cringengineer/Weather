import React, {useEffect, useState} from 'react';
import axios from "axios";
import Forecast from "./Forecast";
import Preloader from "../Preloader/Preloader";


let URL = "https://api.openweathermap.org/data/2.5/forecast?q=Minsk&units=metric&APPID=5e303e9faa5d8d385f8f3508107739c6"

const ForecastContainer = () => {

    const [forecastData, setForecastData] = useState({});
    const [isPending, setPending] = useState(true)

    useEffect(() => {
        axios.get(URL)
            .then(data => setForecastData(data.data.list))
            .then(res => setPending(false))
    }, []);

console.log(forecastData)
    return (
        <>
            {isPending ? null
                :
                <Forecast days={forecastData}/>
            }
        </>

    );
};

export default ForecastContainer;