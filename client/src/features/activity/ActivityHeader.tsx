
function ActivityHeader() {
    return (
        <div
            className="grid grid-cols-8 content-center w-[24rem] md:w-[50rem] lg:w-[60rem] rounded-t-lg border-b-4 border-green-600 bg-blue-700 font-bold text-blue-50 md:h-[50px] md:text-2xl">
            <p className="p-2 col-span-1">Id</p>
            <p className="p-2 col-span-3">Activity</p>
            <p className="p-2 col-span-2">SP</p>
            <p className="p-2 col-span-1">{''}</p>
            <p className="p-2 col-span-1">{''}</p>
        </div>
    );
}

export default ActivityHeader;