import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import CityList from './components/CityList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapData: []
    }
  }
  handleSearch = async (cityName) => {
    const map = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONAPI_KEY}&q=${cityName}&format=json`)

    const searchData = map.data.reduce((searchData, city) => {
      searchData.push({ cityName: city.display_name, lat: city.lat, lon: city.lon })
      // console.log()
      return searchData
    }, [])
    this.setState({
      mapData: searchData
    })
    // console.log(mapData)
  }
  render() {
    console.log(this.state.mapData)
    return (
      <>
        {
          <SearchForm handleSearch={this.handleSearch} />
        }
        <CityList cityData={this.state.mapData} />
      </>
    );
  }
}

export default App;