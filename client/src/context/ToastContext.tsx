import React, {Dispatch, useContext, useReducer} from "react";
import {REMOVE_TOAST, SET_TOAST, ToastActionType, ToastContextType, ToastStateType} from "../types/types.ts";
import {v4 as uuidv4} from "uuid";

const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

const reducer = (state: ToastStateType, action: ToastActionType) => {
    switch (action.type) {
        case SET_TOAST:
            return {
                ...state,
                toasts: [...state.toasts, action.payload],
            };
        case REMOVE_TOAST:
            return {
                ...state,
                toasts: state.toasts.filter((toast) => toast.id !== action.payload),
            };
        default:
            return state;
    }
};

const ToastProvider = ({children}: { children: React.ReactNode }) => {const initialState = {toasts: []};

    const [{toasts}, dispatch]: [ToastStateType, Dispatch<ToastActionType>] = useReducer(reducer, initialState);

    const setToast = (msg: string, type: string, timeout = 3000) => {
        const id = uuidv4();
        dispatch({
            type: SET_TOAST,
            payload: {id, msg, type},
        });

        setTimeout(() => dispatch({type: REMOVE_TOAST, payload: id}), timeout);
    };

    return (
        <ToastContext.Provider
            value={{
                toasts,
                setToast
            }}
        >
            {children}
        </ToastContext.Provider>
    );
};

function useToast() {
    const context = useContext(ToastContext);
    if (context === undefined)
        throw new Error("ToastContext was used outside the ToastProvider");
    return context;
}

export {ToastProvider, useToast};