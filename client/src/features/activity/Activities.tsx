import React from 'react';
import ActivityHeader from "./ActivityHeader.tsx";
import ActivityList from "./ActivityList.tsx";
import {useActivity} from "../../context/ActivityContext.tsx";
import {ActivityContextType, ToastContextType} from "../../types/types.ts";
import {useToast} from "../../context/ToastContext.tsx";
import Loader from "../../layout/Loader.tsx";

function Activities() {
    const { activities, isLoading, error, clearError } = useActivity() as ActivityContextType;
    const { setToast } = useToast() as ToastContextType;

    if (error) {
        setToast(error, 'error');
        clearError();
    }

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="flex flex-col items-center">
            <ActivityHeader/>
            <ActivityList activities={activities}/>
        </div>
    );
}

export default Activities;