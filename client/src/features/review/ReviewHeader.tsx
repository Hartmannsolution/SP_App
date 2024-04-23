function ReviewHeader() {
    return (
        <div
            className="grid grid-cols-5 content-center w-[22rem] text-xl items-center rounded-t-lg border-b-4 border-green-600 bg-blue-700 font-bold text-blue-50 md:h-[55px] md:w-[50rem] md:text-3xl">
            <p className="p-2 pl-4 col-span-1">Nr</p>
            <p className="p-2 col-span-2">Activity</p>
        </div>
    );
}

export default ReviewHeader;