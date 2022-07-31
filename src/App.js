import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import Form from './components/form';
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
      return <Form cityData={city} search={this.state.handleSearch} />
    }
  }
  handleSearch = async (cityName) => {
    const map = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONAPI_KEY}&q=${cityName}&format=json`)

    this.setState({
      mapData: [...map.data]
    })
    console.log(map.data)
  }
  render() {
    return (
      <>
        {
          <Form handleSearch={this.handleSearch} />
        }
      </>
    );
  }
}

export default App;