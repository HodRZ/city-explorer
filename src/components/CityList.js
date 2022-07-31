import React, { Component } from 'react';
import { Card, Col, Row } from 'react-bootstrap';


class CityList extends Component {
    render() {
        return (
            <>
                <Row xs={1} md={3} className="g-4">

                    {this.props.cityData.map((city) => {
                        return (<Col>
                            <Card>
                                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                                <Card.Body>
                                    {/* <Card.Title>{city.cityName}</Card.Title> */}
                                    {city.cityName}
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Latitude:{city.lat}, Longitude:{city.lon}</small>
                                </Card.Footer>
                            </Card>
                        </Col>)
                    })

                    }

                </Row>
            </>
        );
    }
}

export default CityList;

