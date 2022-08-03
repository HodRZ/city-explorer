import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Weather from './weather';



class CityCard extends Component {


    render() {
        return (
            <Card style={{ width: '70%' }}>
                <Card.Img variant="top" src={this.props.map} />
                <Card.Body>
                    {this.props.city.cityName}
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Latitude:{this.props.city.lat}, Longitude:{this.props.city.lon}</small><br />
                    {
                        this.props.weather.data.map((date) => {
                            return <Weather date={date} />
                        })
                    }

                </Card.Footer>
            </Card>
        );
    }
}

export default CityCard;