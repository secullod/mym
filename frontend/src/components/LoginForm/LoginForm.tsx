import * as yup from "yup";
import {Field, Form, Formik, FormikHelpers} from "formik";
import React from "react";
import {useLogin} from "../../hooks/useLogin";
import {LoginGoogle} from "../LoginGoogle/LoginGoogle";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ClipLoader} from "react-spinners";

export interface LoginFields {
    email: string;
    password: string
}

const initialValues: LoginFields = {
    email: "",
    password: "",
}

const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Email is required"),
    password: yup.string().required("Password is required"),
});

export const LoginForm = () => {

    const {login, error, isLoading} = useLogin()

    const onSubmitHandler = async (
        values: LoginFields,
        formikHelpers: FormikHelpers<LoginFields>
    ) => {
        await login(values)
    };

    return (
        <div className='form-container'>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmitHandler}
                validationSchema={basicSchema}
            >
                {({errors, touched}) => (<Form className='form'>
                    <h1>Login</h1>
                    <div className='field-container'>
                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="john@acme.com"
                            type="email"
                        />
                        {errors.email && touched.email ? (
                            <div className='error'>{errors.email}</div>
                        ) : null}
                    </div>
                    <div className='field-container'>
                        <label htmlFor="email">Password</label>
                        <Field
                            id="password"
                            name="password"
                            type="password"
                        />
                        {errors.password && touched.password ? (
                            <div className='error'>{errors.password}</div>
                        ) : null}
                    </div>
                    <Button type="submit" className='submit'>
                        {isLoading
                            ? <ClipLoader
                                color='white'
                                loading={true}
                                size={22}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                            : <div>Submit</div>}</Button>
                    {error && <div className='error'>{error}</div>}
                    <LoginGoogle />
                    <Link to='/signup' className='login-signup'>New User? Click here to Register</Link>
                </Form>)}
            </Formik>
        </div>
    )
}

