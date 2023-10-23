import {useLoaderData} from "react-router-dom";

import UniversityDetail from "../content/UniversityDetail/UniversityDetail";

const UniversityDetailPage = () => {
    console.log('UniversityDetailPage')

    const {university} = useLoaderData();

    if (!university) {
        return <h2>404</h2>
        // return <Page404/>
    }

    return (
        <UniversityDetail university={university}/>
    );
};

export default UniversityDetailPage;