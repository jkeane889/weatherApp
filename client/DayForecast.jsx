import React from "react";
import styles from "./DayForecast.css";
import sunny from "../assets/sunny.png";
import cloudy from "../assets/cloudy.png";
import partlyCloudy from "../assets/partlyCloudy.png";
import showers from "../assets/showers.png";
import thunderStorms from "../assets/thunderStorms.png";

const DayForecast = props => {
    let image = null;
    let dateName = props.dayForecast.date.split('').slice(0, 3).join('');

    switch (props.dayForecast.description) {
        case "sunny":
            image = sunny;
            break;
        case "cloudy":
            image = cloudy;
            break;
        case "rain showers":
            image = showers;
            break;
        case "partly cloudy":
            image = partlyCloudy;
            break;
        case "thunder storms":
            image = thunderStorms;
            break;
        default:
            image = sunny
    }

    return (
        <div onClick={() => props.selectDate(props.dayForecast.date)} className={styles.dayforecast}>
            <h3 className={styles.dayname}>{dateName}</h3>
            <div className={styles.forecastimage}>
                <img src={image}></img>
            </div>
            <h6 className={styles.dayHigh}>{props.dayForecast.high + " F"}</h6>
            <h6 className={styles.dayLow}>{props.dayForecast.low  + " F"}</h6>
        </div>
    )
}

export default DayForecast;