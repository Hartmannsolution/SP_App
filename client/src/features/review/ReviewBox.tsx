import React, {useState} from "react";
import {useActivity} from "../../context/ActivityContext.tsx";
import {ActivityContextType, ActivityType} from '../../types/types.ts';
import Editor from "./Editor.tsx";


type AccordionBoxProps = {
    activity: ActivityType;
    onOpen: (id: number | null) => void;
};

function ReviewBox({activity, onOpen}: AccordionBoxProps) {

    const {addComment} = useActivity() as ActivityContextType;
    const [editor, setEditor] = useState(activity.comment || "");


    function clickHandler() {

        if (!editor || !activity.id) return;

        addComment(activity.id, editor);
        onOpen(null);
    }

    function onChangeHandler(value: string) {
        setEditor(value);
    }

    return (
        <>
            <p className="col-span-1 row-start-1 self-center max-w-32 text-gray-950 font-bold text-xl">Name:</p>
            <p className="col-span-1 row-start-2 max-w-32 text-gray-950 font-bold text-xl">Description:</p>
            <p className="col-span-1 row-start-3 self-center max-w-32 text-gray-950 font-bold text-xl">SP:</p>
            <p className="col-span-1 row-start-4 max-w-32 text-gray-950 font-bold text-xl">Comment:</p>

            <p className="col-span-4 row-end-2 self-center">{activity.name}</p>
            <p className="col-span-4 row-end-3">{activity.desc}</p>
            <input
                type="text"
                placeholder={String(activity.sp)}
                className="col-span-1 row-end-4 self-center focus:shadow-outline w-[50px] h-[50px] appearance-none rounded border px-3 py-2 text-center leading-tight text-gray-700 shadow focus:outline-none"
            />
            <div className="col-span-4 row-start-4 row-end-6">
                <Editor onChangeHandler={onChangeHandler} value={editor}/>
            </div>
            {/*<textarea*/}
            {/*    ref={refComment}*/}
            {/*    aria-placeholder="Comment"*/}
            {/*    defaultValue={activity.comment && activity.comment}*/}
            {/*    cols={20}*/}
            {/*    placeholder={activity.comment}*/}
            {/*    className="col-span-4 row-start-4 row-end-6 focus:shadow-outline appearance-none rounded border p-2 leading-tight shadow focus:outline-none"*/}
            {/*/>*/}
            <div className="col-start-1 row-start-5">
                <button className="h-14 w-20 bg-blue-700 rounded-xl text-blue-50 font-bold text-lg"
                        onClick={clickHandler}>Submit
                </button>
            </div>
        </>
    );

}

export default ReviewBox;
