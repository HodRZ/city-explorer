import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import CityList from './components/CityList';
import MapDisplay from './components/MapDisplay';
import Swal from 'sweetalert2';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapData: '',
      selectedCity: {},
    }
  }

  handleSearch = async (cityName) => {
    const map = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONAPI_KEY}&q=${cityName}&format=json`).catch(function (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Check the city name',
        icon: 'error',
        confirmButtonText: '✔'
      })
    });
    const searchData = map.data.reduce((searchData, city) => {
      searchData.push({ cityName: city.display_name, lat: city.lat, lon: city.lon })
      return searchData
    }, [])
    const weatherData = await axios.get(`http://localhost:3001/weather?lon=${searchData[0].lon}&lat=${searchData[0].lat}&searchQuery=${cityName}`).catch(function (error) {
      Swal.fire({
        title: 'Sorry !',
        text: 'No data for selected city',
        icon: 'error',
        confirmButtonText: '✔'
      })
    });
    this.setState({
      mapData: searchData[0],
      weather: weatherData,
      selectedMap: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONAPI_KEY}&center=${searchData[0].lat},${searchData[0].lon}&zoom=12`
    })
  }

  render() {
    return (
      <>
        <SearchForm handleSearch={this.handleSearch} />
        {this.state.mapData && this.state.weather &&
          <CityList cityData={this.state.mapData} showMap={this.showMap} weather={this.state.weather} mapData={this.state.selectedMap} />
        }
        <MapDisplay selectedCity={this.state.selectedCity} onHide={this.onMapHide} show={this.state.showMap} selectedMap={this.state.selectedMap} />
      </>
    );
  }
}

export default App;