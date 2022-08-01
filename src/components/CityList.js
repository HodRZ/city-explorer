import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import CityCard from './CityCard';



class CityList extends Component {
    render() {
        return (
            <>
                <Row xs={1} md={2} className="g-4">


                    <Col>
                        <CityCard city={this.props.cityData} map={this.props.mapData} />
                    </Col>


                </Row>
            </>
        );
    }
}

export default CityList;

