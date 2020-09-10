import React from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import slide01 from "../images/carousel/img-1.jpg";
import slide02 from "../images/carousel/img-2.jpg";
import slide03 from "../images/carousel/img-3.jpg";

export default function Home() {
    return (
        <div className='home'>
            <Container>
                <Row>
                    <Col>
                        <h1>Home</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-lg-12">
                        <Carousel>
                            <Carousel.Item>
                                <div className="thumbnail">
                                    <img className="d-block w-100" src={slide01} alt="First slide" />
                                </div>
                                
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <h4>Nulla vitae elit libero, a pharetra augue mollis interdum.</h4>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={slide02} alt="Third slide" />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={slide03} alt="Third slide"/>

                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <h4>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h4>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
