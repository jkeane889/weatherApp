import React from "react";

const HourlyForecast = props => {
    return (
        <div>
            <h5>{"Expected Temperature: " + props.hour}</h5>
        </div>
    )
}

export default HourlyForecast;