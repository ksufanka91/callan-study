import {useMatch} from "react-router-dom";

import universities from "../../data/university-data.json";
import UniversityDetail from "../content/UniversityDetail/UniversityDetail";

const UniversityDetailPage = () => {

    const match = useMatch("universities/:id");

    const id = match.params.id; // string

    const university = universities.find(u => u.id === id);

    if (!university) {
        return <h2>404</h2>
        // return <Page404/>
    }

    console.log(university)

    return (
        <UniversityDetail university={university}/>
    );
};

export default UniversityDetailPage;