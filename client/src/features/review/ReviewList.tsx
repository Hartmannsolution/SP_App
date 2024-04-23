import ReviewItem from './ReviewItem.tsx';
import React, {useState} from 'react';
import {ActivityType} from '../../types/types.ts';
import ReviewBox from './ReviewBox.tsx';


function ReviewList({activities}: { activities: ActivityType[] }) {

    const [curOpen, setCurOpen] = useState<number | null>(null);

    return (
        <>
            {activities.map((activity, i) => (
                <ReviewItem
                    activity={activity}
                    curOpen={curOpen}
                    onOpen={setCurOpen}
                    title={activity.name}
                    num={i}
                    key={activity.id}
                >
                    {<ReviewBox activity={activity} onOpen={setCurOpen}/>}
                </ReviewItem>
            ))}
        </>
    );
}

export default ReviewList;
