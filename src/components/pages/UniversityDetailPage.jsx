import UniversityDetail from "../content/UniversityDetail/UniversityDetail";
import {useLoaderData} from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

const UniversityDetailPage = () => {
    const {university} = useLoaderData();

    if (!university) {
        return <NotFoundPage/>;
    }

    return (
        <UniversityDetail university={university}/>
    );
};

export default UniversityDetailPage;