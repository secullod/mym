import {useAuthContext} from './useAuthContext';

type LogoutResult = {
    logout: () => void;
};

export const useLogout = (): LogoutResult => {
    const {dispatch} = useAuthContext();

    const logout = (): void => {
        localStorage.removeItem('user');
        dispatch({type: 'LOGOUT'});
    };

    return {logout};
};
