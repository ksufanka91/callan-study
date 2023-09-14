import LandingScreen from "../content/LandingScreen/LandingScreen";
import Advantages from "../content/Advantages/Advantages";
import Universities from "../content/Universities/Universities";
import Feedback from "../content/Feedback/Feedback";
import Students from "../content/Students/Students";
import Faq from "../content/Faq/Faq";

import landing from "../../data/landing.json";
import universities from "../../data/universitites.json";
import feedback from "../../data/feedback.json";
import students from "../../data/students.json";
import faq from "../../data/faq.json";
import advantages from "../../data/advantages.json";

import ComponentsContainer from "../ComponentsContainer";

const Home = () => {
    return (
        <>
            <LandingScreen landing={landing}/>

            <ComponentsContainer>
                <Advantages
                    advantages={advantages}
                    subtitle={<><b>Добро пожаловать</b> в нашу группу иностранного образования</>}
                    title={"Почему мы?"}
                />
                <Universities universities={universities}/>
                <Feedback feedback={feedback}/>
                <Students students={students}/>
            </ComponentsContainer>

            <Faq faq={faq}/>
        </>
    )
}

export default Home;