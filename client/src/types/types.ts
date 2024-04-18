/***********************************
 *       Reducer Types             *
 ***********************************/
export enum Auth {
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAIL = 'LOGIN_FAIL',
    LOGOUT = 'LOGOUT',
    LOAD_USER = 'LOAD_USER',
    LOADING = 'LOADING',
    CLEAR_ERROR = 'CLEAR_ERROR',
}

export enum Toast {
    SET_TOAST = 'SET_TOAST',
    REMOVE_TOAST = 'REMOVE_TOAST',
}

export enum Activity {
    GET_ACTIVITIES = 'ACTIVITIES',
    UPDATE_ACTIVITY = 'UPDATE_ACTIVITY',
    REJECTED = 'REJECTED',
    CLEAR_ERROR = 'CLEAR_ERROR',
    LOADING = 'LOADING',
}

export enum Error {
    REJECTED = 'REJECTED',
    LOADING = 'LOADING',
    CLEAR_ERROR = 'CLEAR_ERROR',
}

/***********************************
 *           Auth Types             *
 ***********************************/

export type AuthStateType = {
    token: string | null;
    isAuthenticated: boolean | null;
    user: null | User;
    isLoading: boolean;
    error: any;
};

export type AuthContextType = {
    isAuthenticated: boolean | null;
    user: User | null;
    error: any;
    token: string | null;
    isLoading: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
    clearError: () => void;
    verifyToken: () => void;
};

export type AuthActionType =
    | { type: 'LOGIN_SUCCESS'; payload?: any}
    | { type: 'LOAD_USER'; payload?: any}
    | { type: 'LOGIN_FAIL'; payload?: any }
    | { type: 'LOGOUT'; payload?: any }
    | { type: 'CLEAR_ERROR'; payload?: any }
    | { type: 'LOADING'; payload?: any }

/***********************************
 *           Toast Types           *
 ***********************************/

export type ToastStateType = {
    toasts: ToastType[];
};

export type ToastContextType = {
    toasts: ToastType[];
    setToast: (msg: string, type: string, timeout?: number) => void;
};

export type ToastActionType =
    | { type: 'SET_TOAST'; payload?: any }
    | { type: 'REMOVE_TOAST'; payload?: any };

export enum ToastMsgTypes {
    SUCCESS = 'success',
    ERROR = 'error',
    INFO = 'info',
    LOADING = 'loading',
}

export type ToastType = {
    id: string;
    msg: string;
    type: string;
};

/***********************************
 *           Activity Types          *
 ***********************************/

export type ActivityStateType = {
    activities: ActivityType[];
    isLoading: boolean;
    error: any;
};

export type ActivityContextType = {
    activities: ActivityType[];
    isLoading: boolean;
    error: any;
    clearError: () => void;
    addComment: (activity: ActivityType, comment: string) => void;
};

export type ActivityActionType =
    | { type: 'ACTIVITIES'; payload?: any }
    | { type: 'REJECTED'; payload?: any }
    | { type: 'CLEAR_ERROR'; payload?: any }
    | { type: 'UPDATE_ACTIVITY'; payload?: any }
    | { type: 'LOADING'; payload?: any };

export type ActivityType = {
    id: number;
    name: string;
    desc: string;
    sp: number;
    comment: string;
};

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

type User = {
    email: string;
    password?: string;
    role: string;
};
