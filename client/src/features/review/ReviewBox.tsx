import React, {useState} from "react";
import {useActivity} from "../../context/ActivityContext.tsx";
import {ActivityContextType, ActivityType, ReviewStatus} from '../../types/types.ts';
import Editor from "./Editor.tsx";


type AccordionBoxProps = {
    activity: ActivityType;
    onOpen: (id: number | null) => void;
};

function ReviewBox({activity, onOpen}: AccordionBoxProps) {

    const {addComment} = useActivity() as ActivityContextType;
    const [editor, setEditor] = useState(activity.comment || "");


    function clickHandler(choice: number) {

        if (!editor || !activity.id) return;

        if (choice === 0) {
            addComment(activity.id, editor, ReviewStatus.APPROVED);
        } else {
            addComment(activity.id, editor, ReviewStatus.REJECTED);
        }
        onOpen(null);
    }

    function onChangeHandler(value: string) {
        setEditor(value);
    }

    return (
        <div
            className="grid grid-cols-5 gap-y-4 grid-rows-[auto_auto_auto_auto_auto] w-[22rem] border-b-4 border-t-4 border-white text-xl text-gray-700 md:text-3xl md:w-[50rem]">
            <p className="col-span-1 row-start-1 pl-2 max-w-32 text-sm text-gray-950 font-bold md:text-xl ">Desc:</p>
            <p className="col-span-1 row-start-2 pl-2 self-center text-sm max-w-32 text-gray-950 font-bold md:text-xl">SP:</p>
            <p className="col-span-1 row-start-3 pl-2 max-w-32 text-sm text-gray-950 font-bold md:text-xl">Comment:</p>

            <p className="col-span-4 row-end-2 pl-4 md:pl-2 text-sm tracking-wide mb-2 md:text-xl">{activity.desc}</p>
            <input
                type="text"
                placeholder={String(activity.sp)}
                className="col-span-1 row-end-3 ml-4 md:ml-2 self-center focus:shadow-outline text-sm w-[40px] h-[40px] md:w-[60px] md:h-[60px] md:text-xl rounded border px-3 py-2 text-center shadow focus:outline-none"
            />
            <div className="col-span-4 row-start-3 row-end-5 pl-4 md:pl-2">
                <Editor onChangeHandler={onChangeHandler} value={editor}/>
            </div>
            <div className="col-start-2 col-span-3 row-start-5 place-self-center">
                <div className="flex flex-row gap-2">
                    <button
                        className="h-10 w-[70px] md:h-14 md:w-24 bg-green-600 rounded-xl text-blue-50 font-bold text-sm md:text-lg"
                        onClick={() => clickHandler(0)}>Approve
                    </button>
                    <button
                        className="h-10 w-[70px] md:h-14 md:w-24 bg-red-600 rounded-xl text-blue-50 font-bold text-sm md:text-lg"
                        onClick={() => clickHandler(1)}>Reject
                    </button>
                </div>
            </div>
        </div>
    );

}

export default ReviewBox;
