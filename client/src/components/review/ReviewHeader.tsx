
function ReviewHeader() {
    return (
        <div
            className="flex w-[22rem] items-center justify-between rounded-t-lg border-b-4 border-green-600 bg-blue-700 font-bold text-blue-50 md:h-[50px] md:w-[50rem] md:text-2xl">
            <p className="p-2">Nr</p>
            <p className="p-2">Activity</p>
        </div>
    );
}

export default ReviewHeader;