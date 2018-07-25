import React, {Component} from 'react';
import {
    Button,
    Form,
} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import PropTypes from 'prop-types';

import * as validations from './validations';
import CommonFormField from '../../components/CommonFormField';

class CustomForm extends Component {
    render() {
        const {submitting, handleSubmit} = this.props;

        return (
            <Form noValidate onSubmit={handleSubmit}>
                <Field name='email'
                       type='email'
                       component={CommonFormField}
                       placeholder='Input your email address'
                       label='Email'
                       disabled={submitting}
                       returnKeyType='next'
                       validate={[validations.required, validations.email]}/>
                <Field name='password'
                       type='password'
                       component={CommonFormField}
                       placeholder='Input your password'
                       label='Password'
                       disabled={submitting}
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
    form: 'Register'
})(CustomForm);
