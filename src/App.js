import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapData: []
    }
  }
  renderMap = (data) => {
    for (let city in data) {
      return <SearchForm cityData={city} search={this.state.handleSearch} />
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
    // console.log(map.data)
  }
  render() {
    console.log(this.state)
    return (
      <>
        {
          <SearchForm handleSearch={this.handleSearch} />
        }
      </>
    );
  }
}

export default App;