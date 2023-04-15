import jwtDecode from "jwt-decode";
import {CredentialResponse, GoogleLogin} from "@react-oauth/google";
import {useLogin} from "../../hooks/useLogin";
import React from "react";

export interface LoginGoogleFields {
    email: string;
    firstName: string;
    lastName: string;
}

interface Decoded {
    email: string;
    given_name: string;
    family_name: string;
}

export const LoginGoogle = () => {

    const {googleLogin} = useLogin()

    const onSubmitHandler = async (credentialResponse: CredentialResponse) => {
        let {email, family_name, given_name}: Decoded = jwtDecode(credentialResponse.credential || "")

        let values: LoginGoogleFields = {
            email,
            firstName: given_name,
            lastName: family_name
        }

        googleLogin(values)
    };

    return (
        <GoogleLogin
            onSuccess={onSubmitHandler}
            onError={() => {
                console.log('Login Failed');
            }}
        />
    )
}
