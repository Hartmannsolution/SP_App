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
                className={`grid grid-cols-8 content-center w-[24rem] md:w-[48rem] lg:w-[60rem] h-[4rem] border-b-4 border-t-4 border-white ${isOpen ? 'border-b-4 border-t-green-600' : ''}`}>
                <p className="p-2 col-span-1 text-sl text-blue-200 md:text-2xl">{num < 9 ? `0${num + 1}` : num + 1}</p>
                <p className="p-2 col-span-3 text-sl md:text-2xl">{activity.name}</p>
                <p className="p-2 col-span-2 text-sl md:text-2xl">{activity.sp}</p>
                <input type="checkbox" className="col-span-1 self-center cursor-pointer h-[2rem]"/>
                <p onClick={handleToggle} className="p-2 col-span-1 cursor-pointer text-end text-xl md:text-4xl">{isOpen ? '-' : '+'}</p>
            </div>
            {isOpen && (
                <div className="w-[24rem] bg-blue-300/20 border-b-4 border-t-4 border-white shadow px-6 py-5 md:w-[48rem] lg:w-[60rem]">
                    {children}
                </div>
            )}
        </div>
    );
}

export default ActivityItem;
