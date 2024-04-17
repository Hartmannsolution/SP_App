import {useState} from "react";
import StatusHeader from "../features/status/StatusHeader.tsx";
import CommentBox from "../features/status/CommentBox.tsx";
import SpBox from "../features/status/SpBox.tsx";

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



function Status() {

    const [selectedActivityId, setSelectedActivityId] = useState<null | number>(null);
    const [comment, setComment] = useState("");

    return (

        <div>
            <div className="flex items-center justify-center gap-5 my-8 md:justify-between md:ml-20 md:mr-20">
                <h1 className="text-2xl font-bold text-blue-800 ml-4">Class Name</h1>
                <SpBox currentSp={50} maxSp={100}/>
            </div>
            <div className="mb-14">
                <StatusHeader/>
                {listOfChosenActivities.map((activity, i) => {
                    return (
                        <div key={activity.id}
                             className="flex mb-2 cursor-pointer hover:bg-green-600/20 active:bg-green-600/50 mx-2 border-b-4 border-green-600 bg-blue-50 text-blue-800 md:text-lg md:mx-20">
                            <div
                                className="flex items-center justify-between w-full"
                                onClick={() => {
                                    setSelectedActivityId(selectedActivityId === activity.id ? null : activity.id);
                                    setComment(activity.comment)
                                }}>
                                <p className="pl-4">{i + 1}</p>
                                <p>{activity.activity}</p>
                                <p>{activity.date}</p>
                                <p className="pr-4">{activity.sp}</p>
                            </div>
                            <div className="p-2 mr-4">
                                <input className="w-6 h-6 md:w-8 md:h-8" type="checkbox"
                                       defaultChecked={activity.status === "completed"}/>
                            </div>
                        </div>
                    )
                })}
            </div>

            {
                selectedActivityId !== null && <CommentBox comment={comment}/>
            }
        </div>)
}

export default Status;