import {useState} from 'react';
import {useAuthContext} from './useAuthContext';
import {instance} from "./config";
import {LoginFields} from "../components";
import {LoginGoogleFields} from "../components/LoginGoogle/LoginGoogle";

type LoginResult = {
    login: (values: LoginFields) => Promise<void>;
    googleLogin: (values: LoginGoogleFields) => Promise<void>;
    isLoading: boolean;
    error: string | null;
};

export const useLogin = (): LoginResult => {
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {dispatch} = useAuthContext();

    const login = async ({email, password}: LoginFields): Promise<void> => {
        setIsLoading(true);
        setError(null);

        let {data} = await instance.post(`user/login`, {email, password})

        if (data.error) {
            setIsLoading(false);
            setError(data.error);
        }

        if (data.data) {
            localStorage.setItem('user', JSON.stringify(data.data));
            dispatch({type: 'LOGIN', payload: data.data});
            setIsLoading(false);
        }
    };

    const googleLogin = async ({firstName, lastName, email}: LoginGoogleFields): Promise<void> => {
        setIsLoading(true);
        setError(null);

        let {data} = await instance.post(`user/login/google`, {firstName, lastName, email})

        if (data.error) {
            setIsLoading(false);
            setError(data.error);
        }

        if (data.data) {
            localStorage.setItem('user', JSON.stringify(data.data));
            dispatch({type: 'LOGIN', payload: data.data});
            setIsLoading(false);
        }
    };

    return {login, googleLogin, isLoading, error};
};
