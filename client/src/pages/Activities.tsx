import Selector from "../layout/Selector.tsx";
import ActivityList from "../features/activity/ActivityList.tsx";
import ActivityHeader from "../features/activity/ActivityHeader.tsx";

const session_options = [
    {value: 'session 1', label: 'session 1', id: 'session'},
    {value: 'session 2', label: 'session 2', id: 'session'},
    {value: 'session 3', label: 'session 3', id: 'session'},
    {value: 'session 4', label: 'session 4', id: 'session'},
    {value: 'session 5', label: 'session 5', id: 'session'},
    {value: 'session 6', label: 'session 6', id: 'session'},
];

function Activities() {
    return (
        <div>
            <div className="flex justify-center mt-10 mb-10 md:mt-24 md:mb-36">
                <Selector options={session_options}/>
            </div>

            <div className="flex flex-col items-center">
                <ActivityHeader/>
                <ActivityList/>
            </div>

        </div>)
}

export default Activities;