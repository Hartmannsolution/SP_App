import React from "react";
import Button from '../../layout/Button.tsx';
import {useActivity} from "../../context/ActivityContext.tsx";
import {ActivityType, ActivityContextType} from '../../types/types.ts';

type AccordionBoxProps = {
    activity: ActivityType;
    onOpen: (id: number | null) => void;
};

function ReviewBox({activity, onOpen}: AccordionBoxProps) {

    const {addComment} = useActivity() as ActivityContextType;
    const refComment = React.useRef<HTMLTextAreaElement>(null);

    function clickHandler() {
        if (refComment.current) {
            addComment(activity, refComment.current.value);
            onOpen(null);
        }
    }

    return (
        <div>
            <div className="mb-4 flex gap-8">
                <p className="font-bold">Name:</p>
                <p className="">{activity.name}</p>
            </div>
            <div className="mb-4 flex justify-start gap-4 break-words">
                <p className="font-bold">Activity:</p>
                <p className="leading-8">{activity.desc}</p>
            </div>
            <div className="mb-6 flex items-center justify-start gap-14">
                <p className="font-bold">SP:</p>
                <input
                    type="text"
                    placeholder={String(activity.sp)}
                    className="focus:shadow-outline w-[50px] appearance-none rounded border px-3 py-2 text-center leading-tight text-gray-700 shadow focus:outline-none"
                />
            </div>
            <div className="">
                <p className="mb-2 font-bold">Comment:</p>
                <textarea
                    ref={refComment}
                    aria-placeholder="Comment"
                    defaultValue={activity.comment && activity.comment}
                    cols={20}
                    placeholder={activity.comment}
                    className="focus:shadow-outline mb-6 appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                />
            </div>
            <div>
                <Button handler={clickHandler} width="100px">Submit</Button>
            </div>
        </div>
    );
}

export default ReviewBox;
