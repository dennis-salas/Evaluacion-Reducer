import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const CardMovie = () => {

    const { pelicula } = useSelector(store => store.Adicionar)

    console.log(pelicula);

    return (
        <Container className='mt-5'>
            <Row xs={1} className="g-4">
                <h1>Pelicula Agregadas</h1>
                {
                    pelicula.map(ele => (
                        <Card className="w-25 mx-4">
                            <Card.Img variant='top' src={ele.image} className="img-fluid p-2" />
                            <Card.Body>
                                <Card.Title>{ele.nombrePelicula}</Card.Title>
                                <Card.Text>{ele.sipnosis}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                }
            </Row>
        </Container>
    )
}

export default CardMovie
