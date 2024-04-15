import {createContext, Dispatch, ReactNode, useContext, useReducer} from "react";
import {
    AuthActionType,
    AuthContextType,
    AuthStateType,
    CLEAR_ERROR, LOADING,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    LOAD_USER
} from "../types/types.ts";

const FAKE_USER = {
    email: 'joerg@example.com',
    password: 'qwerty',
    role: 'student',
};

const AuthContext = createContext<AuthContextType | null>(null)

const reducer = (state: AuthStateType, action: AuthActionType) => {
    const {type, payload} = action;
    switch (type) {
        case LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            localStorage.setItem('user', JSON.stringify({email: payload.user.email, role: payload.user.role}));
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                token: payload.token,
                user: {
                    email: payload.user.email,
                    role: payload.user.role,
                }
            };
        case LOAD_USER:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: payload,
            };
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                user: null,
                error: null,
            };
        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

const AuthProvider = ({children}: { children: ReactNode }) => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: false,
        user: null,
        isLoading: true,
        error: null,
    };

    const [{
        isAuthenticated,
        user,
        error,
        token,
        isLoading
    }, dispatch]: [AuthStateType, Dispatch<AuthActionType>] = useReducer(reducer, initialState);

    async function login(email: string, password: string) {
        dispatch({type: LOADING})

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password}),
            });
            const data = await response.json();
            console.log(data)
            if (response.ok) {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: data,
                });
            }
        } catch (err: any) {
            dispatch({
                type: LOGIN_FAIL,
                payload: "Invalid credentials"
            });
        }
    }

    function verifyToken() {
        const token = localStorage.getItem('token');

        if (!token) {
            return;
        }

        const parse = JSON.parse(atob(token!.split(".")[1]));
        const exp = Date.now() >= parse.exp * 1000

        if (exp) {
            dispatch({
                type: LOGIN_FAIL,
                payload: "Token expired"
            });
        } else {
            dispatch({
                type: LOAD_USER,
                payload: JSON.parse(localStorage.getItem('user')!),
            });
        }
    }

    function logout() {
        dispatch({
            type: LOGOUT,
        });
    }

    function clearError() {
        dispatch({
            type: CLEAR_ERROR,
        });
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                user,
                error,
                login,
                logout,
                token,
                isLoading,
                clearError,
                verifyToken
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined)
        throw new Error("AuthContext was used outside the AuthProvider");
    return context;
}

export {AuthProvider, useAuth};