import {useNavigate} from "react-router-dom";

export default function PageNotFound() {
    const navigate = useNavigate();
    return (
        <div className="w-[300px] h-[50px] text-center fixed top-[20%] left-[50%] mt-[-25px] ml-[-150px]">
            <h1 className="font-bold text-3xl">Page not found 😢</h1>
            <button className="text-blue-600" onClick={() => navigate(-1)}>&larr; Go back</button>
        </div>
    );
}

