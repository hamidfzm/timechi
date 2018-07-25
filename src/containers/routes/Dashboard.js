import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    ListGroup,
    ListGroupItem,
    Button,
    Input
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons'

import Navbar from '../Navbar';

class CustomRoute extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Container>
                    <Card className='mb-3'>
                        <CardBody>
                            <Row>
                                <Col md={8}>
                                    <Input placeholder='What are you working on?'/>

                                </Col>
                                <Col md={2} className='p-2 text-center'>
                                    00:00:00
                                </Col>
                                <Col md={2}>
                                    <Button className='btn-link border-0'>
                                        <FontAwesomeIcon icon={faPlay}/>
                                    </Button>
                                </Col>

                            </Row>
                        </CardBody>
                    </Card>
                    <Card className='mb-3'>

                        <CardBody>
                            <CardTitle>
                                <Row>
                                    <Col md={10}>
                                        Fir, 11 September
                                    </Col>
                                    <Col md={2}>
                                        00:45:00
                                    </Col>
                                </Row>
                            </CardTitle>
                            <ListGroup>

                                <ListGroupItem action>
                                    <Row>
                                        <Col md={7}>
                                            Working on test
                                        </Col>
                                        <Col md={2}>
                                            11:45 - 12:30
                                        </Col>
                                        <Col md={2}>
                                            00:45:00
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                                <ListGroupItem action>
                                    <Row>
                                        <Col md={7}>
                                            Working on test
                                        </Col>
                                        <Col md={2}>
                                            11:45 - 12:30
                                        </Col>
                                        <Col md={2}>
                                            00:45:00
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                                <ListGroupItem action>
                                    <Row>
                                        <Col md={7}>
                                            Working on test
                                        </Col>
                                        <Col md={2}>
                                            11:45 - 12:30
                                        </Col>
                                        <Col md={2}>
                                            00:45:00
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                            </ListGroup>
                        </CardBody>

                    </Card>

                </Container>
            </div>
        );
    }
}

export default CustomRoute;