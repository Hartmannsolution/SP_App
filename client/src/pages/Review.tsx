import Selections from "../features/review/Selections.tsx";
import Reviews from "../features/review/Reviews.tsx";


function Review() {
    return (
        <div className="flex flex-col items-center gap-10 mt-10 md:flex-row md:gap-48 md:mt-40 md:items-start md:justify-center">
            <Selections/>
            <Reviews/>
        </div>)
}

export default Review;
