import React, { Component } from 'react';
import { Modal, Image, Button } from 'react-bootstrap';


class MapDisplay extends Component {
    render() {
        return (
            <Modal show={this.props.show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.selectedCity.cityName}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={this.props.selectedMap} alt={this.props.selectedCity.cityName} fluid />
                    <p>
                        {this.props.selectedCity.cityName}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide} >Close</Button>
                </Modal.Footer>
            </Modal>

        );
    }
}

export default MapDisplay;