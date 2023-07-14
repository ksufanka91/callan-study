import LandingScreen from "../content/LandingScreen/LandingScreen";
import Advantages from "../content/Advantages/Advantages";
import Universities from "../content/Universities/Universities";
import Feedback from "../content/Feedback/Feedback";
import Students from "../content/Students/Students";
import Faq from "../content/Faq/Faq";
import ContactUs from "../content/ContactUs/ContactUs";
import Contacts from "../content/Contacts/Contacts";

import landing from "../../data/landing.json";
import universities from "../../data/universitites.json";
import feedback from "../../data/feedback.json";
import students from "../../data/students.json";
import faq from "../../data/faq.json";

import ComponentsContainer from "../ComponentsContainer";

const Home = () => {
    return (
        <>
            <LandingScreen landing={landing}/>

            <ComponentsContainer>
                <Advantages/>
                <Universities universities={universities}/>
                <Feedback feedback={feedback}/>
                <Students students={students}/>
            </ComponentsContainer>

            <Faq faq={faq}/>

            <ContactUs/>
            <Contacts/>
        </>
    )
}

export default Home;