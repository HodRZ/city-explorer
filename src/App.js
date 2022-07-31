import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import CityList from './components/CityList';
import MapDisplay from './components/MapDisplay';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapData: [],
      showMap: false,
      selectedCity: {},
      selectedMap: ''
    }
  }
  handleSearch = async (cityName) => {
    const map = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONAPI_KEY}&q=${cityName}&format=json`)
    const searchData = map.data.reduce((searchData, city) => {
      searchData.push({ cityName: city.display_name, lat: city.lat, lon: city.lon })
      return searchData
    }, [])
    this.setState({
      mapData: searchData
    })
  }
  showMap = async (city) => {
    const selected = await axios.get(`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONAPI_KEY}&center=${city.lat},${city.lon}`)
    this.setState({
      showMap: true,
      selectedCity: city,
      selectedMap: selected

    })
  };
  onMapHide = () => {
    this.setState({
      showMap: false,
    })
  }
  render() {
    console.log(this.state)
    return (
      <>
        <SearchForm handleSearch={this.handleSearch} />
        <CityList cityData={this.state.mapData} showMap={this.showMap} />
        <MapDisplay selectedCity={this.state.selectedCity} onHide={this.onMapHide} show={this.state.showMap} selectedMap={this.state.selectedMap} />
      </>
    );
  }
}

export default App;