import SPBox from "../features/status/SPBox.tsx";
import React from "react";
import StatusHeader from "../features/status/StatusHeader.tsx";
import StatusRow from "../features/status/StatusRow.tsx";

function Status() {


    return (
        <div>
            <div className="flex items-center justify-center gap-5 my-8 md:justify-between md:ml-20 md:mr-20">
                <h1 className="text-2xl font-bold text-blue-800 ml-4">Class Name</h1>
                <SPBox/>
            </div>
            <div className="mb-14">
                <StatusHeader/>
                <StatusRow/>
            </div>
        </div>
    )


}

export default Status;