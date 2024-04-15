/***********************************
 *       Reducer Types             *
 ***********************************/

// Auth
export const LOGOUT = 'LOGOUT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOAD_USER = 'LOAD_USER';

// Toast
export const SET_TOAST = 'SET_TOAST';
export const REMOVE_TOAST = 'REMOVE_TOAST';

// Activity
export const GET_ACTIVITIES = 'ACTIVITIES';
export const UPDATE_ACTIVITY = 'UPDATE_ACTIVITY';

// Error - Loading
export const REJECTED = 'REJECTED';
export const LOADING = 'LOADING';
export const CLEAR_ERROR = 'CLEAR_ERROR';

/***********************************
 *           Auth Types             *
 ***********************************/

export type AuthStateType = {
    isAuthenticated: boolean | null;
    token: string | null;
    isLoading: boolean;
    error: any;
    user: any;
};

export type AuthContextType = {
    isAuthenticated: boolean | null;
    user: any;
    error: any;
    token: string | null;
    isLoading: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
    clearError: () => void;
    verifyToken: () => void;
};

export type AuthActionType =
    | { type: 'LOGIN_SUCCESS'; payload?: any }
    | { type: 'LOGIN_FAIL'; payload?: any }
    | { type: 'LOGOUT'; payload?: any }
    | { type: 'CLEAR_ERROR'; payload?: any }
    | { type: 'LOADING'; payload?: any }
    | { type: 'LOAD_USER'; payload?: any };

/***********************************
 *           Toast Types           *
 ***********************************/

export type ToastStateType = {
    toasts: Toast[];
};

export type ToastContextType = {
    toasts: Toast[];
    setToast: (msg: string, type: string, timeout?: number) => void;
};

export type ToastActionType =
    | { type: 'SET_TOAST'; payload?: any }
    | { type: 'REMOVE_TOAST'; payload?: any };

export type Toast = {
    id: string;
    msg: string;
    type: string;
};

export enum ToastType {
    SUCCESS = 'success',
    ERROR = 'error',
    INFO = 'info',
    LOADING = 'loading',
}

/***********************************
 *           Activity Types          *
 ***********************************/

export type ActivityStateType = {
    activities: Activity[];
    isLoading: boolean;
    error: any;
};

export type ActivityContextType = {
    activities: Activity[];
    isLoading: boolean;
    error: any;
    clearError: () => void;
    addComment: (activity: Activity, comment: string) => void;
};

export type ActivityActionType =
    | { type: 'ACTIVITIES'; payload?: any }
    | { type: 'REJECTED'; payload?: any }
    | { type: 'CLEAR_ERROR'; payload?: any }
    | { type: 'UPDATE_ACTIVITY'; payload?: any }
    | { type: 'LOADING'; payload?: any };

/***********************************
 *           Student Types         *
 ***********************************/

export type StudentStateType = {
    loading: boolean;
    error: any;
};

export type StudentContextType = {
    loading: boolean;
    error: any;
};

export type StudentActionType = { type: 'TEST'; payload?: any };

/***********************************
 *           TS Types              *
 ***********************************/

export type Activity = {
    id: number;
    name: string;
    desc: string;
    sp: number;
    comment: string;
};
