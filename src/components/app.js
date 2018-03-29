import React, { Component } from 'react';
import Heading from './heading';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <Heading />
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
