import React from 'react';
import Selector from "../../layout/Selector.tsx";

const group_options = [
    {value: 'group 1', label: 'group 1', id: 'group'},
    {value: 'group 2', label: 'group 2', id: 'group'},
    {value: 'group 3', label: 'group 3', id: 'group'},
];

const student_options = [
    {value: 'student 1', label: 'student 1', id: 'student'},
    {value: 'student 2', label: 'student 2', id: 'student'},
    {value: 'student 3', label: 'student 3', id: 'student'},
];

const session_options = [
    {value: 'session 1', label: 'session 1', id: 'session'},
    {value: 'session 2', label: 'session 2', id: 'session'},
    {value: 'session 3', label: 'session 3', id: 'session'},
];

function Selections() {
    return (
        <div className="flex flex-col items-center gap-2 md:gap-4">
            <Selector options={session_options}/>
            <Selector options={group_options}/>
            <Selector options={student_options}/>
        </div>
    );
}

export default Selections;