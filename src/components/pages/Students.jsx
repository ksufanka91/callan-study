import {useLoaderData} from "react-router-dom";
import Posts from "../UI/Posts/Posts";


const Students = () => {
    const {postsStudents} = useLoaderData();

    return (
        <div className="container containerSm">
            <Posts
                items={postsStudents}
                mainTitle={"Студенты"}
            />
        </div>
    )
}

export default Students;