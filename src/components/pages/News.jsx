import {useLoaderData} from "react-router-dom";
import Posts from "../UI/Posts/Posts";

const News = () => {
    const {news} = useLoaderData();
    return (
        <div className="container containerSm">
            <Posts
                items={news}
                mainTitle={"Новости"}/>
        </div>
    )
}

export default News;