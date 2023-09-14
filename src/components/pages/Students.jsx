import Posts from "../UI/Posts/Posts";
import postsStudents from "../../data/postsStudents.json"

const Students = () => {
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