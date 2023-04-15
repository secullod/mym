import * as yup from "yup";
import {Field, Form, Formik, FormikHelpers} from "formik";
import React from "react";
import {useSignup} from "../../hooks/useSignup";
import {LoginGoogle} from "../LoginGoogle/LoginGoogle";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import './RegisterForm.scss'
import {ClipLoader} from "react-spinners";

export interface SignupFields {
    firstName: string;
    lastName: string;
    email: string;
    password: string
    confirmPassword: string;
}

const initialValues: SignupFields = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Email is required"),
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    password: yup
        .string()
        .matches(passwordRules, {message: "Password must contain at least 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit"})
        .required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("Please confirm password"),
});

export const RegisterForm = () => {

    const {signup, error, isLoading} = useSignup()
    const onSubmitHandler = async (
        values: SignupFields,
        formikHelpers: FormikHelpers<SignupFields>
    ) => {
        await signup(values)
    };

    return <div className='form-container'>
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmitHandler}
            validationSchema={basicSchema}
        >
            {({errors, touched}) => (<Form className='form'>
                <h1>Signup</h1>
                <div className='field-container'>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName" placeholder="John" />
                    {errors.firstName && touched.firstName ? (
                        <div className='error'>{errors.firstName}</div>
                    ) : null}
                </div>
                <div className='field-container'>
                    <label htmlFor="lastName">Last Name</label>
                    <Field id="lastName" name="lastName" placeholder="Doe" />
                    {errors.lastName && touched.lastName ? (
                        <div className='error'>{errors.lastName}</div>
                    ) : null}
                </div>
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
                    <label htmlFor="password">Password</label>
                    <Field
                        id="password"
                        name="password"
                        type="password"
                    />
                    {errors.password && touched.password ? (
                        <div className='error'>{errors.password}</div>
                    ) : null}
                </div>
                <div className='field-container'>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <Field
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                    />
                    {errors.confirmPassword && touched.confirmPassword ? (
                        <div className='error'>{errors.confirmPassword}</div>
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
                <Link to='/login' className='login-signup'>Already Registered? Click here to Login</Link>
            </Form>)}
        </Formik>
    </div>
}
