import {useState} from "react";
import StatusHeader from "../features/status/StatusHeader.tsx";
import CommentBox from "../features/status/CommentBox.tsx";
import SPBox from "../features/status/SPBox.tsx";
import StatusList from "../features/status/StatusList.tsx";
import {useActivity} from "../context/ActivityContext.tsx";
import {ActivityContextType} from "../types/types.ts";


function Status() {

    const {activities} = useActivity() as ActivityContextType;
    const [selectedActivityId, setSelectedActivityId] = useState<null | number>(null);
    const [comment, setComment] = useState("");

    const activityHandler = (activityId: number, comment: string) => {
        console.log(selectedActivityId, activityId)
        setSelectedActivityId(selectedActivityId === activityId ? null : activityId);
        setComment(comment)
    }

    return (

        <div>
            <div className="flex items-center justify-center gap-5 my-8 md:justify-between md:ml-20 md:mr-20">
                <h1 className="text-2xl font-bold text-blue-800 ml-4">Class Name</h1>
                <SPBox activities={activities}/>
            </div>
            <div className="mb-14">
                <StatusHeader />
                <StatusList activities={activities} activityHandler={activityHandler}/>
            </div>
            {
                selectedActivityId !== null && comment !== "<p><br></p>" && <CommentBox comment={comment}/>
            }
        </div>)
}

export default Status;