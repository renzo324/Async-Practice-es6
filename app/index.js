import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const api_key= '11ec91bd52bf60e23b0b9f3020b91b3c';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            city:'San Francisco',
            description: ''
        }
    }
    componentDidMount(){
        this.grabWeather(this.state.city);
    }
    grabWeather(city){
        fetch(`http://api.openweathermap.org/data/2.5/weather?APPID+${api_key}&q=${city}`)
            .then(response => response.json())
            .then(json => {
                this.setState({description: json.weathes[0].description})
            });
    }
    render(){
        return(
            `<h1> Weather report for {this.state.city} </h1>
            <h2>{this.state.description}</h2>`
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));