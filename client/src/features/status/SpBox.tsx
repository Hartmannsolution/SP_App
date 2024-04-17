function SpBox({currentSp = 1, maxSp = 100}: { currentSp: number, maxSp: number }) {
    return (
        <div className="font-bold mr-4 text-lg w-[10rem] text-center text-blue-800 border-4 p-1 border-blue-800 ">
            <p className="">SP: <span
                className="p-2 m-2">{currentSp < 10 ? "0" + currentSp : currentSp} / {maxSp < 10 ? "0" + maxSp : maxSp}</span>
            </p>
        </div>
    )
}

export default SpBox;