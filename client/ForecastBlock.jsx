import React from "react";
import styles from "./ForecastBlock.css";
import DayForecast from "./DayForecast.jsx";

const ForecastBlock = props => {
    return (
        <div className={styles.forecast}>
            {props.forecast.map((day, index) => (
                <DayForecast dayForecast={day} selectDate={props.selectDate} key={index}></DayForecast>
            ))}
        </div>
    )
}

export default ForecastBlock;