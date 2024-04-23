import React, {useEffect, useState} from 'react';
import ReviewHeader from "./ReviewHeader.tsx";
import ReviewList from "./ReviewList.tsx";
import {useActivity} from "../../context/ActivityContext.tsx";
import {ActivityContextType, ToastContextType} from "../../types/types.ts";
import {useToast} from "../../context/ToastContext.tsx";
import Loader from "../../layout/Loader.tsx";



function Reviews() {


    const {activities, isLoading, error, clearError} = useActivity() as ActivityContextType;
    const {setToast} = useToast() as ToastContextType;

    useEffect(() => {
        if (error) {
            setToast(error, 'error');
            clearError();
        }
    },[error, clearError, setToast]);


    if (isLoading) {
        return <Loader/>;
    }

    return (
        <div className="flex flex-col items-center">
            <ReviewHeader/>
            <ReviewList activities={activities}/>
        </div>
    );
}

export default Reviews;