import { useEffect, useState } from 'react';
import styles from './Weather.module.css'

const APIKey = "c2cfe6dab30e467c887115025260305";
const PartURL = "http://api.weatherapi.com/v1/current.json?";

async function GetWeather(city) {
    const url = `${PartURL}key=${APIKey}&q=${city}`;
    let weather;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        weather = result.current;

        // console.log(`Temperatura w ${city}: ${weather.temp_c}`);
        // document.getElementById("icon").src = `https:${weather.condition.icon}`;
        // document.getElementById("demo").innerHTML = `${city}: ${weather.temp_c}`;


    } catch (error) {
        console.error(error.message);
        throw error;
    }

    return weather
}

export default function Weather() {
    const [city, setCity] = useState("Warszawa");
    const [weather, setWeather] = useState("");
    const [iconSrc, setIconSrc] = useState();

    useEffect(() => {
        async function startFetching() {
            if (!ignore) {
                console.log("------Use Effect--------")
                await FindWeather()
            }
        }

        let ignore = false;
        startFetching();
        return () => {
            ignore = true;
        }
    }, [])

    function cityChanded(newCity) {
        setCity(newCity);
    }

    async function FindWeather() {
        try {
            const weatherObj = await GetWeather(city);
            setIconSrc(`https:${weatherObj.condition.icon}`);
            setWeather(`${city}: ${weatherObj.temp_c}`);
        }
        catch (e) {
            setWeather("błąd");
            setIconSrc("");
        }
    }


    return (
        <section>
            <input value={city} onChange={e => cityChanded(e.target.value)}></input>
            <button onClick={() => FindWeather()}>Szukaj</button>
            <p id="demo">{weather}</p>
            <img id="icon" src={iconSrc} />
        </section>
    )
}