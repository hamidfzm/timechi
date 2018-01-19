import React, {Component} from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormFeedback,
} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import PropTypes from 'prop-types';

import * as validations from './validations';

class CustomForm extends Component {
    renderField = ({
                       name,
                       input,
                       label,
                       placeholder,
                       type,
                       meta: {touched, error},
                   }) => {
        return (
            <FormGroup>
                <Label for={name}>{label}</Label>
                <Input valid={!(error)}  {...input} placeholder={placeholder} type={type}/>
                {
                    touched && error &&
                    <FormFeedback>{error}</FormFeedback>
                }
            </FormGroup>


        );
    };

    render() {
        const {submitting, onSubmit} = this.props;

        return (
            <Form noValidate onSubmit={onSubmit}>
                <Field name='email'
                       type='email'
                       component={this.renderField}
                       placeholder='Input your email address'
                       label='Email'
                       validate={[validations.required, validations.email]}/>
                <Field name='password'
                       type='password'
                       component={this.renderField}
                       placeholder='Input your password'
                       label='Password'
                       validate={[validations.required, validations.minLength(6)]}/>
                <Button disabled={submitting} type='submit' color='primary' block>Submit</Button>
            </Form>
        );
    }
}

CustomForm.propTypes = {
    onSubmit: PropTypes.func
};

CustomForm.defaultProps = {
    onSubmit: () => {
    }
};

export default reduxForm({
    form: 'Login'
})(CustomForm);