import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import {withRouter} from 'react-router';

class CustomNavbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const {location: {pathname}} = this.props;
        return (
            <Navbar color="faded" light expand="md">
                <NavbarBrand href="/">Timechi</NavbarBrand>
                <NavbarToggler onClick={() => this.toggle()}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {
                            pathname !== '/register' &&
                            <NavItem>
                                <NavLink href="/register">Register</NavLink>
                            </NavItem>
                        }
                        {
                            pathname !== '/login' &&
                            <NavItem>
                                <NavLink href="/login">Login</NavLink>
                            </NavItem>
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default withRouter(CustomNavbar);