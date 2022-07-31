import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';


class SearchForm extends Component {
    onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.cityName.value)
        this.props.handleSearch(e.target.cityName.value)
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Group className="mb-3" controlId="cityName">
                    <Form.Label>Search Cities</Form.Label>
                    <Form.Control type="text" placeholder="Enter city name" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Exlpore!
                </Button>
            </Form>
        );
    }
}

export default SearchForm;