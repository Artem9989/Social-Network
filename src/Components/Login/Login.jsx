import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../Common/FormsControls/FormsControls'
import { required } from '../../redux/utils/validators/Validators'
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom';
import LoginCSS from './Login.module.css';

const LoginForm = ({handleSubmit , error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={"email"} placeholder={"Email"} component={Input} validate={[required]} />
            </div>
            <div>
                <Field name={"password"} placeholder={"Password"} type={"password"} component={Input} validate={[required]} />
            </div>
            <div>
                <Field name={"rememberMe"} type={"checkbox"} component={Input} /> Запомнить меня
        </div>
            {error && <div className={LoginCSS.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Зайти</button>
            </div>
        </form>
    )
}

const LoginReduxFrom = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>Логин</h1>
        <LoginReduxFrom onSubmit={onSubmit} />
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login);