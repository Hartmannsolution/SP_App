import React from 'react';

const listOfChosenActivities = [
    {
        id: 1,
        activity: "Lecture 1",
        date: "2021-09-01",
        sp: 10,
        status: "completed",
        comment: "Could Be Better.Could Be Better Could Be Better Could Be Better Could Be Better"
    },
    {
        id: 2,
        activity: "Lecture 2",
        date: "2021-09-02",
        sp: 10,
        status: "pending",
        comment: ""
    },
    {
        id: 3,
        activity: "Lecture 3",
        date: "2021-09-03",
        sp: 10,
        status: "pending",
        comment: ""
    },
    {
        id: 4,
        activity: "Lecture 4",
        date: "2021-09-04",
        sp: 10,
        status: "completed",
        comment: "Good job"
    },
]

const StatusList = ({activityHandler}: { activityHandler: (activityId: number, comment: string) => void }) => {


    return (
        <>
            {listOfChosenActivities.map((activity, i) => {
                return (
                    <div key={activity.id} onClick={() => activityHandler(activity.id, activity.comment)}
                         className="grid grid-cols-10 mb-2 content-center cursor-pointer hover:bg-green-600/20 active:bg-green-600/50 border-b-4 border-green-600 bg-blue-50 text-blue-800 md:text-lg md:mx-20">
                        <p className="p-2 col-span-2">{i + 1}</p>
                        <p className="p-2 col-span-3">{activity.activity}</p>
                        <p className="p-2 col-span-3">{activity.date}</p>
                        <p className="p-2 col-span-1">{activity.sp}</p>
                        <input className="col-span-1 self-center justify-self-end mr-2 w-6 h-6 md:w-8 md:h-8" type="checkbox"
                               defaultChecked={activity.status === "completed"}/>
                    </div>
                )
            })}

        </>
    );
};

export default StatusList;