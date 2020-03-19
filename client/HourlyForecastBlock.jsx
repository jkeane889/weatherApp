import React from "react";
import HourlyForecast from './HourlyForecast.jsx';
import styles from './HourlyForecastBlock.css'

const HourlyForecastBlock = props => {
    return (
        <div className={styles.hourlyForecast}>
            {props.selectedDate.map((hour, index) => (
                <HourlyForecast hour={hour} key={index} />
            ))}
        </div>
    )
}

export default HourlyForecastBlock;