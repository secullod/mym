import {useState} from 'react';
import {useAuthContext} from './useAuthContext';
import {SignupFields} from "../components";
import {instance} from "./config";

type SignupResult = {
    signup: (values: SignupFields) => Promise<void>;
    isLoading: boolean;
    error: string | null;
};

export const useSignup = (): SignupResult => {
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {dispatch} = useAuthContext();

    const signup = async ({email, lastName, firstName, password}: SignupFields): Promise<void> => {
        setIsLoading(true);
        setError(null);

        let {data} = await instance.post(`user/signup`, {email, lastName, firstName, password})

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

    return {signup, isLoading, error};
};
