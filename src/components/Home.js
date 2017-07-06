import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchWeather } from '../action/action'
import Status from './Status'

class Home extends Component {

  constructor(props){
    super(props);
    this.findWeather = this.findWeather.bind(this);
  }
  findWeather(){
    if(this.refs.place.value !== ''){
      let place = this.refs.place.value;
      const { dispatch } = this.props;
      dispatch(fetchWeather(place))
    }
  }

  render() {

    return (
      <div>
      <h3>Enter a place below to get the current weather - </h3>

      <div className="action">
        <input type="text" className="placeInput" ref='place'/>
        <button type="button" className="btn btn-info findButton"
                className="findButton btn btn-info"
                onClick={this.findWeather}>
          Find
        </button>
      </div>
      { this.props.details.weather !== undefined ?
        <Status data={this.props.details.weather[0].main} name={this.props.details.name} />
        :
        null
      }


      </div>
    );
  }
}
function mapStateToProps(state){
  const { weather } = state;
  const { isFetching, details } = weather ||
    {
      isFetching: true,
      details: { payload: '' }
  }
  return {
    isFetching,
    details
  }
}
export default connect(mapStateToProps)(Home)
