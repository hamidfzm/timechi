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

import {Login as LoginFrom} from '../forms';
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
                                <CardHeader>Login</CardHeader>
                                <CardBody>
                                    <LoginFrom onSubmit={onSubmit}/>
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
