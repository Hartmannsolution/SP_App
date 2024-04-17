import ReviewItem from './ReviewItem.tsx';
import React, {useEffect, useState} from 'react';
import {ActivityContextType, ToastContextType} from '../../types/types.ts';
import ReviewBox from './ReviewBox.tsx';
import Loader from '../../layout/Loader.tsx';
import {useToast} from "../../context/ToastContext.tsx";
import {useActivity} from "../../context/ActivityContext.tsx";

function ReviewList() {
    const [curOpen, setCurOpen] = useState<number | null>(null);

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
        <>
            {activities.map((el, i) => (
                <ReviewItem
                    activity={el}
                    curOpen={curOpen}
                    onOpen={setCurOpen}
                    title={el.name}
                    num={i}
                    key={el.id}
                >
                    {<ReviewBox activity={el} onOpen={setCurOpen}/>}
                </ReviewItem>
            ))}
        </>
    );
}

export default ReviewList;
