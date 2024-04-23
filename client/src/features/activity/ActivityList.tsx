import ActivityItem from './ActivityItem.tsx';
import React, { useState } from 'react';
import {ActivityType} from "../../types/types.ts";


function ActivityList({ activities }: { activities: ActivityType[]}) {
  const [curOpen, setCurOpen] = useState<number | null>(null);

  return (
    <>
      {activities.map((el, i) => (
        <ActivityItem
          activity={el}
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.name}
          num={i}
          key={el.id}
        >
          {<>
            <p className="leading-8">{el.desc}</p>
          </>}
        </ActivityItem>
      ))}
    </>
  );
}

export default ActivityList;
