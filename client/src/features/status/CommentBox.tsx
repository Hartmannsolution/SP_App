function CommentBox({comment = ""}: { comment: string }) {

    return (
        <>
            {comment &&
                <div
                    className="ml-2 border-4 self-end border-green-600 text-blue-700 w-auto bg-blue-50 md:text-lg md:mx-20">
                    <p className="p-2 font-bold text-2xl">Comment:</p>
                    <p className="p-2 tracking-wide text-2xl">{comment}</p>
                </div>
            }
        </>)
}

export default CommentBox;