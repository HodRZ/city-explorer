import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';


class CityCard extends Component {
    showMap = () => {
        this.props.showMap(this.props.city)
    }

    render() {
        return (
            <Card>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                    {/* <Card.Title>{city.cityName}</Card.Title> */}
                    {this.props.city.cityName}
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" onClick={this.showMap}>Show Map</Button>{'   '}
                    <small className="text-muted">Latitude:{this.props.city.lat}, Longitude:{this.props.city.lon}</small>
                </Card.Footer>
            </Card>
        );
    }
}

export default CityCard;