import React from "react";
import ForecastBlock from './ForecastBlock.jsx';
import HourlyForecastBlock from './HourlyForecastBlock.jsx';
import data from '../dummyWeather';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: data,
            currentDate: null
        }

        this.selectDate = this.selectDate.bind(this);
    }

    /*
        - Create a grid item centered horizontally to display 5 day forecast (5-Day Block Component)
            - in component, have items auto align into columns and not rows
            - map over each input of day and create day forecast component
        
        - Create component for single day (Day Forecast Component)
            - in single day block, have the following grid items
                - day of the week center horizontally inside component
                - picture of relevant weather centered horizontally
                - high and low temperate sharing block at bottom, also centered hoizontally
    */

    selectDate(date) {
        let n = this.state.forecast.length - 1;

        while (n >= 0) {
            if (this.state.forecast[n].date === date) {
                this.setState({
                    currentDate: this.state.forecast[n].hourly
                })
                n--
            } else {
                n--
            }
        }
    }

    render() {
        let hourBlock;

        if (this.state.currentDate) {
            hourBlock = <HourlyForecastBlock selectedDate={this.state.currentDate}></HourlyForecastBlock>
        } else {
            hourBlock = <div></div>
        }

        return (
            <div>
               <ForecastBlock forecast={this.state.forecast} selectDate={this.selectDate}></ForecastBlock>
               {hourBlock}
            </div>
        )
    }
}

export default App;