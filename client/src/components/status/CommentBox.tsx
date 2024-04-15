function CommentBox({comment = ""}: { comment: string }) {

    return (
        <>
            {comment &&
                <div className="ml-2 border-4 self-end border-green-600 w-[21rem] md:w-[40rem] bg-blue-50 text-blue-800 md:text-lg md:mx-20">
                    <div className="flex justify-between">
                        <p className="p-4 ">Comment: <span>{comment}</span> </p>
                    </div>
                </div>
            }
        </>)
}

export default CommentBox;