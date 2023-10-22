import AboutUs from "../content/AboutUs/AboutUs";
import Services from "../content/AboutUs/Services";
import {useLoaderData} from "react-router-dom";


const About = () => {
    const {services} = useLoaderData();

    return (
        <div className="container">
            <AboutUs services={services}/>
            <Services/>
        </div>
    )
}

export default About;