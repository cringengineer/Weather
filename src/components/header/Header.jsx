import style from './Header.module.css'
import {useEffect, useState} from "react";


const Header = () => {
    let [time,setTime] = useState(new Date().toLocaleTimeString());

    useEffect(()=> {
        setInterval(()=> {
            setTime(new Date().toLocaleTimeString())
        },1000)
    },[])

    return (
        <div className={style.header}>
            <h1 className={style.weather}>Weather</h1>
            <h2 className={style.time}>{time}</h2>
        </div>
    );
};

export default Header;