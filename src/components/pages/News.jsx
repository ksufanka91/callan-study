import Posts from "../UI/Posts/Posts";

import news from "../../data/news.json";

const News = () => {
    return (
        <div className="container containerSm">
            <Posts
                items={news}
                mainTitle={"Новости"}/>
        </div>
    )
}

export default News;