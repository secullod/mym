import {createContext, useReducer, ReactNode, useEffect} from 'react';

type AuthState = { user: any } | null;

type AuthAction = { type: 'LOGIN', payload: any } | { type: 'LOGOUT' };

type AuthContextType = {
    state: AuthState;
    dispatch: (action: AuthAction) => void;
};

export const AuthContext = createContext<AuthContextType>({
    state: null,
    dispatch: () => {
    }
});

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'LOGIN':
            return {user: action.payload};
        case 'LOGOUT':
            return {user: null};
        default:
            return state;
    }
};

type AuthContextProviderProps = {
    children: ReactNode;
};

export const AuthContextProvider = ({children}: AuthContextProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, {user: null});

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user') || "null")

        if (user) {
            dispatch({type: 'LOGIN', payload: user})
        }
    }, [])

    return (
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    );
};
