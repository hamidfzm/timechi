import React, {Component} from 'react';
import {Jumbotron, Container, Row, Col} from 'reactstrap';

import Navbar from '../Navbar';

class CustomRoute extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Container>
                    <Row>
                        <Col>
                            <Jumbotron>
                                <h1 className='display-3'>Timechi</h1>
                                <p className='lead'>Timechi is a time tracking service.</p>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default CustomRoute;
