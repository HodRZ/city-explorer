import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import CityCard from './CityCard';



class CityList extends Component {
    render() {
        return (
            <>
                <Row xs={1} md={2} className="g-4">

                    {this.props.cityData.map((city) => {
                        return (<Col>
                            <CityCard city={city} showMap={this.props.showMap} />
                        </Col>)
                    })

                    }

                </Row>
            </>
        );
    }
}

export default CityList;

