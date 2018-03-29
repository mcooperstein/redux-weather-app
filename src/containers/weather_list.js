import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData){
    const name=cityData.city.name;
    // const temps = cityData.list.map(function(weather){
    //   return weather.main.temp;
    // })
    const temps = cityData.list.map(weather=>weather.main.temp);
    const pressure = cityData.list.map(weather=>weather.main.pressure);
    const humid = cityData.list.map(weather=>weather.main.humidity);
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;
    // ES6 Destructuring
    const {lon,lat} = cityData.city.coord;
    // console.log(temps);
    return (
      <tr key={name}>
        <td id='city-name'><GoogleMap lon={lon} lat={lat}/></td>
        <td>
          <Chart data={temps} color="blue" units="F"/>
        </td>
        <td>
          <Chart data={pressure} color="green" units="hPa"/>
        </td>
        <td>
          <Chart data={humid} color="red" units="%"/>
        </td>
      </tr>
    )
  }
  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// function mapStateToProps(state){
//   return { weather: state.weather };
// }
// function mapStateToProps({weather}){
//   return { weather: weather };
// }
function mapStateToProps({weather}){
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
