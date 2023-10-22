import Posts from "../UI/Posts/Posts";
import {useLoaderData} from "react-router-dom";

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