import UniversitiesPage from "../content/UniversitiesPage/UniversitiesPage";
import {useLoaderData} from "react-router-dom";

const Universities = () => {
    const {universities, filters} = useLoaderData();

    return (
        <div>
            <UniversitiesPage universities={universities} filters={filters}/>
        </div>
    )

}

export default Universities;