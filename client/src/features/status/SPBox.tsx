import {ActivityContextType, ReviewStatus} from "../../types/types.ts";
import {useActivity} from "../../context/ActivityContext.tsx";

function SPBox() {

    const {activities} = useActivity() as ActivityContextType;

    function cleanUpNumber(num: number) {
        if (num < 0) return "00";
        return num < 10 ? "0" + num : num;
    }

    const maxSp = cleanUpNumber(activities.reduce((acc, activity) => acc + activity.sp, 0));
    const currentSp = cleanUpNumber(activities.filter(activity => activity.status === ReviewStatus.APPROVED).reduce((acc, activity) => acc + activity.sp, 0));


    return (
        <div className="font-bold text-xl w-[12rem] text-center text-blue-800">
            <p className="">SP: <span className="p-2 m-2"><span
                className={`${currentSp !== maxSp ? "text-red-600" : "text-green-700"} `}>{currentSp}</span> / {maxSp}</span>
            </p>
        </div>
    )
}

export default SPBox;