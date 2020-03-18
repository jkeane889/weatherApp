import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days: []
        }
    }

    // On componentDidMount request weather data from API

    // on selection of element, show weather as a drop down list for day specified

    render() {
        return (
            <div>
               <h1>Hello!</h1>
            </div>
        )
    }
}

export default App;