function StatusHeader() {
    return (
        <div
            className="flex mx-2 mb-2 justify-between rounded-t-lg border-b-4 border-green-600 bg-blue-700 font-bold text-blue-50 md:text-2xl md:mx-20">
            <p className="p-2">Nr</p>
            <p className="p-2">Session</p>
            <p className="p-2">Date</p>
            <p className="p-2">SP</p>
            <p className="p-2">Check</p>
        </div>
    );
}

export default StatusHeader;