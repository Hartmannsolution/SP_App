import {ActivityType, ReviewStatus} from '../../types/types.ts';
import React from 'react';

type AccordionItemProps = {
    activity: ActivityType;
    curOpen: number | null;
    onOpen: (num: number | null) => void;
    title: string;
    num: number;
    children: React.ReactNode;
};

function ReviewItem({
                        activity,
                        curOpen,
                        onOpen,
                        num,
                        children,
                    }: AccordionItemProps) {

    const isOpen = num === curOpen;

    function handleToggle(activityStatus: ReviewStatus) {

        if (activityStatus !== ReviewStatus.PENDING && !isOpen) {
            const ok = confirm('This activity has already been reviewed.\nDo you want to continue?')
            if (!ok) return;
        }

        onOpen(isOpen ? null : num);
    }

    return (
        <>
            <div
                className={`grid grid-cols-5 h-[4rem] w-[22rem] md:w-[50rem] hover:bg-green-600/20 ${activity.status !== ReviewStatus.PENDING && "hover:bg-red-600/20"} border-b-4 border-t-4 border-white ${isOpen ? 'border-b-4 border-t-green-600' : ''}`}>
                <p className="col-span-1 p-2 text-blue-200 text-xl md:text-3xl w-[5rem]">{num < 9 ? `0${num + 1}` : num + 1}</p>
                <p className="col-span-3 p-2 text-xl w-[43rem] md:text-3xl">{activity.name}</p>
                <p onClick={() => handleToggle(activity.status)}
                   className="cursor-pointer p-2 text-end text-xl md:text-3xl">{isOpen ? '-' : '+'}</p>
            </div>
            {isOpen && (
                <div
                    className="grid grid-cols-5 gap-y-4 grid-rows-[auto_auto_auto_auto_auto] w-[22rem] border-b-4 border-t-4 border-white text-xl text-gray-700 md:text-3xl md:w-[50rem]">
                    {children}
                </div>
            )}
        </>
    );
}

export default ReviewItem;
