import {
    GET_ACTIVITIES,
    CLEAR_ERROR,
    LOADING,
    UPDATE_ACTIVITY,
    REJECTED,
    Activity,
    ActivityStateType,
    ActivityActionType, ActivityContextType
} from '../types/types.ts';
import React, {createContext, Dispatch, useContext, useEffect, useReducer} from "react";

const ActivityContext = createContext<ActivityContextType | null>(null);

function reducer(
    state: ActivityStateType,
    action: ActivityActionType,
): ActivityStateType {
    const {type, payload} = action;
    switch (type) {
        case LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: payload.data,
                isLoading: false,
                error: null,
            };
        case UPDATE_ACTIVITY:
            return {
                ...state,
                activities: state.activities.map((activity) =>
                    activity.id === payload.id ? payload : activity,
                ),
                isLoading: false,
                error: null,
            };
        case REJECTED:
            return {
                ...state,
                isLoading: false,
                error: payload,
            };
        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}

const BASE_URL = 'http://localhost:3000/activities';

function ActivityProvider({children}: { children: React.ReactNode }) {
    const initialState = {activities: [], error: null, isLoading: true};

    const [{activities, error, isLoading}, dispatch]: [ActivityStateType, Dispatch<ActivityActionType>] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                dispatch({type: LOADING})
                const res = await fetch(`${BASE_URL}`);
                const data = await res.json();
                dispatch({type: GET_ACTIVITIES, payload: data});
            } catch (err: any) {
                dispatch({type: REJECTED, payload: "Can't fetch activities"});
            }
        };
        // simulate loading
        setTimeout(fetchActivities, 1000);
    }, []);


    const addComment = async (activity: Activity, comment: string) => {
        try {
            const res = await fetch(`${BASE_URL}/${activity.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({...activity, comment}),
            });
            const data = await res.json();
            dispatch({type: UPDATE_ACTIVITY, payload: data});
        } catch (err: any) {
            dispatch({type: REJECTED, payload: "Update Error!"});
        }
    }


    const clearError = () => dispatch({type: 'CLEAR_ERROR'});


    return (
        <ActivityContext.Provider
            value={{
                activities,
                isLoading,
                error,
                clearError,
                addComment,
            }}
        >
            {children}
        </ActivityContext.Provider>
    );
}


function useActivity() {
    const context = useContext(ActivityContext);
    if (context === undefined)
        throw new Error("ActivityContext was used outside the ActivityProvider");
    return context;
}

export {ActivityProvider, useActivity};
