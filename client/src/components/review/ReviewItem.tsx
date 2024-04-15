import { ActivityType } from '../../types/types.ts';
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

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className="w-[22rem] ">
      <div
          className={`flex items-center h-[4rem] border-b-4 border-t-4 border-white md:w-[50rem] ${isOpen ? 'border-b-4 border-t-green-600' : ''}`}>
        <p className="pl-2 text-sl text-blue-200 md:text-2xl w-[5rem]">{num < 9 ? `0${num + 1}` : num + 1}</p>
        <p className="text-sl md:text-2xl w-[43rem]">{activity.name}</p>
        <p onClick={handleToggle}
           className="cursor-pointer text-end text-xl md:text-4xl">{isOpen ? '-' : '+'}</p>
      </div>
      {isOpen && (
          <div className="w-[22rem] border-b-4 border-t-4 border-white px-6 py-5 md:w-[48rem]">
            {children}
          </div>
      )}
    </div>
  );
}

export default ReviewItem;
