import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
} from 'reactstrap';

import {Login as LoginFrom} from '../forms';
import Navbar from '../Navbar';

class CustomRoute extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Container>
                    <Row>
                        <Col md={{size: 6, offset: 3}}>
                            <Card>
                                <CardHeader>Login</CardHeader>
                                <CardBody>
                                    <LoginFrom/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default CustomRoute;