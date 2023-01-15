import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { requared } from "../../utils/validators/validator";
import { Input } from "../public/Preloader/FormsControls/Formcontrol";
import { toLogin } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} component={Input} validate={[requared]} name={'email'}/>
            </div>
            <div>
                <Field placeholder={"Password"} component={Input} validate={[requared]} name={'password'}/>
            </div>
            <div>
                <Field type={"checkbox"} component={'input'} name={'rememberMe'}/> remember me
            </div>

            <div>
                { props.error &&<span>{props.error}</span> }
            </div>

            <div>
                <button onSubmit={props.onSubmit}>Войти</button>
            </div>
            
        </form>
    )
}

const Login = (props) => {
    const onSubmit = (formData) => {
        props.toLogin(formData.email, formData.password, formData.rememberMe)
    }
    
    if (props.isAuth) {
        return <Navigate to={'/profile/'}/>}

    return(
        <div>
            <h1>Login</h1>
            <ContactForm onSubmit={onSubmit}/>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const ContactForm = reduxForm({
    form: 'loginForm',                          
  })(LoginForm);

export default connect(mapStateToProps, {toLogin})(Login)

// export default Login;