import ActivityItem from './ActivityItem.tsx';
import React, { useState } from 'react';
import { ActivityContextType, ToastContextType } from '../../types/types.ts';
import Loader from '../layout/Loader.tsx';
import {useActivity} from '../../context/ActivityContext.tsx';
import {useToast} from "../../context/ToastContext.tsx";

function ActivityList() {
  const [curOpen, setCurOpen] = useState<number | null>(null);

  const { activities, isLoading, error, clearError } = useActivity() as ActivityContextType;
  const { setToast } = useToast() as ToastContextType;

  if (error) {
    setToast(error, 'error');
    clearError();
  }

  if (isLoading) {
    return <Loader />;
  }

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
