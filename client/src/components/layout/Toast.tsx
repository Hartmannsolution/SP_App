import React from 'react';
import { ToastContextType } from '../../types/types.ts';
import { ToastMsgTypes } from '../../types/types.ts';
import {
  FcHighPriority as ErrorIcon,
  FcApproval as SuccessIcon,
  FcAbout as InfoIcon,
  FcSynchronize as LoadingIcon,
} from 'react-icons/fc';
import {useToast} from "../../context/ToastContext.tsx";


const Toast = () => {
  const { toasts } = useToast() as ToastContextType;

  const toastType = (type: string) => {
    switch (type) {
      case ToastMsgTypes.ERROR:
        return 'bg-red-700';
      case ToastMsgTypes.SUCCESS:
        return 'bg-green-600';
      case ToastMsgTypes.INFO:
        return 'bg-blue-800';
      case ToastMsgTypes.LOADING:
        return 'bg-blue-600';
      default:
        return 'bg-blue-600';
    }
  };

  const toastIcon = (type: string) => {
    switch (type) {
      case ToastMsgTypes.ERROR:
        return <ErrorIcon size={34} className="animate-pulse" />;
      case ToastMsgTypes.SUCCESS:
        return <SuccessIcon size={34} className="animate-ping" />;
      case ToastMsgTypes.INFO:
        return <InfoIcon size={34} className="animate-pulse" />;
      case ToastMsgTypes.LOADING:
        return <LoadingIcon size={34} className="animate-spin" />;
      default:
        return <InfoIcon size={34} />;
    }
  };

  return (
    toasts.length > 0 &&
    toasts.map((toast) => (
      <div
        key={toast.id}
        className={`${toastType(toast.type)} animate-slide-in-right w-52 md:w-72 absolute bottom-10 right-2 z-40 flex h-[2rem] transform items-center gap-2 rounded-lg border-4 border-blue-50 px-[1rem] py-[1.4rem] align-middle shadow shadow-stone-800 lg:bottom-[4.2rem] lg:right-[4.2rem] lg:h-[5rem] lg:gap-6 lg:py-[1.4rem]`}
      >
        {toastIcon(toast.type)}
        <p className="text-sm font-extrabold text-blue-50 lg:text-lg">
          {toast.msg}
        </p>
      </div>
    ))
  );
};

export default Toast;
