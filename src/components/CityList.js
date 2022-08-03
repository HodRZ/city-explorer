import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import CityCard from './CityCard';
import Movies from './Movies';




class CityList extends Component {
    render() {
        return (
            <>
                <Row xs={1} md={2} className="g-4">

                    {/* <Col> */}
                    <CityCard city={this.props.cityData} map={this.props.mapData} weather={this.props.weather} />
                    {/* </Col> */}
                </Row>
                <Row xs={1} md={3} className="g-4">
                    {/* <Col> */}
                    <Movies moviesData={this.props.moviesData} />
                    {/* </Col> */}


                </Row>
            </>
        );
    }
}

export default CityList;

