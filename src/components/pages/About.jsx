import AboutUs from "../content/AboutUs/AboutUs";
import Services from "../content/AboutUs/Services";
import services from "../../data/services.json";

const About = () => {
    return (
        <>
            <div className="container">
                <AboutUs services={services}/>
                <Services/>
            </div>
        </>
    )
}

export default About;