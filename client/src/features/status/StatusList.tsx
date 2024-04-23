import React from 'react';
import {ActivityContextType, ReviewStatus} from "../../types/types.ts";
import {FcHighPriority, FcOk} from "react-icons/fc";
import {useActivity} from "../../context/ActivityContext.tsx";


const StatusList = ({activityHandler}: { activityHandler: (activityId: number, comment: string) => void }) => {

    const {activities} = useActivity() as ActivityContextType;

    return (
        <>
            {activities.map((activity, i) => {
                return (
                    <div key={activity.id} onClick={() => activityHandler(activity.id, activity.comment)}
                         className="grid grid-cols-10 mb-2 content-center cursor-pointer hover:bg-green-600/20 active:bg-green-600/50 border-b-4 border-green-600 bg-blue-50 text-blue-800 md:text-lg md:mx-20">
                        <p className="p-2 col-span-2">{i + 1}</p>
                        <p className="p-2 col-span-3">{activity.name}</p>
                        <p className="p-2 col-span-3">{activity.date}</p>
                        <p className="p-2 col-span-1">{activity.sp}</p>
                        {
                            activity.status === ReviewStatus.APPROVED ?
                                <FcOk className="col-span-1 self-center justify-self-end mr-2 w-6 h-6 md:w-8 md:h-8"/>
                                :
                            activity.status === ReviewStatus.REJECTED ?
                                <FcHighPriority className="col-span-1 self-center justify-self-end mr-2 w-6 h-6 md:w-8 md:h-8"/>
                                :
                                ""
                        }
                    </div>
                )
            })}
        </>
    );
};

export default StatusList;