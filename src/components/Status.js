import React, { Component } from 'react';

export default class Status extends Component {

  constructor(props){
    super(props);
  }

  render() {
    let weatherStatus = '';
    if(this.props.data === 'Clear'){
      weatherStatus = 'sunny';
    }
    else if(this.props.data === 'Rain'){
      weatherStatus = 'rain';
    }
    else if(this.props.data === 'Snow'){
      weatherStatus = 'snow';
    }
    else if(this.props.data === 'Clouds'){
      weatherStatus = 'clouds';
    }
    else if(this.props.data === 'Mist'){
      weatherStatus = 'mist';
    }
    else if(this.props.data === 'Thunderstorm'){
      weatherStatus = 'thunderstorm';
    }
    else if(this.props.data === 'Cloudy'){
      weatherStatus = 'cloudy';
    }
    else if(this.props.data === 'Haze'){
      weatherStatus = 'haze';
    }
    else if(this.props.data === 'Scattered Clouds'){
      weatherStatus = 'scatteredClouds';
    }
    else if(this.props.data === 'Broken Clouds'){
      weatherStatus = 'brokenClouds';
    }
    else if(this.props.data === 'Few Clouds'){
      weatherStatus = 'fewClouds';
    }
    return (
      <div className="status">
        <p> {`The current weather in ${this.props.name} is`} </p>
        <div className={weatherStatus}></div>
      </div>
    );
  }
}
