import {ActivityType} from '../../types/types.ts';
import React from 'react';

type AccordionItemProps = {
    activity: ActivityType;
    curOpen: number | null;
    onOpen: (num: number | null) => void;
    title: string;
    num: number;
    children: React.ReactNode;
};

function ActivityItem({
                          activity,
                          curOpen,
                          onOpen,
                          num,
                          children,
                      }: AccordionItemProps) {
    const isOpen = num === curOpen;

    function handleToggle() {
        onOpen(isOpen ? null : num);
    }

    return (
        <div>
            <div
                className={`flex items-center justify-between w-[24rem] md:w-[48rem] lg:w-[60rem] h-[4rem] border-b-4 border-t-4 border-white ${isOpen ? 'border-b-4 border-t-green-600' : ''}`}>
                <p className="pl-2 text-sl text-blue-200 md:text-2xl w-[10rem]">{num < 9 ? `0${num + 1}` : num + 1}</p>
                <p className="text-sl md:text-2xl w-[20rem]">{activity.name}</p>
                <p className="text-sl md:text-2xl w-[10rem]">{activity.sp}</p>
                <input type="checkbox" className="cursor-pointer h-[2rem] w-[8rem] "/>
                <p onClick={handleToggle}
                   className="cursor-pointer text-end text-xl md:text-4xl pr-2">{isOpen ? '-' : '+'}</p>
            </div>
            {isOpen && (
                <div className="w-[24rem] bg-blue-300/20 border-b-4 border-t-4 border-white shadow px-6 py-5 md:w-[48rem] lg:w-[60rem]">
                    {children}
                </div>
            )}
        </div>
    );
}
//className="mb-4 flex justify-start gap-2 break-words"
export default ActivityItem;
