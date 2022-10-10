import Content from "./Content";
import {useEffect, useState} from "react";
import axios from "axios";
import Preloader from "../Preloader/Preloader";


let URL = 'https://api.openweathermap.org/data/2.5/weather?q=Minsk&units=metric&APPID=5e303e9faa5d8d385f8f3508107739c6';

const ContentContainer = () => {

    const [weatherData, setWeatherData] = useState({});
    const [isPending, setPending] = useState(true)

    useEffect(() => {
        axios.get(URL)
            .then(data => setWeatherData(data.data))
            .then(res => setPending(false))
    }, []);


    return (
        <>
            {isPending ?
                <Preloader/>
                :
                <Content city={weatherData.name} description={weatherData.weather[0].description}
                         clouds={weatherData.clouds.all} icon={weatherData.weather[0].icon}
                         humidity={weatherData.main.humidity} pressure={weatherData.main.pressure}
                         temp={weatherData.main.temp} feelsLike={weatherData.main.feels_like}
                         wind={weatherData.main.speed}/>}
        </>


    )
}

export default ContentContainer