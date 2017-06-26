import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchWeather } from './action/action'

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
      console.log("HERE", place)
    }
  }

  render() {
    return (
      <div>
      <h1>Hello, world.</h1>

      <div className="action">
        <input type="text" className="placeInput" ref='place'/>
        <button type="button"
                className="findButton btn btn-info"
                onClick={this.findWeather}>
          Find
        </button>
      </div>


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
