import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
} from 'reactstrap';

import {Register as RegisterForm} from '../forms';
import Navbar from '../Navbar';
import {Login} from '../../actions';

class CustomRoute extends Component {

    render() {
        const {onSubmit} = this.props;

        return (
            <div>
                <Navbar/>
                <Container>
                    <Row>
                        <Col md={{size: 6, offset: 3}}>
                            <Card>
                                <CardHeader>Register</CardHeader>
                                <CardBody>
                                    <RegisterForm onSubmit={onSubmit}/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (values) => dispatch(Login(...values)),
    }
};

export default connect(
    null,
    mapDispatchToProps
)(CustomRoute);
