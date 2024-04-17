import ReviewList from '../features/review/ReviewList.tsx';
import Selector from '../layout/Selector.tsx';
import ReviewHeader from "../features/review/ReviewHeader.tsx";

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

function Review() {
    return (

        <div className="flex flex-col items-center gap-10 mt-10 md:flex-row md:gap-60 md:mt-40 md:items-start md:justify-center">
            <div className="flex flex-col items-center gap-2">
                <Selector options={session_options}/>
                <Selector options={group_options}/>
                <Selector options={student_options}/>
            </div>

            <div className="flex flex-col ">
                <ReviewHeader/>
                <ReviewList/>
            </div>
        </div>)
}

export default Review;
