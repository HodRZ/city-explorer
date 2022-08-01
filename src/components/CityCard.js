import React, { Component } from 'react';
import { Card } from 'react-bootstrap';


class CityCard extends Component {


    render() {

        return (
            <Card>
                <Card.Img variant="top" src={this.props.map} />
                <Card.Body>
                    {this.props.city.cityName}
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Latitude:{this.props.city.lat}, Longitude:{this.props.city.lon}</small>
                </Card.Footer>
            </Card>
        );
    }
}

export default CityCard;