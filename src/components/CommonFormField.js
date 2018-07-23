import React, {Component} from 'react';
import {
    FormGroup,
    Label,
    Input,
    FormFeedback,
} from 'reactstrap';
import {Field} from 'redux-form';


class CustomComponent extends Component {

    render() {
        const {
            name,
            input,
            label,
            placeholder,
            type,
            disabled,
            meta: {touched, error},
        } = this.props;

        const {invalid, valid} = {invalid: !!(touched && error), valid: touched && !error};

        return (
            <FormGroup>
                <Label for={name}>{label}</Label>
                <Input
                    {...input}
                    invalid={invalid}
                    valid={valid}
                    placeholder={placeholder}
                    type={type}
                    disabled={disabled}
                />
                {
                    invalid &&
                    <FormFeedback>{error}</FormFeedback>
                }
            </FormGroup>


        );
    }
}


CustomComponent.propTypes = {
    ...Input.propTypes,
    ...Field.propTypes,
};

export default CustomComponent;
