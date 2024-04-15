
function ActivityHeader() {
    return (
        <div
            className="flex justify-between w-[24rem] md:w-[48rem] lg:w-[60rem] rounded-t-lg border-b-4 border-green-600 bg-blue-700 font-bold text-blue-50 md:h-[50px] md:text-2xl">
            <p className="p-2">Id</p>
            <p className="p-2">Activity</p>
            <p className="p-2">SP</p>
            <p className="p-2">{''}</p>
            <p className="p-2">{''}</p>
        </div>
    );
}

export default ActivityHeader;