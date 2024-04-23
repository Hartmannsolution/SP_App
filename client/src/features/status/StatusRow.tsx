import React, {useState} from 'react';
import StatusList from "./StatusList.tsx";
import CommentBox from "./CommentBox.tsx";

function StatusRow() {

    const [selectedActivityId, setSelectedActivityId] = useState<null | number>(null);
    const [comment, setComment] = useState("");

    const activityHandler = (activityId: number, comment: string) => {
        setSelectedActivityId(selectedActivityId === activityId ? null : activityId);
        setComment(comment)
    }

    return (
        <div>
            <StatusList activityHandler={activityHandler}/>
            {
                selectedActivityId !== null && comment !== "<p><br></p>" && <CommentBox comment={comment}/>
            }
        </div>)
}

export default StatusRow;