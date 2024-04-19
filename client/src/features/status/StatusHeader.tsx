function StatusHeader() {
    return (
        <div
            className="grid grid-cols-10 content-center rounded-t-lg border-b-4 border-green-600 bg-blue-700 font-bold text-blue-50 md:text-2xl md:mx-20">
            <p className="p-2 col-span-2">Nr</p>
            <p className="p-2 col-span-3">Session</p>
            <p className="p-2 col-span-3">Date</p>
            <p className="p-2 col-span-1">SP</p>
            <p className="p-2 col-span-1 justify-self-end">AP</p>
        </div>
    );
}

export default StatusHeader;