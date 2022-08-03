import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class Movies extends Component {
    render() {
        return (
            <>
                {
                    this.props.moviesData.map((movie, idx) => {
                        if (movie.poster !== null) {
                            return <>
                                <Card style={{ width: '20rem' }}>
                                    <Card.Img variant="top" src={movie.poster} />
                                    <Card.Body>
                                        <Card.Title>{movie.title}</Card.Title>
                                        <Card.Text>
                                            {movie.overview}
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </>
                        } else return <> </>
                    })
                }
            </>
        );
    }
}

export default Movies;